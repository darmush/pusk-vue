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
      path: '/jobs',
      name: 'jobs',
      component: () => import('../views/JobsView.vue')
    },
    {
      path: '/vacancy',
      name: 'vacancy',
      component: () => import('../views/VacancyView.vue')
    }
  ]
})

export default router
