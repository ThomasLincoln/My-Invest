<script setup>
import { ref } from "vue";
import InputField from "./components/InputField/InputField.vue";
import Button from "./components/Button/Button.vue";

const username = ref("");
const senha = ref("");
</script>

<template>
  <section>
    <div class="flex flex-col justify-center items-center h-screen">
      <InputField
        v-model="username"
        label="Usuario"
        placeholder="seu nome de usuario"
        type="text"
      />
      <InputField v-model="senha" label="Senha" placeholder="sua senha" type="password" />
      <Button label="Entrar" />
    </div>
  </section>
</template>

<style scoped>

</style>
