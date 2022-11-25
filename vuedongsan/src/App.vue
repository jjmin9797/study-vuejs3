<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div class="menu">
    <a v-for="(item,i) in menus" :key="i">{{item}}</a>
  </div>

  <div class="black-bg" v-if="modalStatus">
    <div class="white-bg">
      <h4>{{nowModalInfo[0]}}</h4>
      <p>상세 페이지 내용</p>
      <p>신고수 : {{nowModalInfo[1]}}</p>
      <button @click="closeModal">닫기</button>
    </div> 
  </div>




  <div v-for="(product,i) in roomInfo" :key="i">
      <img :src="product.imageFile" class="room-img">
      <h3 @click="openModal(i)">{{product.name}}</h3>
      <p>{{product.price}}만원</p>
      <div>
      <button @click="increase(i)" class="item">허위매물신고</button>
      <span class="item">신고수 : {{product.singo}}</span>
      </div>
  </div>
</template>

<script>
// import reactive from 'vue';
import roomData from './assets/roomData.js';

export default {
  name: 'App',
  data() {
    return {
      roomInfo: roomData,
      modalStatus: false,
      nowModalInfo: ["",0]
    }
  },
  methods: {
    increase(number) {
      this.roomInfo[number].singo ++;
    },
    openModal(idx) {
      this.nowModalInfo[0] = this.roomInfo[idx].name;
      this.nowModalInfo[1] = this.roomInfo[idx].singo;
      this.modalStatus = true;
    },
    closeModal() {
      this.modalStatus = false;
    }
  },
  component: {}
}
</script>

<style>

body {
  margin : 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%; height:100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
}
.white-bg {
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
} 
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
}
.item {
  padding: 15px;
}
.room-img {
  width: 40%;
  margin-top: 40px;
}
</style>
