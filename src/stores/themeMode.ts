import { defineStore } from "pinia";

type states = {
  themePreference: "light" | "dark" | "auto";
};

export const useThemeStore = defineStore('theme', {
  persist: true,
  state: (): states => ({
    themePreference: "auto",
  }),
  actions: {
    setTheme(theme: "light" | "dark" | "auto") {
      this.themePreference = theme;
    }
  }
})