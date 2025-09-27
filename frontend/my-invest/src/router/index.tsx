// router/index.ts

import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import DashboardView from '@/views/DashboardView.vue'
import MetasView from '@/views/MetasView.vue'
import PortfolioView from '@/views/PortfolioView.vue'
import PerfilView from '@/views/PerfilView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
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
    path: '/portfolio',
    name: 'Portfolio',
    component: PortfolioView,
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: PerfilView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router