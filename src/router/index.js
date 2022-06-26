import { createRouter, createWebHashHistory } from 'vue-router'
import login from '../views/login/login.vue'

const TEroutes = [
  {
    path: '/login',
    name: 'login',
    component: login
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  TEroutes
})

export default router
