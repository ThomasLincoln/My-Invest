<script setup lang="ts">
import { ref } from "vue";
import NotificationManager from "@/components/NotificationManager/NotificationManager.vue";
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
import Button from "@/components/Button.vue";
import CustomInput from "@/components/CustomInput.vue";

const isSidebarCollapsed = ref<Boolean>(false);
const activeOption = ref<String>("perfil");
const nome = ref<String>("");
const username = ref<String>("");

const handleToggle = (isCollapsed: boolean) => {
  isSidebarCollapsed.value = isCollapsed;
};

const handleOption = (option: string) => {
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
          <!-- <button
            class="px-4 py-2 text-sm font-medium border border-gray-200 bg-white rounded-r-lg cursor-pointer hover:bg-violet-600 hover:text-white"
            @click="handleOption('not')"
          >
            Notificação
          </button> -->
        </div>
      </div>
      <!-- Campos -->
      <div class="m-6 bg-white rounded-lg shadow-md mx-3 ml-4 w-[98.5%] p-4">
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
              <div class="flex mb-2 gap-x-4">
                <Button
                  Descricao="Importar Imagem"
                  icone="upload"
                  class="mr-4"
                  :tamanho="1"
                  tipo="comFundo"
                />
                <Button Descricao="Apagar" icone="delete" :tamanho="1" tipo="comFundo" />
              </div>
              <p class="text-gray-500 text-xs">
                Suportamos PNGs,JPGs e GIFs, abaixo de 10mb
              </p>
            </div>
          </div>
          <!-- Username -->
          <div class="flex gap-x-4">
            <CustomInput label="Nome Completo" modelValue="nome" />
            <CustomInput label="Username" modelValue="username" />
          </div>
          <div class="flex gap-x-4">
            <CustomInput label="Telefone" modelValue="phone" />
            <CustomInput label="Email" modelValue="email" />
          </div>
          <div class="flex gap-x-4 mt-6">
            <Button
              Descricao="Salvar mudanças"
              icone="save"
              class="mt-6"
              :tamanho="2"
              tipo="comFundo"
            />
            <Button
              Descricao="Cancelar"
              icone=""
              class="mt-6"
              :tamanho="2"
              tipo="semFundo"
            />
          </div>
        </div>
        <div v-if="activeOption == 'config'">
          <div class="mb-6 pb-6 border-b-1 border-gray-200">
            <h1 class="text-2xl">Configurações</h1>
            <p class="text-gray-500 text-sm">
              Gerencie sua senha e configurações de segurança
            </p>
          </div>
          <div>
            <CustomInput label="Senha Atual" modelValue="password" />
            <CustomInput label="Nova Senha" modelValue="newPassword" />
            <CustomInput label="Confirmar Senha" modelValue="confirmNewPassword" />
          </div>
          <div class="mt-6">
            <Button
              Descricao="Salvar mudanças"
              icone="save"
              :tamanho="2"
              tipo="comFundo"
            />
          </div>
        </div>
        <div v-if="activeOption == 'not'">
          <div class="mb-6 pb-6 border-b-1 border-gray-200">
            <h1 class="text-2xl">Notificações</h1>
            <p class="text-gray-500 text-sm">
              Gerencie sua senha e configurações de segurança
            </p>
          </div>
          <div class="flex flex-col gap-y-8">
            <div class="w-full pb-4 border-b-1 border-gray-300">
              <h1 class="text-xl mb-2">Alertas do Mercado</h1>
              <p class="text-gray-500 text-sm mb-2">
                Receba notificações sobre movimentações sobre o mercado
              </p>
              <Button Descricao="Configurar" :tamanho="1" tipo="semFundo" />
            </div>
            <div class="w-full pb-4 border-b-1 border-gray-300">
              <h1 class="text-xl mb-2">Recomendações</h1>
              <p class="text-gray-500 text-sm mb-2">
                Sugestões personalizadas de investimento
              </p>
              <Button Descricao="Configurar" :tamanho="1" tipo="semFundo" />
            </div>
            <div class="w-full pb-4 border-b-1 border-gray-300">
              <h1 class="text-xl mb-2">Relatórios</h1>
              <p class="text-gray-500 text-sm mb-2">Resumos mensais do seu portfólio</p>
              <Button Descricao="Configurar" :tamanho="1" tipo="semFundo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <NotificationManager />
</template>
