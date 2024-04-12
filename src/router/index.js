import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
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
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        left: '0%',
        top: 80,
      }
    } else if (savedPosition) {
        return savedPosition;
    }
    return { top: 0, left: 0 };
  },
})

export default router
