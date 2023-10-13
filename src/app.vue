<template>
  <v-app>
    <Header />
    <v-main>
      <Body />
    </v-main>
    <Footer />
  </v-app>
</template>

<script setup lang="ts">
  import Header from './theme/components/Header.vue'
  import Body from './theme/components/Body.vue'
  import Footer from './theme/components/Footer.vue'
</script>