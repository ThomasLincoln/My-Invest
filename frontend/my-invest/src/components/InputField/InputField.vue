<script setup lang="ts">
import { defineModel, defineProps } from "vue";

defineProps<{
  label?: string;
  placeholder?: string;
  type?: string;
}>();

const model = defineModel<string | number>();
</script>
<template>
  <div class="flex flex-col mb-4">
    <label :for="id" class="block text-gray-200 text-lg font-bold mb-2">
      {{ label }}
    </label>
    <input
      v-model="model"
      :type="type"
      :placeholder="placeholder"
      :id="id"
      class="outline-none border-b-2 border-b-indigo-500"
    />
  </div>
</template>
<style>
@import "tailwindcss";
</style>
