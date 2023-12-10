<template>
  <v-app>
    <themeHeader />
    <div class="headerSpace" />
    <themeContent />
    <themeFooter />
  </v-app>
</template>

<script setup lang="ts">
useHead({
  title: 'Ou\'s Intro',
  meta: [
    { name: 'description', content: 'Ou\'s Intro - Introduction of Restent Ou & SliverRiver' }
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
    {
      rel: "preload",
      href: "https://library.restent.win/images/introBanner.webp",
      as: "image"
    }
  ]
})
useSeoMeta({
  title: 'Ou\'s Intro',
  ogTitle: 'Ou\'s Intro',
  description: 'Ou\'s Intro - Introduction of Restent Ou & SliverRiver',
  ogDescription: 'Ou\'s Intro - Introduction of Restent Ou & SliverRiver',
  ogImage: 'https://library.restent.win/images/icons/favicon.webp',
})

import { useTheme } from 'vuetify'
const vuetifyTheme = useTheme()

function toggleTheme(themeName?: string) {
  vuetifyTheme.global.name.value = themeName ?? (vuetifyTheme.global.current.value.dark ? 'light' : 'dark')
}

onMounted(() => {
  const darkMatch = matchMedia('(prefers-color-scheme: dark)')
  toggleTheme(darkMatch.matches ? 'dark' : 'light')
  darkMatch.addEventListener('change', (event) =>
    toggleTheme(event.matches ? 'dark' : 'light')
  )
})
</script>