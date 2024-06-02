// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "./src",
  css: ["~/assets/css/style.scss"],
  modules: [
    "@unocss/nuxt",
    "@nuxt/image",
    "nuxt-payload-analyzer",
    "@pinia/nuxt",
    "@nuxtjs/color-mode",
  ],
  colorMode: {
    preference: "system", // default value of $colorMode.preference
    fallback: "light", // fallback value if not system preference found
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "pf-v5-theme-",
    classSuffix: "",
    storageKey: "nuxt-color-mode",
  },
  postcss: {
    plugins: {
      cssnano: {
        preset: "advanced",
      },
    },
  },
});
