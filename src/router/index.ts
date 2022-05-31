import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue';
import Carrito from '../views/Carrito.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: "Home",
    component: Home
  },
  {
    path: "/Carrito/:carrito",
    name: "Carrito",
    component: Carrito
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
