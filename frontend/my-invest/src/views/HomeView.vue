<script setup lang="ts">
import { useToastStore } from '@/store/ToastStore';
import NotificationManager from '@/components/NotificationManager/NotificationManager.vue';

const toastStore = useToastStore();
</script>
<template>
  <p><strong>Current route path:</strong> {{ $route.path }}</p>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/cadastro">Cadastrar</RouterLink>
  </nav>
  <NotificationManager/>
</template>