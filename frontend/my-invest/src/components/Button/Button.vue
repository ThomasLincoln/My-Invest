<script setup lang="ts">
defineProps<{
  label?: string;
}>();
</script>

<template>
  <div class="relative group">
  <button class="
    relative inline-block
    p-px
    font-semibold leading-6
    bg-gray-800 
    cursor-pointer
    rounded-xl
    transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95
  ">
    <span class="
    absolute inset-0
    rounded-xl
    bg-gradient-to-r from-(--cor-primaria) to-(--cor-terciaria)
    p-[2px]
    opacity-0
    transition-opacity duration-500
    group-hover:opacity-100
    " />
    <span class="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
      <div class="relative z-10 flex items-center space-x-2">
        <span class="
          transition-all duration-500 group-hover:translate-x-1
        ">
          {{ label }}
        </span>
      </div>
    </span>
  </button>
  </div>
</template>
