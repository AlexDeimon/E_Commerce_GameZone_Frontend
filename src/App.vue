<template>
  <header class="header">
    <nav id="nav" class="nav">
      <Logo/>
    </nav>  
    <ul class="nav-menu">
      <a href="https://gamezone-ms.web.app" class="btn btn-crud nav-menu_button link"><span class="text">Sistema de gestión</span><span class="icon"><i class="fas fa-user"></i></span></a>
    </ul>
  </header>
  <main>
    <router-view/>
  </main>
  <footer class="footer">
    <Logo/>
    <a href="https://github.com/AlexDeimon" class="link resaltado">❤️ Diego Sandoval</a>
  </footer>
</template>
<script>
import Logo from "@/components/Logo.vue";
import { defineComponent } from 'vue';
export default defineComponent({
  name: "App",
  components: {
    Logo,
  }
});
</script>
<style>
body {
  margin: 0;
}
main {
  position: relative;
  background-image: url("assets/GZ03.jpg");
  background-size: cover;
  background-position: center;
  min-height: 80vh;
  display: flex;
  align-items: center;
  vertical-align: center;
}
.header {
  background-color: black;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
.nav{
  flex-wrap: nowrap;
}
.nav-menu {
  padding: 0;
  margin: 1%;
  font-size: large;
}
.nav-menu_button {
  border: 1px solid #E5E7E9;
  color: white;
  font-family: "Helvetica";
  background-color: red;
}
.link,
.nav-menu_button {
  margin: 1%;
  text-decoration: none;
  display: inline-block;
}
.link:hover {
  text-decoration: none;
  color: white;
}
.btn-crud{
  width: 150px;
  height: 50px;
  display: flex;
  align-items: center;
}
.btn-crud, .btn-crud span {
 transition: 200ms;
}
.btn-crud .text{
  transform: translateX(-24px);
  white-space: pre-wrap;
}
.btn-crud .icon {
 position: absolute;
 border-left: 1px solid;
 transform: translateX(85px);
 height: 40px;
 width: 50px;
 display: flex;
 align-items: center;
 justify-content: center;
}
.btn-crud:hover .text {
 color: transparent;
}
.btn-crud:hover .icon {
 width: 120px;
 border-left: none;
 transform: translateX(0);
}
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  font-size: large;
}
@media screen and (max-width: 830px) {
  .header .nav{
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
  main{
    padding-bottom: 10px;
  }
}
</style>