<template>
  <div :class="{ 'w-64': !isCollapsed, 'w-16': isCollapsed }"
    class="bg-gray-200 text-black flex flex-col justify-between h-screen transition-all duration-300 ease-in-out fixed">
    <div class="flex flex-col flex-grow p-4">
      <div class="mb-8 flex items-center border-b-2 border-gray-300">
        <h1 v-if="!isCollapsed" class="text-xl font-bold">InvestPro</h1>
        <button @click="toggleSidebar" class="ml-auto m-2 h-10 w-10 rounded hover:bg-indigo-400 hover:text-white">
          <span class="material-symbols-outlined h-6 w-6 transform transition-transform select-none"
            :class="{ 'rotate-180': !isCollapsed }">
            chevron_right
          </span>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />

        </button>
      </div>

      <nav class="flex-grow">
        <ul>
          <li v-for="item in menuItems" :key="item.name" class="mb-2">
            <router-link :to="item.path"
              class="flex items-center p-2 rounded-md hover:bg-indigo-400 hover:text-white transition-colors"
              :class="{ 'justify-center': isCollapsed, 'justify-start': !isCollapsed }">
              <span class="material-symbols-outlined h-6 w-6 select-none">
                {{ item.icon }}
              </span>
              <span v-if="!isCollapsed" class="ml-4">{{ item.name }}</span>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>

    <div class="p-4 border-t border-gray-700">
      <ul>
        <li v-for="item in footerItems" :key="item.name" class="mb-2">
          <router-link :to="item.path"
            class="flex items-center p-2 rounded-md hover:bg-indigo-400 hover:text-white transition-colors"
            :class="{ 'justify-center': isCollapsed, 'justify-start': !isCollapsed }">
            <span class="material-symbols-outlined h-6 w-6 select-none">
              {{ item.icon }}
            </span>
            <span v-if="!isCollapsed" class="ml-4">{{ item.name }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isCollapsed = ref(false);

const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value;
};

// Dados para os itens do menu
// Voce pode usar uma biblioteca de icones ou copiar o path SVG.
const menuItems = [
  {
    icon: 'Home', name: 'Início', path: "/"
  }
]
const footerItems = [
  { name: 'Configuracoes', path: '/configuracoes', icon: 'settings' },
  { name: 'Perfil', path: '/perfil', icon: 'person' }
];

</script>