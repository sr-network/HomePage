import {
  defineConfig,
  presetUno,
  presetIcons,
  transformerCompileClass,
  transformerDirectives,
} from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      prefix: "i-",
      extraProperties: {
        display: "inline-block",
      },
    }),
  ],
  transformers: [
    transformerCompileClass(),
    transformerDirectives({
      applyVariable: ["--apply"],
    }),
  ],
});
