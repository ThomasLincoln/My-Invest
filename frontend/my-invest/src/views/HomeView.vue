<script setup lang="ts">
import ToastNot from '@/components/ToastNotification/ToastNot.vue';

</script>
<template>
  <p><strong>Current route path:</strong> {{ $route.path }}</p>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/cadastro">Cadastrar</RouterLink>
  </nav>
  <ToastNot />
</template>