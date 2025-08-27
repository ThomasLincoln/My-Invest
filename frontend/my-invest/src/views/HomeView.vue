<script setup lang="ts">
import NotificationManager from '@/components/NotificationManager/NotificationManager.vue';

</script>
<template>
  <p><strong>Current route path:</strong> {{ $route.path }}</p>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/cadastro">Cadastrar</RouterLink>
  </nav>
  <NotificationManager />
</template>