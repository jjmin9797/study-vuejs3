<template>
  <div class="container">
    <h2 align="center">To-Do List</h2>
    <TodoSimpleForm @add-todo="addTodo" />

    <div align="center" v-if="!todos.length">추가된 Todo가 없습니다.</div>
    <TodoList 
    :todos="todos" 
    @toggle-todo="toggleTodo" 
    @delete-todo="deleteTodo"/>
  </div>
</template>

<script>
import { reactive } from "vue";
import TodoSimpleForm from "./components/TodoSimpleForm.vue";
import TodoList from "./components/TodoList.vue";

export default {
  components: { TodoSimpleForm, TodoList },

  setup() {
    const todos = reactive([]);
    const todoStyle = {
      textDecoration: "line-through",
      color: "gray",
    };
    const deleteTodo = (index) => {
      todos.splice(index, 1);
    };
    const addTodo = (todo) => {
      todos.push(todo);
    };
    const toggleTodo = (index) => {
      todos[index].completed = !todos[index].completed;
    }

    return {
      addTodo,
      todos,
      todoStyle,
      deleteTodo,
      toggleTodo,
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
