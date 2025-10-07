<script setup lang="ts">
import { ref } from "vue";
import NotificationManager from "@/components/NotificationManager/NotificationManager.vue";
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
import Chart from "@/components/Chart.vue";

const isSidebarCollapsed = ref(false);
const adicionarItem = ref(true);

const handleToggle = (isCollapsed: boolean) => {
  isSidebarCollapsed.value = isCollapsed;
};
</script>
<template>
  <div class="flex min-h-screen">
    <Sidebar @toggle-collapse="handleToggle"></Sidebar>
    <div :class="['flex-1 transition-all duration-300 ease-in-out']">
      <Header tituloPagina="Dashboard" :adicionar-item="adicionarItem" />
      <div class="flex mb-4">
        <div class="bg-white rounded-lg shadow-md mx-3 ml-4 grow p-4">
          <div class="flex justify-between mb-12 items-center">
            <h3 class="text-sm">Valor total do Portfólio</h3>
            <span class="material-symbols-outlined" style="font-size: 1.5pc">
              attach_money
            </span>
          </div>
          <h2 class="text-2xl font-medium">R$ 123.456.789</h2>
          <div class="flex items-center">
            <span
              class="material-symbols-outlined"
              style="font-size: 1.2pc; color: green"
            >
              trending_up
            </span>
            <p class="text-sm text-green-600">+12,5% desde o mês passado</p>
          </div>
        </div>
        <!-- Ganho e perda de hoje -->
        <div class="bg-white rounded-lg shadow-md mx-3 ml-4 grow p-4">
          <div class="flex justify-between mb-12 items-center">
            <h3 class="text-sm">Ganho/Perda de Hoje</h3>
            <span class="material-symbols-outlined" style="font-size: 1.5pc">
              trending_up
            </span>
          </div>
          <h2 class="text-2xl font-medium text-green-600">+R$ 123</h2>
          <div class="flex items-center">
            <span
              class="material-symbols-outlined"
              style="font-size: 1.2pc; color: green"
            >
              trending_up
            </span>
            <p class="text-sm text-green-600">+2,4% hoje</p>
          </div>
        </div>
        <!-- Total de Investimentos -->
        <div class="bg-white rounded-lg shadow-md mx-3 ml-4 grow p-4">
          <div class="flex justify-between mb-12 items-center">
            <h3 class="text-sm">Total de Investimentos</h3>
            <span class="material-symbols-outlined" style="font-size: 1.5pc">
              attach_money
            </span>
          </div>
          <h2 class="text-2xl font-medium">23</h2>
          <div class="flex items-center">
            <p class="text-sm text-gray-400">Distribuídos em 8 setores</p>
          </div>
        </div>
        <!-- Índice Sharpe -->
        <div class="bg-white rounded-lg shadow-md mx-3 ml-4 grow p-4">
          <div class="flex justify-between mb-12 items-center">
            <h3 class="text-sm">Índice Sharpe</h3>
            <span class="material-symbols-outlined" style="font-size: 1.5pc">
              planner_review
            </span>
          </div>
          <h2 class="text-2xl font-medium">1.62</h2>
          <div class="flex items-center">
            <p class="text-sm text-green-600">Excelente relação risco/retorno</p>
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="bg-white rounded-lg shadow-md mx-3 ml-4 grow p-4">
          <Chart></Chart>
        </div>
      </div>
    </div>
  </div>
  <NotificationManager />
</template>
