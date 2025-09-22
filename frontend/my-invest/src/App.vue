<script setup>
import NotificationManager from "@/components/NotificationManager/NotificationManager.vue";
import { ref } from "vue";

const isCollapsed = ref(true);
const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value;
};
</script>

<template>
  <template v-if="!$route.meta.hideSidebar">
    <main class="flex-grow transtion-all duration-100 ease-in-out">
      <RouterView />
    </main>
    <NotificationManager />
  </template>
  <template v-else>
    <RouterView />
    <NotificationManager />
  </template>
</template>

<style scoped></style>
