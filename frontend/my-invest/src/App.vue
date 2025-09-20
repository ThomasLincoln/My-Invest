<script setup>
import NotificationManager from "@/components/NotificationManager/NotificationManager.vue";
import { ref } from "vue";
import Header from "@/components/Header.vue";

const isCollapsed = ref(true);
const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value;
};
</script>

<template>
  <template v-if="!$route.meta.hideSidebar">
    <main
      class="flex-grow transtion-all duration-100 ease-in-out"
      :class="{
        'ml-64': !isCollapsed,
        'ml-16': isCollapsed,
      }"
    >
      <Header />
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
