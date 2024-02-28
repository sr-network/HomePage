<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  const script = document.createElement('script')
  script.async = true
  script.src = 'https://umami.slirv.vip/script.js'
  script.dataset.websiteId = 'fbe8ac0c-641d-4d0a-a03e-1e98844c9c52'
  document.head.appendChild(script)
})
</script>

<template>
  <div class="p-3 m-3 mt-16">
    <div class="container mx-auto max-w-screen-md">
      <div class="grid grid-cols-1 md:grid-cols-3">
        <div class="col-span-2">
          <div class="text-4xl">Hi there,</div>
          <div class="text-4xl mb-2">I'm Restent Ou.</div>
          <div class="text-medium text-gray-500 mb-4">a.k.a. SliverRiver. Student & Maintainer & Photographer</div>
          <div class="buttons">
            <a class="button is-info" href="https://blog.gxres.net">
              <span class="icon">
                <div class="i-ic-baseline-book text-2xl" />
              </span>
              <span>Blog</span>
            </a>
            <a class="button is-info" href="https://library.gxres.net">
              <span class="icon">
                <div class="i-ic-baseline-library-books text-2xl" />
              </span>
              <span>Library</span>
            </a>
          </div>
        </div>
        <div class="order-first md:order-last d-flex lg:justify-items-end">
          <img class="rounded-full" width="110" height="110" src="https://library.gxres.net/images/icons/avatar.webp"
            alt="Restent's avatar" />
          <img class="rounded-full" width="110" height="110" src="https://library.gxres.net/images/icons/SliverRiver.webp"
            alt="SliverRiver's avatar" />
        </div>
      </div>
      <hr class="my-6">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div class="col-span-2 leading-relaxed space-y-2">
          <div class="text-2xl font-semibold">About me</div>
          <p>I am a senior high student who comes from Guangxi, China aged 17, and I think I will always be interested in
            everything I like.</p>
          <p>Currently I am working for front-end project which based on Vue.js, and the masterpiece is my website I
            guess. Besides, I know a little of Python & React, but due to my ability, I seldom use them in my projects.
          </p>
          <p>Outside of working, I like to tinker with electronics, sometimes may go outdoors to take photos. I also
            listen to music, watch videos and play games when I am really free.</p>
        </div>
        <div class="leading-relaxed space-y-2">
          <div class="text-2xl font-semibold">Organizations</div>
          <ul>
            <li><a href="https://github.com/s-complex" target="_blank">Sliver Complex</a></li>
            <li><a href="https://github.com/LittleSkinCommspt" target="_blank">LittleSkin Community</a></li>
            <li><a href="https://speed.hypixel.com.cn/" target="_blank">14Cloud</a></li>
          </ul>
          <div class="text-2xl font-semibold">Game list</div>
          <ul>
            <li>Minecraft</li>
            <li>Arcaea</li>
            <li>Phigros</li>
            <li>maimai DX</li>
          </ul>
        </div>
      </div>
      <div class="grid justify-items-end mt-3">
        <a class="button is-info" href="https://library.gxres.net/contact.html">
          <span>Contact me</span>
          <span class="icon"><i class="i-ic-baseline-arrow-forward-ios text-2xl" /></span>
        </a>
      </div>
    </div>
  </div>
  <div class="p-3 m-3">
    <div class="container mx-auto max-w-screen-md">
      <p>Copyright © 2019 - {{ new Date().getFullYear() }} Restent Ou & SliverRiver</p>
      <p>Built with <a href="https://vitejs.dev">Vite.js</a> by SliverRiver.</p>
    </div>
  </div>
</template>
