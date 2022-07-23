import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/AppDashboard.vue'

const routes = [
   {
    path: '/',
    name: 'dahsboard',
    component: Dashboard
   }
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })

  export default router