import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";

export const useToastStore = defineStore("toast", {
  state: () => ({
    notifications: []
  }),
  actions: {
    addNotification(mensagem: string, type: string, timeout = 5000) {
      const id = uuidv4();
      this.notifications.push({
        id,
        mensagem,
        type
      });

      if (timeout > 0) {
        setTimeout(() => {
          this.removeNotification(id);
        }, timeout);
      }
    },
    removeNotification(id) {
      this.notifications = this.notifications.filter(notification => notification.id !== id);
    }
  }
})