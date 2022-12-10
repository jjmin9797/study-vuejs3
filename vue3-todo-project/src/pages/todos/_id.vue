<template>
  <h1>To-Do Page</h1>
  <hr />
  <div v-if="loading">Loading...</div>
  <form v-else
  @submit.prevent="onSave"
  >
    <div class="row">
      <div class="col-6">
        <div class="form-group">
          <label>Todo Subject</label>
          <input v-model="todo.subject" type="text" class="form-control" />
        </div>
      </div>

      <div class="col-6">
        <div class="form-group">
          <label>Status</label>
          <div><button class="btn"
          :class="todo.completed ? 'btn-success' : 'btn-danger'"
          @click="toggleTodoStatus"
          type="button"
          >{{todo.completed ? 'Completed' : 'Incompleted'}}
          </button></div>
        </div>
      </div>
    </div>

    <button type="submit" 
    class="btn btn-primary"
    :disabled="!todoUpdated"
    >Save</button>
    <button class="btn btn-outline-dark ml-2"
    @click="moveToTodoListPage"
    >Cancel</button>
  </form>
  <Toast v-if="showToast" :message="toastMessage" :type="toastAlertType"/>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import { ref, computed, onUnmounted } from "vue";
import axios from "axios";
import _ from 'lodash';
import Toast from '@/components/Toast.vue';
import { useToast } from '@/composables/toast.js';
export default {
  components: {
    Toast
  },
  setup() {
    const todo = ref(null);
    const originalTodo = ref(null);
    const loading = ref(true);
    const route = useRoute();
    const router = useRouter();
    const {
        toastMessage,
        toastAlertType,
        showToast,
        tiggerToast,
    } = useToast();

    onUnmounted(() => {
      clearTimeout(timeout.value);
    });

    const getTodo = async () => {
      try {
      const res = await axios.get(
        "http://localhost:3000/todos/" + route.params.id
      );
      todo.value = {...res.data};
      originalTodo.value = {...res.data};
      loading.value = false;
      }catch (err) {
        console.log(err);
        tiggerToast("ERROR",'danger');
      }
    };
    getTodo();
    
    const todoUpdated = computed(() => {
        console.log(_.isEqual(todo.value,originalTodo.value));
        return !_.isEqual(todo.value,originalTodo.value);
    })
    const toggleTodoStatus = () => {
        todo.value.completed = !todo.value.completed;
    };
    const moveToTodoListPage = () => {
        router.push({
            name: 'Todos'
        });
    };



    const onSave = async () => {
      try {
        const res = await axios.put('http://localhost:3000/todos/' + route.params.id,{
            subject: todo.value.subject,
            completed: todo.value.completed
        });
        originalTodo.value = {...res.data};
        
        tiggerToast("Successfully saved!",'success');

        // router.push({
        //     name: 'Todos'
        // });
      }catch(err) {
        console.log(err);
        tiggerToast("ERROR",'danger');
      }

    };

    return {
      todo,
      loading,
      toggleTodoStatus,
      moveToTodoListPage,
      onSave,
      todoUpdated,
      showToast,
      toastMessage,
      toastAlertType,
    };
  },
};
</script>

<style>
</style>