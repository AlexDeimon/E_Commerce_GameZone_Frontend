<template>
    <div class="container contenedor2">
      <h2 class="title3">Bienvenido <strong><span class="resaltado">{{username}}</span></strong> al Sistema de Gestión de Game Zone</h2>
    </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Home',
    data:function(){
      return {
        username: "none"
      }
      },
      created: function(){
        this.username = this.$route.params.username
      }
})
</script>
<style>
.title3{
  -webkit-text-stroke: 1.5px black;
  font-weight: bold;
}
</style>
