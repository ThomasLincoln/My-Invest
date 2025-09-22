<template>
  <div
    :class="[
      'bg-white border-r border-gray-300 transition-all duration-300 ease-in-out',
      isCollapsed ? 'w-12' : 'w-64',
    ]"
  >
    <div class="py-4 px-6 flex items-center justify-between">
      <a href="" v-if="!isCollapsed"> My Invest </a>
      <span
        @click="isCollapsed = !isCollapsed"
        class="material-symbols-outlined select-none hover:bg-violet-500 hover:text-white rounded-md cursor-pointer pl-2 py-2"
        :class="{ 'rotate-180': isCollapsed }"
      >
        arrow_back_ios
      </span>
    </div>
    <div v-if="!isCollapsed">
      <div class="mb-5">Main</div>
      <div class="mb-5">Library</div>
      <div class="mb-5">Following</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const isCollapsed = ref(false);
</script>
