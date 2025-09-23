<template>
  <div
    :class="[
      'bg-white border-r border-gray-300 transition-all duration-300 ease-in-out pt-1',
      isCollapsed ? 'w-20' : 'w-52',
    ]"
  >
    <div class="py-4 px-6 mt-2 flex items-center justify-between">
      <a href="" v-if="!isCollapsed && isTextVisible"> My Invest </a>
      <span
        @click="toggleSidebar"
        class="material-symbols-outlined select-none hover:bg-violet-500 hover:text-white rounded-md cursor-pointer pl-2 py-2"
        :class="{ 'rotate-180': isCollapsed }"
      >
        arrow_back_ios
      </span>
    </div>
    <div class="ml-4 mt-6 pr-4">
      <div>
        <div
          class="px-2 py-2 mb-2 flex items-center rounded-lg hover:bg-violet-500 hover:text-white cursor-pointer"
        >
          <span class="material-symbols-outlined"> dashboard </span>
          <span class="ml-4" v-if="!isCollapsed && isTextVisible"> Dashboard </span>
        </div>
        <div
          class="px-2 py-2 mb-2 flex items-center rounded-lg hover:bg-violet-500 hover:text-white cursor-pointer"
        >
          <span class="material-symbols-outlined"> account_balance_wallet </span>
          <span class="ml-4" v-if="!isCollapsed && isTextVisible"> Portfólio</span>
        </div>
        <div
          class="px-2 py-2 mb-2 flex items-center rounded-lg hover:bg-violet-500 hover:text-white cursor-pointer"
        >
          <span class="material-symbols-outlined"> trophy </span>
          <span class="ml-4" v-if="!isCollapsed && isTextVisible"> Metas </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits(["toggle-collapse"]);
const isCollapsed = ref(true);
const isTextVisible = ref(false);

const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value;
  emit("toggle-collapse", isCollapsed.value);

  if (!isCollapsed.value) {
    setTimeout(() => {
      isTextVisible.value = true;
    }, 150);
  } else {
    isTextVisible.value = false;
  }
};
</script>
