<script setup lang="ts">
import NotificationManager from "@/components/NotificationManager/NotificationManager.vue";
</script>

<template>
  <div class="h-screen overflow-hidden">
    <div class="flex flex-col justify-center items-center pt-[30vh]">
      <h1 class="text-8xl">Bem vindo</h1>
      <h1 class="text-8xl">Investidor</h1>
      <RouterLink to="/" class="flex items-center">
        <p class="text-2xl">Iniciar</p>
        <span class="material-symbols-outlined pl-2"> arrow_forward </span>
      </RouterLink>
    </div>
    <div class="flex flex-col justify-center items-center pt-[20vh]">
      <div
        class="w-[50pc] h-[50pc] rounded-full bg-radial-[at_50%_75%] from-purple-200 via-violet-400 to-indigo-900 to-90%"
      ></div>
    </div>
  </div>
  <NotificationManager />
</template>
