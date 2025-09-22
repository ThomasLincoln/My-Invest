<template>
  <container
    class="flex bg-white w-[98.5%] m-4 rounded-lg shadow-md p-2 items-center justify-between font-semibold max-h-14"
  >
    <h1 class="mr-2 pl-2 text-xl" div="#titulo">Dashboard</h1>
    <Button />
  </container>
</template>

<script>
import Button from "./Button.vue";

export default {
  components: {
    Button,
  },
};
</script>
