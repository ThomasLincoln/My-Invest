<template>

  <!-- Informações básicas -->

  <div class="bg-white mx-24 my-12 rounded-lg p-8 flex border-2 border-gray-500">
    <!-- Foto -->
    <div class="flex grow">
      <div class="relative">
        <img src="https://www.politize.com.br/wp-content/uploads/2024/07/al-qaeda.jpg" alt="foto de perfil"
          class="inline-block size-24 rounded-full outline -outline-offset-1 outline-white/10" />

        <div class="absolute bottom-0 right-0 p-1.5 bg-yellow-600 rounded-full cursor-pointer 
              flex items-center justify-center">
          <span class="material-symbols-outlined text-sm text-white">
            photo_camera
          </span>
        </div>
      </div>
      <!-- Items do meio -->
      <div class="mx-6">
        <h1 class="font-bold text-black text-2xl">João Tannus</h1>
        <h2 class="text-gray-500 my-4 text-sm">joao.dasilva@email.com</h2>
        <span
          class="inline-flex items-center rounded-md bg-red-400/10 px-2 py-1 text-xs font-medium text-red-500 inset-ring inset-ring-red-400/20">Investidor
          de Risco</span>
      </div>
    </div>
    <!-- Editar botão -->
    <button class="text-black bg-gray-200 h-10 p-2 rounded-lg border-2 border-gray-300
               flex items-center justify-center">
      <span class="material-symbols-outlined">
        edit
      </span>
      <span class="ml-2">Editar Perfil</span>
    </button>
  </div>

  <!-- Informações pessoais -->
  <div class="bg-white bg-white mx-24 my-12  rounded-lg p-8 border-2 border-gray-500 text-black">
    <div class="border-b-2 pb-6 border-gray-200">
      <div class="flex align-center gap-2">
        <span class="material-symbols-outlined">
          person
        </span>
        <h1 class="font-bold text-xl">
          Informações pessoais
        </h1>
      </div>
      <p class="text-gray-500 text-sm">Gerencie suas informações básicas de perfil</p>
      <div class="flex flex-row gap-[40vw] mt-8">
        <div>
          <div class="mb-4">
            <h2 class="text-gray-500 text-sm mb-2">Nome Completo</h2>
            <p class="text-lg">João da Silva Tannus</p>
          </div>
          <div class="mb-4">
            <h2 class="text-gray-500 text-sm mb-2">Telefone</h2>
            <div class="flex gap-2">
              <span class="material-symbols-outlined">
                phone_enabled
              </span>
              <p class="text-lg">
                (11) 99999-9999
              </p>
            </div>
          </div>
          <h2 class="text-gray-500 text-sm mb-2">Data de nascimento</h2>
          <div class="flex gap-2">
            <span class="material-symbols-outlined">
              calendar_month
            </span>
            <p class="text-lg">
              14/03/1985
            </p>
          </div>
        </div>
        <div class="">
          <div class="mb-4">
            <h2 class="text-gray-500 text-sm mb-2">Email</h2>
            <div class="flex gap-2">
              <span class="material-symbols-outlined">
                mail
              </span>
              <p class="text-lg">
                joão.silva@email.com
              </p>
            </div>
          </div>
          <h2 class="text-gray-500 text-sm mb-2">Localização</h2>
          <div class="flex gap-2">
            <span class="material-symbols-outlined">
              location_on
            </span>
            <p class="text-lg">
              Taubaté, SP
            </p>
          </div>
        </div>
      </div>
    </div>

    <h2 class="text-gray-500 text-sm mt-4">Sobre você</h2>
    <p class="text-lg">
      Investidor de caixas de CS:go
    </p>

  </div>

  <div class="bg-white bg-white mx-24 my-12  rounded-lg p-8 border-2 border-gray-500 text-black">
    <div class="flex gap-2">
      <span class="material-symbols-outlined">
        shield
      </span>
      <h1 class="font-bold text-xl">
        Perfil de Investimento
      </h1>
    </div>
    <p class="text-gray-500 text-sm">Suas preferências e objetivos de investimento</p>
    <div class="flex mt-8 flex-row gap-[40vw]">
      <div>
        <h2 class="text-gray-500 text-sm mb-2">Perfil de Risco</h2>
        <span
          class="inline-flex items-center rounded-md bg-red-400/10 px-2 py-1 text-xs font-medium text-red-500 inset-ring inset-ring-red-400/20">Investidor
          de Risco</span>
      </div>
      <div>
        <h2 class="text-gray-500 text-sm mb-2">Objetivo de Investimento</h2>
        <p class="text-lg">
          Comprar a Riot Games
        </p>

      </div>
    </div>
  </div>

</template>
<script setup="ts">
</script>