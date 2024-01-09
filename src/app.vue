<script setup lang="ts">
import Content from './components/theme/Content.vue';
import Footer from './components/theme/Footer.vue';
import { useTheme } from 'vuetify';
import { onMounted } from 'vue';

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

<template>
  <v-app>
    <Content />
    <Footer />
  </v-app>
</template>