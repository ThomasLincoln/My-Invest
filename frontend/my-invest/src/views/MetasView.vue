<script setup lang="ts">
import { ref } from "vue";
import NotificationManager from "@/components/NotificationManager/NotificationManager.vue";
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";

const isSidebarCollapsed = ref(false);

const handleToggle = (isCollapsed: boolean) => {
  isSidebarCollapsed.value = isCollapsed;
};
</script>
<template>
  <div class="flex min-h-screen">
    <Sidebar @toggle-collapse="handleToggle"></Sidebar>
    <div :class="['flex-1 transition-all duration-300 ease-in-out']">
      <Header tituloPagina="Metas" />
      Metas
    </div>
  </div>
  <NotificationManager />
</template>
