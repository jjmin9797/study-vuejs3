<template>
<router-view/>
  <div class="container">
    <h2 align="center">To-Do List</h2>
    <input
      class="form-control mb-3"
      type="text"
      v-model="searchText"
      placeholder="Search"
      @keyup.enter="searchTodo"
    />
    <TodoSimpleForm @add-todo="addTodo" />
    <div>{{ errorMessage }}</div>
    <div align="center" v-if="!todos.length">추가된 Todo가 없습니다.</div>
    <TodoList
      :todos="todos"
      @toggle-todo="toggleTodo"
      @delete-todo="deleteTodo"
    />
    <hr />
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li v-if="currentPage !== 1" class="page-item">
          <a style="cursur: pointer" 
          @click="getTodos(currentPage - 1)" 
          class="page-link">Previous</a>
        </li>
        <li
          v-for="page in numberOfPages"
          :key="page"
          class="page-item"
          :class="currentPage === page ? 'active' : ''"
          @click="getTodos(page)"
        >
          <a style="cursur: pointer" class="page-link" href="#">{{ page }}</a>
        </li>
        <li v-if="currentPage !== numberOfPages" class="page-item">
          <a style="cursur: pointer" @click="getTodos(currentPage + 1)" class="page-link" href="#"
            >Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { ref, computed, watchEffect, watch } from "vue";
import TodoSimpleForm from "./components/TodoSimpleForm.vue";
import TodoList from "./components/TodoList.vue";
import axios from "axios";

export default {
  components: { TodoSimpleForm, TodoList },

  setup() {
    const todos = ref([]);
    const errorMessage = ref("");
    const numberOfTodos = ref(0);
    const limit = 5;
    const currentPage = ref(1);
    const searchText = ref("");

    watchEffect(() => {
      console.log(currentPage.value);
    });

    const numberOfPages = computed(() => {
      return Math.ceil(numberOfTodos.value / limit);
    });

    const getTodos = async (page = currentPage.value) => {
      currentPage.value = page;
      try {
        const res = await axios.get(
          `http://localhost:3000/todos?_sort=id&_order=desc&subject_like=${searchText.value}&_page=${currentPage.value}&_limit=${limit}`
        );
        numberOfTodos.value = res.headers["x-total-count"];
        todos.value = res.data;
      } catch (err) {
        console.log(err);
        errorMessage.value = "Something went wrong.";
      }
    };
    getTodos(currentPage.value);
    const todoStyle = {
      textDecoration: "line-through",
      color: "gray",
    };
    const deleteTodo = async (index) => {
      const id = todos.value[index].id;
      try {
        await axios.delete("http://localhost:3000/todos/" + id);
        todos.value.splice(index, 1);
      } catch (err) {
        console.log(err);
      }
    };
    const addTodo = async (todo) => {
      //DB 저장
      errorMessage.value = "";
      try {
        await axios.post("http://localhost:3000/todos", {
          subject: todo.subject,
          completed: todo.completed,
        });
        getTodos(1);
      } catch (err) {
        console.log(err);
        errorMessage.value = "네트워크 오류";
      }
    };
    const toggleTodo = async (index) => {
      const id = todos.value[index].id;
      try {
        await axios.patch("http://localhost:3000/todos/" + id, {
          completed: !todos.value[index].completed,
        });
        todos.value[index].completed = !todos.value[index].completed;
      } catch (err) {
        console.log(err);
      }
    };

    let timeout = null;
    const searchTodo = () => {
      clearTimeout(timeout);
      getTodos(1);
    };
    watch(searchText, () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        getTodos(1);
      },1000);
    });
    // const filteredTodos = computed(() => {
    //   if (searchText.value) {
    //     return todos.value.filter((todo) => {
    //       return todo.subject.includes(searchText.value);
    //     });
    //   }
    //   return todos.value;
    // });
    return {
      addTodo,
      todos,
      todoStyle,
      deleteTodo,
      toggleTodo,
      searchText,
      // filteredTodos,
      errorMessage,
      numberOfPages,
      currentPage,
      getTodos,
      searchTodo,
    };
  },
};
</script>

<style>
.todo {
  color: gray;
  text-decoration: line-through;
}
.notTodo {
  color: red;
}
</style>
