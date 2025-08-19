<template>
  <div id="toast-success" class="flex items-center w-full max-w-xs p-4 mb-4 
    rounded-lg shadow-sm
    border-solid border-1 border-gray-500
    ">
    <div class="inline-flex items-center justify-center rounded-lg 
             shrink-0 w-8 h-8" :class="notificationClasses">
      <span class="material-symbols-outlined">
        {{ iconName }}
      </span>
    </div>
    <div class="ms-3 text-sm font-normal">{{ notification.mensagem }}</div>
    <button type="button" class="
    ms-auto -mx-1.5 -my-1.5 p-1.5 h-8 w-8
    bg-white text-gray-400
    dark:text-gray-500 dark:bg-gray-800
    inline-flex items-center justify-center
    hover:text-gray-900 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-700
    focus:ring-2 focus:ring-gray-300
    rounded-lg" data-dismiss-target="#toast-success" aria-label="Close" @click="removeNotification">
      <span class="material-symbols-outlined">
        close
      </span>
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useToastStore } from '@/store/ToastStore';
const props = defineProps({
  notification: {
    type: Object,
    required: true
  }
})

const toastStore = useToastStore();


const iconName = computed(() => {
  switch (props.notification.type) {
    case 'success':
      return 'check_circle';
    case 'error':
      return 'cancel';
    default:
      return 'info';
  }
});

const notificationClasses = computed(() => {
  switch (props.notification.type) {
    case 'success':
      return 'text-green-400 bg-green-800';
    case 'error':
      return 'text-red-400 bg-red-800';
    default:
      return 'text-yellow-400 bg-yellow-800';
  }
})
const removeNotification = () => {
  toastStore.removeNotification(props.notification.id);
}
</script>