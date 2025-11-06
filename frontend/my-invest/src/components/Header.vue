<script>
import Button from "./Button.vue";

export default {
  components: {
    Button,
  },
  props: {
    tituloPagina: String,
    adicionarItem: Boolean,
  },
  emits: ["abrir-modal-ativo"],
  methods: {
    notificarPaiParaAbrirModal() {
      console.log("1. [Header] Botão clicado. Emitindo @abrir-modal-ativo"); // <-- ADICIONE ISSO
      this.$emit("abrir-modal-ativo");
    },
  },
};
</script>

<template>
  <container
    class="flex bg-white w-[98.5%] m-4 rounded-lg shadow-md p-2 items-center justify-between font-semibold max-h-14"
  >
    <h1 class="mr-2 pl-2 text-xl" div="#titulo">{{ tituloPagina }}</h1>

    <div v-if="adicionarItem" @click="notificarPaiParaAbrirModal">
      <Button Descricao="+ Adicionar Ativo" :tamanho="2" tipo="comFundo" />
    </div>
  </container>
</template>
