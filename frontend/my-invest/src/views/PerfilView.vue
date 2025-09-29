<script setup lang="ts">
import { ref } from "vue";
import NotificationManager from "@/components/NotificationManager/NotificationManager.vue";
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
import Button from "@/components/Button.vue";

const isSidebarCollapsed = ref(false);
const activeOption = ref("perfil");

const handleToggle = (isCollapsed: boolean) => {
  isSidebarCollapsed.value = isCollapsed;
};

const handleOption = (option: string) => {
  activeOption.value = option;
};
</script>
<template>
  <div class="flex min-h-screen bg-white">
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
      <div class="m-6">
        <div v-if="activeOption == 'perfil'">
          <div class="mb-6 pb-6 border-b-1 border-gray-200">
            <h1 class="text-2xl">Perfil</h1>
            <p class="text-gray-500 text-sm">
              Atualize sua foto e informações pessoais aqui
            </p>
          </div>
          <div class="flex">
            <img
              class="w-28 rounded-lg"
              src="https://pm1.aminoapps.com/6347/4f7487ba75a41e2ef9585cd7cb9ec03408d4e814_hq.jpg"
              alt="Foto de Perfil"
            />
            <div class="ml-4">
              <h2 class="text-xl mb-4">Foto de Perfil</h2>
              <div class="flex mb-2">
                <Button
                  Descricao="Importar Imagem"
                  icone="upload"
                  class="mr-4"
                  :tamanho="1"
                />
                <Button Descricao="Apagar" icone="delete" :tamanho="1" />
              </div>
              <p class="text-gray-500 text-xs">
                Suportamos PNGs,JPGs e GIFs, abaixo de 10mb
              </p>
            </div>
          </div>
        </div>
        <div v-if="activeOption == 'config'">Configurações</div>
        <div v-if="activeOption == 'not'">Notificação</div>
      </div>
    </div>
  </div>
  <NotificationManager />
</template>
