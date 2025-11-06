<script setup lang="ts">
import { ref } from "vue";
import CurrencyInput from "./CurrencyInput.vue";
import type { CurrencyInputOptions } from "vue-currency-input";

defineProps<{
  modelValue: boolean;
  title?: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

function closeModal() {
  emit("update:modelValue", false);
  ticker.value = "";
  dataInput.value = `${year}-${mes}-${dia}`;
  quantidade.value = 1;
  preco.value = 0;
}

const dataAtual = new Date();
const year = dataAtual.getFullYear();
const mes = String(dataAtual.getMonth() + 1).padStart(2, "0");
const dia = String(dataAtual.getDate()).padStart(2, "0");

const ticker = ref("");
const dataInput = ref(`${year}-${mes}-${dia}`);
const quantidade = ref(1);

// Criar uma referencia par a o preço
const preco = ref<number | null>(0.0);

const opcoesMoeda: CurrencyInputOptions = {
  currency: "BRL",
  locale: "pt-BR",
  valueRange: {
    min: 0,
  },
};

function salvar() {
  console.log("Dados a salvar:");
  console.log("Ticker:", ticker.value);
  console.log("Data:", dataInput.value);
  console.log("Quantidade:", quantidade.value);
  console.log("Preço (número):", preco.value);
  closeModal();
}
</script>

<template>
  <div
    v-if="modelValue"
    class="top-0 left-0 fixed w-full h-full bg-gray-950/80 flex justify-center items-center z-99"
    @click="closeModal"
  >
    <div
      class="overflow-hidden p-0 bg-white shadow-xl w-1/2 max-w-[80%] rounded-lg box-border z-90 flex flex-col"
      @click.stop
    >
      <header
        class="flex justify-between items-center p-5 border-b-1 border-solid border-sky-50"
      >
        <h2 class="m-0 text-xl">{{ title || "Meu modal" }}</h2>
        <button
          @click="closeModal"
          class="border-none bg-none cursor-pointer text-slate-600"
          style="font-size: 1.5rem"
        >
          <span class="material-symbols-outlined select-none"> close </span>
        </button>
      </header>
      <form class="p-4 md:p-5">
        <div class="grid gap-4 mb-4 grid-cols-2">
          <!-- Ticker do ativo -->
          <div class="col-span-2">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900"
              >Ticker do Ativo</label
            >
            <input
              type="text"
              name="name"
              id="name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="BBAS3"
            />
          </div>
          <div class="col-span-2 sm:col-span-1">
            <label for="data" class="block mb-2 text-sm font-medium text-gray-900"
              >Data de Aquisição</label
            >
            <input
              type="date"
              name="data"
              id="data"
              v-model="dataInput"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            />
          </div>
          <div class="col-span-2 sm:col-span-1">
            <label for="quantidade" class="block mb-2 text-sm font-medium text-gray-900"
              >Quantidade de Ativos</label
            >
            <input
              type="number"
              name="quantidade"
              id="quantidade"
              min="1"
              v-model="quantidade"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            />
          </div>
          <div class="col-span-2 sm:col-span-1">
            <label for="preco" class="block mb-2 text-sm font-medium text-gray-900"
              >Preço em R$</label
            >
            <CurrencyInput
              id="preco"
              v-model="preco"
              :options="opcoesMoeda"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            />
          </div>
          <!-- Data e Quantidade -->
        </div>
        <button
          type="submit"
          class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Salvar
        </button>
      </form>
    </div>
  </div>
</template>
