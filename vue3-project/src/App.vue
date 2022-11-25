<template>
<button 
  class="btn btn-primary"
  v-on:click="updateName"
>
  INSTALL
</button>
<div>{{myName}}</div>
<div>사용자 명 : {{user.userName}}</div>
<div>보유 머니 : {{user.haveMoney}}</div>
</template>


<script>
  import {ref} from 'vue';
  import {reactive} from 'vue';
  export default {
    setup() {
      const myName = ref("정민");
      const user = reactive({
        id: 1,
        userName: "정민",
        haveMoney: 20000000000
      })
      const updateName = () => {
        user.haveMoney -= 1000;
      }
      
      return {
        updateName,
        myName,
        user,
      };
    }
  }
</script> 


<style>
#app {
  margin: 20px;
}
</style>
