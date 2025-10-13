<script setup lang="ts">
import { ref } from "vue";
import NotificationManager from "@/components/NotificationManager/NotificationManager.vue";
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
import Chart from "@/components/Chart.vue";
import Button from "@/components/Button.vue";

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
      <Header tituloPagina="Portfolio" :adicionar-item="adicionarItem" />
      <div class="flex mb-4 ml-2 mr-2">
        <div class="bg-white rounded-lg shadow-md grow p-4 mx-2">
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
        <div class="bg-white rounded-lg shadow-md grow mx-2 p-4">
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
        <div class="bg-white rounded-lg shadow-md grow mx-2 p-4">
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
        <div class="bg-white rounded-lg shadow-md grow mx-2 p-4">
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
      <div class="flex mb-4">
        <div class="bg-white rounded-lg shadow-md mx-3 ml-4 grow p-4">
          <h1 class="text-2xl">Valor Total do Portfólio</h1>
          <p class="text-xs">Evolução do Valor vs Benchmark nos últimos 6 meses</p>
          <Chart></Chart>
        </div>
        <div
          class="bg-white rounded-lg shadow-md mx-3 ml-1 grow p-4 w-110 flex flex-col justify-between"
        >
          <div>
            <div class="flex mb-2">
              <span class="material-symbols-outlined mr-2"> shield </span>
              <h2>Métricas de Risco</h2>
            </div>
            <p class="text-xs">Análise de risco do seu portfólio</p>
          </div>
          <div class="mb-10">
            <!-- Volatilidade -->
            <div class="mt-4">
              <div class="flex justify-between items-center">
                <h3>Volatilidade</h3>
                <p class="text-xs">45%</p>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                <div class="bg-green-300 h-2.5 rounded-full" style="width: 45%"></div>
              </div>
              <div class="flex items-center">
                <div class="w-3 h-3 rounded-full bg-green-300 mr-1"></div>
                <p class="text-xs">Baixo Risco</p>
              </div>
            </div>
            <!-- Beta -->
            <div class="mt-4">
              <div class="flex justify-between items-center">
                <h3>(β) Beta</h3>
                <p class="text-xs">1.1</p>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                <div class="bg-yellow-300 h-2.5 rounded-full" style="width: 60%"></div>
              </div>
              <div class="flex items-center">
                <div class="w-3 h-3 rounded-full bg-yellow-300 mr-1"></div>
                <p class="text-xs">Risco Moderado</p>
              </div>
            </div>
            <!-- VaR -->
            <div class="mt-4">
              <div class="flex justify-between items-center">
                <h3>Var (95%)</h3>
                <p class="text-xs">8.5%</p>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                <div class="bg-red-300 h-2.5 rounded-full" style="width: 90%"></div>
              </div>
              <div class="flex items-center">
                <div class="w-3 h-3 rounded-full bg-red-300 mr-1"></div>
                <p class="text-xs">Risco Alto</p>
              </div>
            </div>
          </div>
          <div>
            <div class="flex">
              <span class="material-symbols-outlined mr-2"> trending_up </span>
              <p>Score de Risco Geral</p>
            </div>
            <h2 class="text-4xl text-green-700">7.2/10</h2>
            <p class="text-xs">Portfólio bem diversificado</p>
          </div>
        </div>
      </div>
      <div class="flex mb-4">
        <div class="bg-white rounded-lg shadow-md mx-3 ml-4 grow p-4">
          <div class="flex justify-between">
            <h1 class="text-2xl">Suas Posições</h1>
            <Button Descricao="Ver Mais" :tamanho="1" tipo="comFundo" />
          </div>
          <p class="text-sm">Posições principais do seu portfólio</p>
          <div class="flex items-center mt-6 justify-between">
            <!-- left -->
            <div class="flex">
              <p
                class="bg-violet-200 p-2 w-14 h-14 rounded-md mr-4 text-violet-800 flex items-center justify-center text-lg"
              >
                AA
              </p>
              <div>
                <p class="text-md">AAPL</p>
                <p class="text-xs text-slate-400">Apple Inc.</p>
                <p class="text-xs text-slate-400">50 ações - Tecnologia</p>
              </div>
            </div>
            <!-- right -->
            <div class="flex flex-col items-end">
              <p class="text-xl">R$ 8.800,50</p>
              <div class="flex items-center">
                <span
                  class="material-symbols-outlined mr-2"
                  style="font-size: 1.2pc; color: green"
                >
                  trending_up
                </span>
                <p class="text-sm text-green-700">Score de Risco Geral</p>
              </div>
            </div>
          </div>
          <div class="flex items-center mt-6 justify-between">
            <!-- left -->
            <div class="flex">
              <p
                class="bg-violet-200 p-2 w-14 h-14 rounded-md mr-4 text-violet-800 flex items-center justify-center text-lg"
              >
                AA
              </p>
              <div>
                <p class="text-md">AAPL</p>
                <p class="text-xs text-slate-400">Apple Inc.</p>
                <p class="text-xs text-slate-400">50 ações - Tecnologia</p>
              </div>
            </div>
            <!-- right -->
            <div class="flex flex-col items-end">
              <p class="text-xl">R$ 8.800,50</p>
              <div class="flex items-center">
                <span
                  class="material-symbols-outlined mr-2"
                  style="font-size: 1.2pc; color: green"
                >
                  trending_up
                </span>
                <p class="text-sm text-green-700">Score de Risco Geral</p>
              </div>
            </div>
          </div>

          <div class="flex items-center mt-6 justify-between">
            <!-- left -->
            <div class="flex">
              <p
                class="bg-violet-200 p-2 w-14 h-14 rounded-md mr-4 text-violet-800 flex items-center justify-center text-lg"
              >
                AA
              </p>
              <div>
                <p class="text-md">AAPL</p>
                <p class="text-xs text-slate-400">Apple Inc.</p>
                <p class="text-xs text-slate-400">50 ações - Tecnologia</p>
              </div>
            </div>
            <!-- right -->
            <div class="flex flex-col items-end">
              <p class="text-xl">R$ 8.800,50</p>
              <div class="flex items-center">
                <span
                  class="material-symbols-outlined mr-2"
                  style="font-size: 1.2pc; color: green"
                >
                  trending_up
                </span>
                <p class="text-sm text-green-700">Score de Risco Geral</p>
              </div>
            </div>
          </div>
          <div class="flex items-center mt-6 justify-between">
            <!-- left -->
            <div class="flex">
              <p
                class="bg-violet-200 p-2 w-14 h-14 rounded-md mr-4 text-violet-800 flex items-center justify-center text-lg"
              >
                AA
              </p>
              <div>
                <p class="text-md">AAPL</p>
                <p class="text-xs text-slate-400">Apple Inc.</p>
                <p class="text-xs text-slate-400">50 ações - Tecnologia</p>
              </div>
            </div>
            <!-- right -->
            <div class="flex flex-col items-end">
              <p class="text-xl">R$ 8.800,50</p>
              <div class="flex items-center">
                <span
                  class="material-symbols-outlined mr-2"
                  style="font-size: 1.2pc; color: green"
                >
                  trending_up
                </span>
                <p class="text-sm text-green-700">Score de Risco Geral</p>
              </div>
            </div>
          </div>
        </div>

        <!-- ! Alocação por setor -->
        <div class="bg-white rounded-lg shadow-md mx-3 ml-1 w-110 p-4">
          <h1 class="text-2xl">Alocação por Setor</h1>
          <p class="text-sm">Distribuição por Setor</p>

          <!-- ! Setor de Tecnologia -->
          <div class="mt-4 flex items-center justify-between">
            <div class="flex items-center">
              <div class="w-6 h-6 rounded-full bg-violet-300 mr-1"></div>
              <div class="ml-4">
                <p>Tecnologia</p>
                <p class="text-sm text-gray-500">Meta 40%</p>
              </div>
            </div>
            <div class="flex items-center">
              <p>45%</p>
              <div class="w-3 h-3 rounded-full bg-red-300 mr-1 ml-2"></div>
            </div>
          </div>

          <!-- Setor de Saúde -->
          <div class="mt-4 flex items-center justify-between">
            <div class="flex items-center">
              <div class="w-6 h-6 rounded-full bg-green-300 mr-1"></div>
              <div class="ml-4">
                <p>Saúde</p>
                <p class="text-sm text-gray-500">Meta 25%</p>
              </div>
            </div>
            <div class="flex items-center">
              <p>20%</p>
              <div class="w-3 h-3 rounded-full bg-yellow-300 mr-1 ml-2"></div>
            </div>
          </div>

          <!-- Finanças -->
          <div class="mt-4 flex items-center justify-between">
            <div class="flex items-center">
              <div class="w-6 h-6 rounded-full bg-orange-300 mr-1"></div>
              <div class="ml-4">
                <p>Finanças</p>
                <p class="text-sm text-gray-500">Meta 20%</p>
              </div>
            </div>
            <div class="flex items-center">
              <p>18%</p>
              <div class="w-3 h-3 rounded-full bg-yellow-300 mr-1 ml-2"></div>
            </div>
          </div>
          <!-- Energia -->
          <div class="mt-4 flex items-center justify-between">
            <div class="flex items-center">
              <div class="w-6 h-6 rounded-full bg-yellow-300 mr-1"></div>
              <div class="ml-4">
                <p>Energia</p>
                <p class="text-sm text-gray-500">Meta 10%</p>
              </div>
            </div>
            <div class="flex items-center">
              <p>12%</p>
              <div class="w-3 h-3 rounded-full bg-red-300 mr-1 ml-2"></div>
            </div>
          </div>
          <!-- Outros -->
          <div class="mt-4 flex items-center justify-between">
            <div class="flex items-center">
              <div class="w-6 h-6 rounded-full bg-red-300 mr-1"></div>
              <div class="ml-4">
                <p>Outros</p>
              </div>
            </div>
            <div class="flex items-center">
              <p>5%</p>
              <div class="w-3 h-3 rounded-full bg--300 mr-1 ml-2"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- Insights do Mercado, Recomendações e Transações Recentes -->
      <div class="flex mb-4">
        <div class="bg-white rounded-lg shadow-md mx-3 ml-3 grow p-4"></div>
        <div class="bg-white rounded-lg shadow-md mx-3 ml-1 w-110 p-4"></div>
      </div>
    </div>
  </div>
  <NotificationManager />
</template>
