<script setup lang="ts">
import NotificationManager from "@/components/NotificationManager/NotificationManager.vue";
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
</script>
<template>
  <div class="flex min-h-screen">
    <div class="w-64 bg-white border-r border-gray-300">
      <Sidebar></Sidebar>
    </div>
    <Header />
  </div>
  Home
  <NotificationManager />
</template>
