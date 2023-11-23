
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/collier',
      name: 'Collier',
      component: () => import('../views/CollierView.vue')
    },
    {
      path: '/bracelet',
      name: 'bracelet',
      component: () => import('../views/BraceletView.vue')
    },
    {
      path: '/boreilles',
      name: 'boucles oreilles',
      component: () => import('../views/BoreillesView.vue')
    }
  ]
})

export default router