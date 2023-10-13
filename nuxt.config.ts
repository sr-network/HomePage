import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/scss/style.scss'],
  app: {
    head: {
      title: "Ou's Intro - Restent Ou & SliverRiver",
      titleTemplate: "Ou's Intro - Restent Ou & SliverRiver",
      meta: [
        {
          name: "description",
          content: "Blog of Restent which belongs to Sliver Complex.",
        },
      ],
      link: [
        {
          rel: "shortcut icon",
          href: "https://library.restent.win/images/icons/favicon.webp",
        },
        {
          rel: "apple-touch-icon",
          href: "https://library.restent.win/images/icons/favicon.webp",
        },
      ],
    }
  },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@pinia/nuxt',
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  srcDir: 'src/',
})
