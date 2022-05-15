import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Auth from '../views/Auth.vue';
import Home from '../views/Home.vue';
import Productos from '../views/Productos.vue';
import Carrito from '../views/Carrito.vue';
import Clientes from '../views/Clientes.vue';
import Compras from '../views/Compras.vue';
import App from '../App.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: "root",
    component: App
  }, 
  {
    path: '/userAuth',
    name: "Auth",
    component: Auth
  }, 
  {
    path: '/Home',
    name: "Home",
    component: Home
  },
  {
    path: "/Productos",
    name: "Productos",
    component: Productos
  },
  {
    path: "/Carrito",
    name: "Carrito",
    component: Carrito
  },
  {
    path: "/Clientes",
    name: "Clientes",
    component: Clientes
  },
  {
    path: "/Compras",
    name: "Compras",
    component: Compras
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
