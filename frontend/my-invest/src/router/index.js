import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import SignupView from '@/views/SignupView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: SignupView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;