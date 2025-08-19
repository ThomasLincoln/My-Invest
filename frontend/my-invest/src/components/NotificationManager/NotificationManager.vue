<template>
  <div class="fixed top-4 right-4 z-50">
    <TransitionGroup name="list" tag="ul">
      <div v-for="notification in toastStore.notifications" :key="notification.id" class="mb-4">
        <ToastNot :notification="notification" />
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup>
import { useToastStore } from '@/store/ToastStore';
import ToastNot from '../ToastNotification/ToastNot.vue';

const toastStore = useToastStore();
</script>

<style scope>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>