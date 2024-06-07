import { defineConfig, presetUno, presetIcons, presetWebFonts, presetTypography } from "unocss";
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
    presetTypography(),
  ],
  shortcuts: {
    "text": "text-black dark:text-white",
    "link": "text-sky-700 no-underline",
    "component-background": "light:bg-white dark:bg-slate-950",
    "mode-panel-button": "text text-lg bg-inherit hover:bg-slate-200 dark:hover:bg-slate:950 rounded border-none",
  },
  transformers: [transformerCompileClass()],
});
