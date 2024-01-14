<template>
  <Header />
  <Content />
  <Footer />
</template>

<script setup lang="ts">
import Header from './components/Header.vue'
import Content from './components/Content.vue'
import Footer from './components/Footer.vue'
import { setColorScheme } from 'mdui/functions/setColorScheme';

setColorScheme('#2196F3');
</script>