import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CollectDataView from '@/views/CollectDataView.vue'
import DashboardView from '@/views/DashboardView.vue'
import ResultView from '@/views/ResultView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        label: 'Startseite',
        hasSidebar: true,
      }
    },
    {
      path: '/collect',
      name: 'collectData',
      component: CollectDataView,
      meta: {
        label: 'Datenerfassung',
        hasSidebar: true,
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      meta: {
        label: 'Dashboard',
        hasSidebar: true,
      }
    },
    {
      path: '/results',
      name: 'results',
      component: ResultView,
      meta: {
        label: 'Ergebnisse',
        hasSidebar: true,
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: {
        label: 'About',
        hasSidebar: false,
      }
    },
  ],
})

export default router
