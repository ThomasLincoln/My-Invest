<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter, useRoute } from 'vue-router';
import InputField from '@/components/InputField/InputField.vue';
import Button from '@/components/Button/Button.vue';
import { useToastStore } from '@/store/ToastStore';

const firstName = ref("");
const lastName = ref("");
const senha = ref("");
const email = ref("");
const toastStore = useToastStore();
const router = useRouter();

async function cadastro() {
  const dadosFormulario = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    passwordHash: senha.value
  }
  try {
    const response = await axios.post('http://localhost:3000/api/users', dadosFormulario);
    console.log("Resposta do backend:", response.data);
    toastStore.addNotification("Cadastro feito", "success");
  } catch (error) {
    console.error("Erro ao se cadastrar:", error);
    const mensagemErro = error.response?.data?.message || "Aconteceu um erro ao tentar se cadastrar"
    toastStore.addNotification(mensagemErro, "error")
  }
}

function navigateToLogin() {
  router.push("/entrar");
}
</script>

<template>
  <section>
    <div class="flex flex-col justify-center items-center h-screen">
      <InputField v-model="firstName" label="Primeiro nome" placeholder="seu primeiro nome" type="text" />
      <InputField v-model="lastName" label="Sobrenome" placeholder="seu sobrenome" type="text" />
      <InputField v-model="email" label="Email" placeholder="seu email" type="email" />
      <InputField v-model="senha" label="Senha" placeholder="sua senha" type="password" />
      <div class="flex flex-col justify-center items-center">
        <Button label="Cadastrar" @click="cadastro" class="mb-2" />
        <Button label="Entrar" @click="navigateToLogin" />
      </div>
    </div>
  </section>
</template>