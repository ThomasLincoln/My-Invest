<script setup>
import { ref } from 'vue';
import InputField from '@/components/InputField/InputField.vue';
import Button from '@/components/Button/Button.vue';
import { useToastStore } from '@/store/ToastStore';
import NotificationManager from '@/components/NotificationManager/NotificationManager.vue';

const username = ref("");
const senha = ref("")
const email = ref("")
const toastStore = useToastStore();
let resultado = true;


function cadastro() {
  if (resultado) {
    toastStore.addNotification("Cadastro feito", "success")
    resultado = !resultado;
  } else if (!resultado) {
    toastStore.addNotification("Aconteceu algum erro", "error")
    resultado = !resultado;
  }

  console.log("tentando cadastrar com ", username.value, senha.value);
}
</script>

<template>
  <section>
    <div class="flex flex-col justify-center items-center h-screen">
      <InputField v-model="username" label="Usuario" placeholder="seu nome de usuario" type="text" />
      <InputField v-model="email" label="Email" placeholder="seu email" type="email" />
      <InputField v-model="senha" label="Senha" placeholder="sua senha" type="password" />
      <Button label="Entrar" @click="cadastro" />
    </div>
    <NotificationManager />
  </section>
</template>