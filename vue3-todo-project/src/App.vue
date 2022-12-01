<template>
  <div class="container">
    <h2 align="center">To-Do List</h2>
    <input 
        class="form-control mb-3" 
        type="text"
        v-model="searchText" 
        placeholder="Search" 
        />
    <TodoSimpleForm @add-todo="addTodo" />
    <div>{{errorMessage}}</div>
    <div align="center" v-if="!todos.length">추가된 Todo가 없습니다.</div>
    <TodoList 
    :todos="filteredTodos" 
    @toggle-todo="toggleTodo" 
    @delete-todo="deleteTodo"/>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import TodoSimpleForm from "./components/TodoSimpleForm.vue";
import TodoList from "./components/TodoList.vue";
import axios from 'axios';

export default {
  components: { TodoSimpleForm, TodoList },

  setup() {
    const todos = ref([]);
    const errorMessage = ref('');
        const getTodos = async () => {
      try {
        const res = await axios.get('http://localhost:3000/todos');
        todos.value = res.data;
        console.log(todos)
      } catch (err) {
        console.log(err);
        errorMessage.value = 'Something went wrong.';
      }    
    };
    getTodos();
    const todoStyle = {
      textDecoration: "line-through",
      color: "gray",
    };
    const deleteTodo = async (index) => {
      const id = todos.value[index].id;
      try {
        await axios.delete('http://localhost:3000/todos/'+id);
        todos.value.splice(index, 1);
      }catch(err){
        console.log(err);
      }
      
    };
    const addTodo = async (todo) => {
      //DB 저장
      errorMessage.value = '';
      try {
        const res = await axios.post('http://localhost:3000/todos', {
        subject: todo.subject,
        completed: todo.completed,
      });
      todos.value.push(res.data);
      }catch (err) {
        console.log(err);
        errorMessage.value = "네트워크 오류";
      }
    };
    const toggleTodo = (index) => {
      todos.value[index].completed = !todos.value[index].completed;
    }
    const searchText = ref('');
    const filteredTodos = computed(() => {
      if (searchText.value) {
        return todos.value.filter(todo => {
          return todo.subject.includes(searchText.value);
        });
      }
      return todos.value;
    });
    return {
      addTodo,
      todos,
      todoStyle,
      deleteTodo,
      toggleTodo,
      searchText,
      filteredTodos,
      errorMessage,
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
