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
    "@nuxtjs/robots",
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
  appConfig: {
    umami: {
      host: "https://umami.slirv.vip/",
      id: "fbe8ac0c-641d-4d0a-a03e-1e98844c9c52",
      autoTrack: true,
      ignoreLocalhost: true,
      version: 2
    }
  }
});
