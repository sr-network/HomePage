// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  experimental: {
    componentIslands: true,
  },
  appConfig: {
    umami: {
      host: "https://umami.slirv.vip/",
      id: "2d998227-18d9-4bb5-bbce-bb1e54c56fe5",
      autoTrack: true,
      version: 2,
      useDirective: true,
      debug: true,
    },
  },
  srcDir: "./src",
  modules: [
    "@unocss/nuxt",
    "@nuxt/image",
    "nuxt-payload-analyzer",
    "@nuxtjs/color-mode",
    "@nuxt/eslint",
    "@nuxtjs/robots"
  ],
  extends: ["nuxt-umami"],
  postcss: {
    plugins: {
      cssnano: {
        preset: "advanced",
      }
    }
  },
  colorMode: {
    preference: "system",
    fallback: "light",
    classPrefix: "",
    classSuffix: "",
    storageKey: "nuxt-color-mode",
  },
})