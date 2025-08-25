<template>
  <div :class="{ 'w-64': !isCollapsed, 'w-16': isCollapsed }"
    class="bg-gray-700 text-white flex flex-col justify-between h-screen transition-all duration-300 ease-in-out fixed">

    <!-- Top part -->
    <div class="flex flex-col flex-grow p-4">
      <div class="mb-8 flex items-center">
        <h1 v-if="!isCollapsed" class="text-xl font-bold">My Invest</h1>
        <button @click="toggleSidebar" class="ml-auto p-1 rounded hover:bg-gray-800">
          <span class="material-symbols-outlined h-6 w-6 transform transition-transform select-none"
            :class="{ 'rotate-180': isCollapsed }">
            chevron_right
          </span>
        </button>
      </div>
    </div>

    <!-- Middle Icons -->
    <nav class="flex-grow">
      <ul>
        <li v-for="item in menuItems" :key="item.name" class="mb-2">
          <router-link :to="item.path" class="flex items-center p-4 rounded-md hover:gray-800 transition-colors"
            :class="{ 'jusfity-center': isCollapsed, 'justify-start': !isCollapsed }">
            <span class="material-symbols-outlined h-6 w-6 select-none">
              {{ item.icon }}
            </span>
            <span v-if="!isCollapsed" class="ml-4">{{ item.name }}</span>
          </router-link>
        </li>
      </ul>
    </nav>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const isCollapsed = ref(false);

const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value;
}

const menuItems = [
  {
    icon: 'person', name: 'Perfil', path: "/profile"
  }
]
</script>