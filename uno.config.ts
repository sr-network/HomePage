import { defineConfig, presetUno, presetIcons, presetWebFonts } from "unocss";
import transformerCompileClass from "@unocss/transformer-compile-class";

export default defineConfig({
  safelist: ["i-ic-baseline-rss-feed"],
  presets: [
    presetUno(),
    presetIcons({
      prefix: "i-",
      extraProperties: {
        display: "inline-block",
      },
    }),
    presetWebFonts({
      provider: "bunny", // 默认提供者
      fonts: {
        sans: "Noto Sans",
      },
    }),
  ],
  transformers: [transformerCompileClass()],
});
