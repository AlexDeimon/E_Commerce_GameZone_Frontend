<template>
  <router-link to="/" class="link">
    <h1 class="titulo1"><span class="resaltado">Game</span> Zone <span class="resaltado">2.0</span></h1>
    <img src="https://i.imgur.com/mYxzx5S.jpg" alt="Gamezone img" class="img">
  </router-link>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "Logo",
});
</script>
<style >
.titulo1 {
  margin: 0;
  text-align: center;
  font-family: "Bangers", cursive;
  color: white;
  font-size: xx-large;
}
.resaltado {
  color: red;
}
.img {
  max-width: max-content;
  max-height: 25px;
}
</style>