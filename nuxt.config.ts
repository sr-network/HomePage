// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: {
    componentIslands: true,
  },

  devtools: { enabled: true },
  srcDir: "./src",

  modules: [
    "@unocss/nuxt",
    "@nuxt/image",
    "nuxt-payload-analyzer",
    "@pinia/nuxt",
    "@nuxtjs/color-mode",
  ],

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

  compatibilityDate: "2024-07-11",
});