<script setup lang="ts">
import { onMounted } from 'vue';
import ProfileCard from './components/ProfileCard.vue';

onMounted(() => {
  const script = document.createElement('script')
  script.async = true
  script.src = 'https://umami.slirv.vip/script.js'
  script.dataset.websiteId = 'fbe8ac0c-641d-4d0a-a03e-1e98844c9c52'
  document.head.appendChild(script)
})
</script>


<template>
  <div class="p-4">
    <div class="max-w-screen-lg container mx-auto">
      <div>
        <ProfileCard />
      </div>
    </div>
  </div>
</template>
