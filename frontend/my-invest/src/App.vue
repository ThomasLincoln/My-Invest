<script setup>
import { ref } from 'vue'
import InputField from './components/InputField/InputField.vue';

const username = ref("");
const senha = ref("");
</script>

<template>
  <section>
    <div class="container">
      <InputField v-model="username" label="Usuario" placeholder="usuario" 
        type="text"/>
      <InputField v-model="senha" label="Senha" placeholder="senha" type="password"/>
    </div>
  </section>
</template>

<style scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  background-color: #1f1f1f;
}

</style>
