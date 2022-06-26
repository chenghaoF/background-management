import { createRouter, createWebHashHistory } from 'vue-router'
import login from '../views/login/login.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: login
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
