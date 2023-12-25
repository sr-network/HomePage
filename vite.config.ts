import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";

// https://vitejs.dev/config/
export default defineConfig({
  ssr: {
    noExternal: ["vuetify"],
  },
  plugins: [vue(), vuetify()],
});
