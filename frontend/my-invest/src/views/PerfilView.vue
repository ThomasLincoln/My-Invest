<script setup lang="ts">
import { ref } from "vue";
import NotificationManager from "@/components/NotificationManager/NotificationManager.vue";
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";

const isSidebarCollapsed = ref(false);
const activeOption = ref();

const handleToggle = (isCollapsed: boolean) => {
  isSidebarCollapsed.value = isCollapsed;
};

const handleOption = (option: String) => {
  activeOption.value = option;
};
</script>
<template>
  <div class="flex min-h-screen">
    <Sidebar @toggle-collapse="handleToggle"></Sidebar>
    <div :class="['flex-1 transition-all duration-300 ease-in-out']">
      <Header tituloPagina="Configurações da Conta" />
      <div class="m-4 flex justify-center">
        <div class="inline-flex rounded-md shadow-xs" role="group">
          <button
            class="px-4 py-2 text-sm font-medium border border-gray-200 bg-white rounded-s-lg cursor-pointer hover:bg-violet-600 hover:text-white"
            @click="handleOption('perfil')"
          >
            Perfil
          </button>
          <button
            class="px-4 py-2 text-sm font-medium border border-gray-200 bg-white cursor-pointer hover:bg-violet-600 hover:text-white"
            @click="handleOption('config')"
          >
            Configurações
          </button>
          <button
            class="px-4 py-2 text-sm font-medium border border-gray-200 bg-white rounded-r-lg cursor-pointer hover:bg-violet-600 hover:text-white"
            @click="handleOption('not')"
          >
            Notificação
          </button>
        </div>
      </div>
      <!-- Campos -->
      <div class="m-4">
        <div v-if="activeOption == 'perfil'">
          <h1>Perfil</h1>
          <p>Atualize sua foto e informações pessoais aqui</p>
          <img
            class="w-40"
            src="https://pm1.aminoapps.com/6347/4f7487ba75a41e2ef9585cd7cb9ec03408d4e814_hq.jpg"
            alt="Foto de Perfil"
          />
        </div>
        <div v-if="activeOption == 'config'">Configurações</div>
        <div v-if="activeOption == 'not'">Notificação</div>
      </div>
    </div>
  </div>
  <NotificationManager />
</template>
