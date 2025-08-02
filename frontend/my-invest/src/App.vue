<script setup>
import { ref } from "vue";
import InputField from "./components/InputField/InputField.vue";

const username = ref("");
const senha = ref("");
</script>

<template>
  <section>
    <div class="flex flex-col justify-center items-center h-screen">
      <InputField v-model="username" label="Usuario" placeholder="usuario" type="text" />
      <InputField v-model="senha" label="Senha" placeholder="senha" type="password" />
    </div>
  </section>
</template>

<style scoped>
section {
  background-color: #1f1f1f;
}
</style>
