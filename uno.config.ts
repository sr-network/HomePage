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
      provider: "bunny",
      fonts: {
        sans: "Noto Sans",
      },
    }),
    presetTypography(),
  ],
  shortcuts: {
    "text": "text-black dark:text-white",
    "link": "text-sky-700 no-underline hover:underline",
    "navbar-item": "p-3 text no-underline bg-inherit hover:bg-slate-100 dark:hover:bg-slate-800 border-none flex items-center",
    "mode-panel-button": "text text-lg bg-inherit hover:bg-slate-200 dark:hover:bg-slate-800 rounded border-none px-2 py-1",
  },
  transformers: [transformerCompileClass()],
});
