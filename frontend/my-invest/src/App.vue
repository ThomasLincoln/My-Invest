<script setup>
import NotificationManager from '@/components/NotificationManager/NotificationManager.vue';
import SideBar from './components/SideBar.vue';
import { ref } from 'vue';

const isCollapsed = ref(true);
const toggleSidebar = () => {
    isCollapsed.value = !isCollapsed.value;
};
</script>

<template>
    <template v-if="!$route.meta.hideSidebar">
        <SideBar :isCollapsed="isCollapsed" @toggle-sidebar="toggleSidebar" />
        <main class="flex-grow transtion-all duration-100 ease-in-out" :class="{
            'ml-64': !isCollapsed,
            'ml-16': isCollapsed
        }">
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
