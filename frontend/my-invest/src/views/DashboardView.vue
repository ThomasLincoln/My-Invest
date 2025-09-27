<script setup lang="ts">
import { ref } from "vue";
import NotificationManager from "@/components/NotificationManager/NotificationManager.vue";
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";

const isSidebarCollapsed = ref(false);
const adicionarItem = ref(true);

const handleToggle = (isCollapsed: boolean) => {
  isSidebarCollapsed.value = isCollapsed;
};
</script>
<template>
  <div class="flex min-h-screen">
    <Sidebar @toggle-collapse="handleToggle"></Sidebar>
    <div :class="['flex-1 transition-all duration-300 ease-in-out']">
      <Header tituloPagina="Dashboard" :adicionar-item="adicionarItem" />
      Dashboard
    </div>
  </div>
  <NotificationManager />
</template>
