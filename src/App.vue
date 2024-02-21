<script setup lang="ts">
import { onMounted } from 'vue';
import Navbar from './components/theme/Navbar.vue';
import Content from './components/theme/Content.vue';
import Footer from './components/theme/Footer.vue';

onMounted(() => {
  const script = document.createElement('script')
  script.async = true
  script.src = 'https://umami.slirv.vip/script.js'
  script.dataset.websiteId = 'fbe8ac0c-641d-4d0a-a03e-1e98844c9c52'
  document.head.appendChild(script)
})
</script>

<template>
    <Navbar />
    <Content />
    <Footer />
</template>
