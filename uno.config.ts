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
    "navbar-item": "py-4 px-2 bg-inherit hover:bg-slate-100 dark:hover:bg-slate:950 border-none flex items-center",
    "mode-panel-button": "text bg-inherit hover:bg-slate-200 dark:hover:bg-slate:950 rounded border-none p-2",
  },
  transformers: [transformerCompileClass()],
});
