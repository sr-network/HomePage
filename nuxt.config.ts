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
  ],
  postcss: {
    plugins: {
      cssnano: {
        preset: "advanced",
      },
    },
  },
});
