<template>
  <h1>{{homeName}}</h1>
<div class="container">
  <h2>TODO API TEST</h2>
  <p>ToDo야 잘 들어가라!</p>
  <form @submit.prevent="saveTodo">
    <div class="form-group">
      <input v-model="todo" type="text" class="form-control" placeholder="Default form control" name="text1">
    </div>
    <div class="form-group">
      <input type="text" class="form-control-plaintext" placeholder="Todo를 입력하세요." name="text2">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>
<div>{{content}}</div>
<div>{{todos}}</div>

</template>

<script>
import {ref} from 'vue';
import axios from 'axios';
export default {
  setup() {
    const homeName = ref('Home')

    const todo = ref('')
    const content = ref('')
    const todos = ref([])
    const getRes = async () => {
      const res = await axios.get('http://localhost:3030/test/todos');
      todos.value = res.data;
    };

    getRes()
    const saveTodo = async () => {
      console.log(todo.value);
      const res = await axios.post('http://localhost:3030/add/todo', {
        subject: todo.value,
      });
      content.value = res.data;
      const res2 = await axios.get('http://localhost:3030/test/todos');
      todos.value = res2.data;
    };
    return {
      homeName,
      saveTodo,
      content,
      todo,
      todos,
    }
  }

}
</script>

<style>

</style>