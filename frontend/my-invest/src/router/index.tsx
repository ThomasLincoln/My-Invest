// router/index.ts

import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

import DashboardView from '@/views/DashboardView.vue'
import MetasView from '@/views/MetasView.vue'
import PortfolioView from '@/views/PortfolioView.vue'
import PerfilView from '@/views/PerfilView.vue'
import WelcomeView from '@/views/WelcomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Portfolio',
    component: PortfolioView,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardView,
  },
  {
    path: '/metas',
    name: 'Metas',
    component: MetasView,
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: PerfilView,
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: WelcomeView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router