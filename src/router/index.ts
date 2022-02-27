import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'form',
    component: () => import('../views/Form.vue')
  },
  {
    path: '/preview',
    name: 'preview',
    component: () => import('../views/Preview.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
