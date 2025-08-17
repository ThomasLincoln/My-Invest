<script setup lang="ts">



</script>
<template>
  <p><strong>Current route path:</strong> {{ $route.path }}</p>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/cadastro">Cadastrar</RouterLink>
  </nav>
  <ToastNotification/>
</template>