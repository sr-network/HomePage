import { defineStore } from "pinia";

type states = {
  themePreference: "light" | "dark" | "auto";
};

export const useStore = defineStore({
  id: "Store",
  persist: true,
  state: (): states => ({
    themePreference: "auto",
  }),
  actions: {
    setTheme(theme: 'light' | 'dark' | 'auto') {
      this.themePreference = theme;
    },
  },
});
