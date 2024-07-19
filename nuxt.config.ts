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

  compatibilityDate: "2024-07-11",

  appConfig: {
    umami: {
      host: "https://umami.slirv.vip/",
      id: "2d998227-18d9-4bb5-bbce-bb1e54c56fe5",
      autoTrack: true,
      version: 2,
      useDirective: true,
    },
  },
});
