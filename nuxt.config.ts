// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  experimental: {
    componentIslands: true,
  },
  srcDir: "./src",
  modules: [
    "@unocss/nuxt",
    "@nuxt/image",
    "nuxt-payload-analyzer",
    "@nuxtjs/color-mode",
    "@nuxt/eslint",
  ],
  extends: ["nuxt-umami"],
  postcss: {
    plugins: {
      cssnano: {
        preset: "advanced",
      },
    },
  },
  colorMode: {
    preference: "system",
    fallback: "light",
    classPrefix: "",
    classSuffix: "",
    storageKey: "nuxt-color-mode",
  },
});
