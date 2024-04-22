import { presetUno, presetIcons, presetWebFonts } from "unocss";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "./src",
  css: ["~/assets/global.scss"],
  modules: [
    "@unocss/nuxt",
    "nuxt-simple-robots",
    "nuxt-schema-org",
    "@nuxt/image",
    "nuxt-payload-analyzer",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
  ],
  unocss: {
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
          sans: "Ubuntu",
        },
      }),
    ],
  },
  schemaOrg: {
    identity: {
      type: "Person",
      name: "Ou's Intro",
      url: "https://www.gxres.net",
      logo: "https://library.gxres.net/images/icons/favicon.webp",
    },
  },
});
