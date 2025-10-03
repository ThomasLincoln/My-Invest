<template>
  <label class="flex flex-col mt-8 grow">
    {{ label }}
    <input
      type="text"
      :name="name"
      v-model="model"
      class="rounded-lg border-gray-300 mt-2"
    />
  </label>
</template>

<script>
export default {
  name: "CustomInput",
  props: {
    label: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String,
      required: true,
    },
  },
  computed: {
    name() {
      return this.label.toLowerCase();
    },
  },
  model: {
    get() {
      return this.value;
    },
    set(value) {
      this.$emit("input", value);
    },
  },
};
</script>
