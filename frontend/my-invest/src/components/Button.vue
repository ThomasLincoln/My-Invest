<template>
  <button
    class="bg-violet-400 hover:bg-violet-600 text-white px-4 py-2 rounded-lg cursor-pointer"
  >
    <div v-if="tamanho == 1" class="flex items-center justify-between">
      <span class="material-symbols-outlined mr-2"> {{ icone }} </span>
      <p class="text-xs">
        {{ Descricao }}
      </p>
    </div>
    <div v-if="tamanho != 1" class="flex items-center justify-between">
      <span class="material-symbols-outlined mr-2"> {{ icone }} </span>
      <p>
        {{ Descricao }}
      </p>
    </div>
  </button>
</template>
<script>
export default {
  props: {
    Descricao: String,
    icone: String,
    tamanho: Number,
    tipo: String,
  },
};
</script>
