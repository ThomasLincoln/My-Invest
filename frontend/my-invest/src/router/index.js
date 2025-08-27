import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import SignupView from '@/views/SignupView.vue';
import LoginView from '@/views/LoginView.vue';
import ProfileView from '@/views/ProfileView.vue';
import DadosPessoais from '@/views/Perfil/DadosPessoais.vue';
import Preferencias from '@/views/Perfil/Preferencias.vue';
import Seguranca from '@/views/Perfil/Seguranca.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      hideSidebar: false,
    }
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: SignupView,
    meta: {
      hideSidebar: true,
    }
  },
  {
    path: '/entrar',
    name: 'Login',
    component: LoginView,
    meta: {
      hideSidebar: true,
    }
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: ProfileView,
    meta: {
      hideSidebar: false,
    },
    children: [
      {
        path: '',
        name: 'Perfil.Dados',
        component: DadosPessoais
      },
      {
        path: 'seguranca',
        name: 'Perfil.Seguranca',
        component: Seguranca
      },
      {
        path: 'preferencias',
        name: 'Perfil.Preferencias',
        component: Preferencias
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});


export default router;