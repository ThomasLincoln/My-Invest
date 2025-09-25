<template>
  <div
    :class="[
      'bg-white border-r border-gray-300 transition-all duration-300 ease-in-out pt-1',
      isCollapsed ? 'w-20' : 'w-52',
    ]"
  >
    <div class="flex flex-col justify-between h-full">
      <div>
        <!-- Logo -->
        <div class="py-4 px-5 mt-2 flex items-center justify-between">
          <a href="" v-if="!isCollapsed && isTextVisible" class="pl-2"> My Invest </a>
          <span
            @click="toggleSidebar"
            class="material-symbols-outlined select-none hover:bg-violet-500 hover:text-white rounded-md cursor-pointer pl-2 py-2"
            :class="{ 'rotate-180': isCollapsed }"
          >
            arrow_back_ios
          </span>
        </div>
        <!-- Opções -->
        <div class="ml-4 mt-6 pr-5">
          <div>
            <RouterLink
              to="/dashboard"
              class="px-2 py-2 mb-2 flex items-center rounded-lg hover:bg-violet-500 hover:text-white cursor-pointer"
            >
              <span class="material-symbols-outlined"> dashboard </span>
              <span class="ml-4" v-if="!isCollapsed && isTextVisible"> Dashboard </span>
            </RouterLink>
            <RouterLink
              to="/portfolio"
              class="px-2 py-2 mb-2 flex items-center rounded-lg hover:bg-violet-500 hover:text-white cursor-pointer"
            >
              <span class="material-symbols-outlined"> account_balance_wallet </span>
              <span class="ml-4" v-if="!isCollapsed && isTextVisible"> Portfólio</span>
            </RouterLink>
            <RouterLink
              to="/metas"
              class="px-2 py-2 mb-2 flex items-center rounded-lg hover:bg-violet-500 hover:text-white cursor-pointer"
            >
              <span class="material-symbols-outlined"> trophy </span>
              <span class="ml-4" v-if="!isCollapsed && isTextVisible"> Metas </span>
            </RouterLink>
          </div>
        </div>
      </div>
      <!-- Bottom -->
      <div class="ml-2 pl-2 mt-6 pr-3 mr-2 border-t-1 border-slate-200 pt-4">
        <RouterLink
          to="perfil"
          class="px-2 py-2 mb-2 flex items-center rounded-lg hover:bg-violet-500 hover:text-white cursor-pointer"
        >
          <span class="material-symbols-outlined"> person </span>
          <span class="ml-4" v-if="!isCollapsed && isTextVisible"> Perfil </span>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";

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
