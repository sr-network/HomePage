import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import UnoCSS from "unocss/vite";
import { presetUno, presetIcons } from 'unocss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS({
      presets: [
        presetUno(),
        presetIcons({
          prefix: "i-",
          extraProperties: {
            display: "inline-block",
          },
        }),
      ],
    }),
  ],
});
