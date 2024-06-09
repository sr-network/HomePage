<template>
  <header class=":uno: px-4 h-13 shadow">
    <div class=":uno: flex justify-between gap-4">
      <div class=":uno: h-full flex flex-row">
        <NuxtLink class=":uno: navbar-item" to="/">
          <NuxtImg class=":uno: w-7 h-7 rounded-full" width="28" height="28"
            src="https://library.gxres.net/images/icons/favicon.webp" alt="Site favicon" />
        </NuxtLink>
        <NuxtLink class=":uno: navbar-item" title="Visit my homepage - You're here now!" to="/">Home</NuxtLink>
        <NuxtLink class=":uno: navbar-item" title="Visit my blog" href="https://blog.gxres.net">Blog</NuxtLink>
        <NuxtLink class=":uno: navbar-item" title="Visit my library" href="https://library.gxres.net">Library
        </NuxtLink>
      </div>
      <div class=":uno: h-full flex flex-row">
        <button @click="open = !open" title="Change the site theme" aria-label="Change the site theme"
          class=":uno: navbar-item">
            <div class=":uno: text-xl py-1 i-ic-baseline-contrast" />
        </button>
      </div>
    </div>
  </header>
  <div v-if="open" class=":uno: flex justify-end">
    <div class=":uno: fixed px-4">
      <div class=":uno: max-w-sm rounded-lg shadow-lg">
        <div class=":uno: p-2 flex flex-col">
          <button @click="$colorMode.preference = 'dark'; open = !open" class=":uno: mode-panel-button"
            :class="{ 'bg-sky-500': $colorMode.preference === 'dark' }">
            <span class="i-ic-baseline-nightlight" />
            Dark
          </button>
          <button @click="$colorMode.preference = 'auto'; open = !open" class=":uno: mode-panel-button"
            :class="{ 'bg-sky-500': $colorMode.preference === 'auto' }">
            <span class="i-ic-baseline-desktop-windows" />
            Auto
          </button>
          <button @click="$colorMode.preference = 'light'; open = !open" class=":uno: mode-panel-button"
            :class="{ 'bg-sky-500': $colorMode.preference === 'light' }">
            <span class="i-ic-baseline-wb-sunny" />
            Light
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const open = ref(false)
</script>

<style></style>