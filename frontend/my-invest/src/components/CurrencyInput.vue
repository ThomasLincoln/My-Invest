<template>
  <input type="text" ref="inputRef" class="input-formatado" />
</template>

<script setup lang="ts">
import { useCurrencyInput, type CurrencyInputOptions } from 'vue-currency-input';
import { watch, type PropType } from 'vue';

// Definir props e emits
const props = defineProps({
  modelValue: {
    type: Number,
    default: null
  },
  options: {
    type: Object as PropType<CurrencyInputOptions>,
      required: true
  }
})

// O componente quem vai emitir o evento para atualizar o v-model
const emit = defineEmits<{
(e: 'update:modelValue', value: number | null): void}>();

// Usar o Hook da Biblioteca
const {inputRef, setValue, numberValue } = useCurrencyInput(
  props.options,
  false
)

// Sincronizar o V-Model, nós ficamos observando o numberValue, quando o usuário
// digitar essa variável muda, jogando essa mudança para o v-model
watch(numberValue, (newValue) => {
  if(newValue !== props.modelValue){
    emit('update:modelValue', newValue)
  }
})

// Obersvamos o modelValue que vem do pai, se ele for atualizado, nós atualizamos o valor dentro do input
watch(() => props.modelValue, (newValue) => {
  if(newValue !== numberValue.value){
    setValue(newValue)
  }
})
</script>
