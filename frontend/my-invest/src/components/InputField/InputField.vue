<script setup lang="ts">
import { defineEmits } from 'vue';
defineProps<{
    label?: string
    placeholder?: string
    type?: string
}>()

defineEmits(['update:modelValue'])
const model = defineModel();
</script>
<template>
    <div class="container">
        <label for="name">{{ label }}</label>
        <input v-model="model" :type="type" :placeholder="placeholder" id="name">
    </div>
</template>
<style>
.container{
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;
}

.container label{
    font-size: x-large;
    margin-bottom: 0.4em;
}
.container input{
    font-size: medium;
    border: none;
    border-bottom: 0.1em solid darkgray;
    background: none;
    color: white;
    outline: none;
}
</style>