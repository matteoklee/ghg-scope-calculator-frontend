import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CollectDataView from '@/views/collect/CollectDataView.vue';
import DashboardView from '@/views/dashboard/DashboardView.vue';
import ResultView from '@/views/ResultView.vue';
import StatsView from '@/views/dashboard/StatsView.vue';
import EvidenceView from '@/views/dashboard/EvidenceView.vue';
import CertificationView from '@/views/dashboard/CertificationView.vue';
import GeneralDashboardView from '@/views/dashboard/GeneralDashboardView.vue';
import NotFound from '@/views/NotFound.vue';
import LoginView from '@/views/auth/LoginView.vue'
import RegisterView from '@/views/auth/RegisterView.vue'
import OverView from '@/views/collect/OverView.vue'
import ScopeView from '@/views/collect/ScopeView.vue'

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
      },
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        label: 'Anmelden',
        hasSidebar: false,
      },
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta: {
        label: 'Registrieren',
        hasSidebar: false,
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: NotFound,
      meta: {
        label: 'Not Found',
        hasSidebar: true
      }
    },
    {
      path: '/collect',
      component: CollectDataView,
      children: [
        {
          path: '',
          name: 'overview',
          component: OverView,
          meta: {
            label: 'Überblick',
            hasSidebar: true,
          },
        },
        {
          path: 'scopes',
          name: 'scopes',
          component: ScopeView,
          meta: {
            label: 'Scopes',
            hasSidebar: true,
          },
        },
      ]
    },
    {
      path: '/dashboard',
      component: DashboardView,
      children: [
        {
          path: '',
          name: 'dashboard',
          component: GeneralDashboardView,
          meta: {
            label: 'Dashboard',
            hasSidebar: true,
          },
        },
        {
          path: 'stats',
          name: 'dashboard-stats',
          component: StatsView,
          meta: {
            label: 'Statistiken',
            hasSidebar: true,
          },
        },
        {
          path: 'evidence',
          name: 'dashboard-evidence',
          component: EvidenceView,
          meta: {
            label: 'Nachweise',
            hasSidebar: true,
          },
        },
        {
          path: 'certs',
          name: 'dashboard-certification',
          component: CertificationView,
          meta: {
            label: 'Zertifizierungen',
            hasSidebar: true,
          },
        },
      ],
    },
    {
      path: '/results',
      name: 'results',
      component: ResultView,
      meta: {
        label: 'Ergebnisse',
        hasSidebar: true,
      },
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
      },
    },
  ],
});

export default router;
