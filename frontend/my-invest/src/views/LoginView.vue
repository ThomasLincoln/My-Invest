<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter, useRoute } from 'vue-router';
import InputField from '@/components/InputField/InputField.vue';
import Button from '@/components/Button/Button.vue';
import { useToastStore } from '@/store/ToastStore';

const email = ref("");
const senha = ref("")
const toastStore = useToastStore();
const router = useRouter();

axios.defaults.withCredentials = true;

async function login() {
  router.push("/profile");
  const dadosFormulario = {
    email: email.value,
    password: senha.value,
  };

  try {
    console.log(dadosFormulario)
    const response = await axios.post("http://localhost:3000/api/users/login",
      dadosFormulario);
    console.log("Resposta do backend: ", response.data);
    toastStore.addNotification("Login feito", "success");
  } catch (error) {
    console.log("Erro ao fazer o login", error);
    const mensagemErro = error.response?.data?.message ||
      "Aconteceu um erro ao tentar se cadastrar";
    toastStore.addNotification(mensagemErro, "error");
  }
}

function navigateToCadastro() {
  router.push("/cadastro");
}
</script>

<template>
  <section>
    <div class="flex flex-col justify-center items-center h-screen">
      <InputField v-model="email" label="Email" placeholder="seu email" type="text" />
      <InputField v-model="senha" label="Senha" placeholder="sua senha" type="password" />
      <div class="flex flex-col justify-center items-center">
        <Button label="Entrar" @click="login" class="mb-2" />
        <Button label="Cadastrar" @click="navigateToCadastro" />
      </div>
    </div>
  </section>
</template>