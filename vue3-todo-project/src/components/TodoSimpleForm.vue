<template>
  <form @submit.prevent="addTodo">
    <div class="d-flex">
      <div class="flex-grow-1 mr-2">
        <input class="form-control" v-model="todo" placeholder="입력하세요." />
      </div>
      <div>
        <button class="btn btn-primary" type="submit">추가</button>
      </div>
    </div>

    <div align="center" v-show="hasError" style="color: red">
      This field cannot be empty
    </div>
  </form>
</template>

<script>
import { ref } from "vue";
export default {
  emits: ['add-todo'],
  setup(props, {emit}) {
    const todo = ref("");
    const hasError = ref(false);
    const addTodo = () => {
      if (todo.value === "") {
        hasError.value = true;
      } else {
        emit("add-todo", {
          id: Date.now(),
          subject: todo.value,
          completed: false,
        });
        hasError.value = false;
        todo.value = "";
      }
    };
    return {
      todo,
      hasError,
      addTodo,
    };
  },
};
</script>

<style scoped>
</style>