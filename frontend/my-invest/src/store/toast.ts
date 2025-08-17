import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useToastStore = defineStore("toast", {
  state: () => ({
    notifications: []
  }),
})