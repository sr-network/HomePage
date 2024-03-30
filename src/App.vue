<script setup lang="ts">
const profileStore = useProfileStore();

const toggleContent = () => {
  profileStore.toggleContent();
}

useHead({
  meta: [
    { name: "description", content: `Introduction of ${profileStore.name}` }
  ],
  htmlAttrs: {
    lang: "zh-CN"
  },
  link: [
    {
      rel: 'canonical',
      href: 'https://www.gxres.net'
    },
    {
      rel: 'preconnect',
      href: 'https://library.gxres.net'
    },
    {
      rel: 'icon',
      href: 'https://library.gxres.net/images/icons/favicon.webp'
    }
  ]
})

useSeoMeta({
  title: `${profileStore.name} (@${profileStore.id})`,
  ogTitle: `${profileStore.name} (@${profileStore.id})`,
  description: `Introduction of ${profileStore.name}`,
  ogDescription: `Introduction of ${profileStore.name}`,
  ogImage: `https://library.gxres.net/images/icons/favicon.webp`
})
</script>

<template>
  <Head>
    <Title>{{ profileStore.name }} (@{{ profileStore.id }})</Title>
  </Head>
  <div class="p-4">
    <div class="max-w-screen-md container mx-auto">
      <div class="card">
        <div class="container mx-auto p-4">
          <div class="grid justify-center items-center space-y-3">
            <div class="flex justify-center">
              <NuxtImg preload placeholder width="150" height="150" class="rounded-full" @click="toggleContent" :src="profileStore.imageUrl" :alt="`${profileStore.name}'s avatar'`" />
            </div>
            <div class="text-center">
              <div class="text-3xl">{{ profileStore.name }}</div>
              <div class="text-sm">a.k.a. {{ profileStore.akaName }}</div>
            </div>
          </div>
        </div>
        <div class="tabs is-centered">
          <ul>
            <li>
              <a href="https://blog.gxres.net" aria-label="To Restent's Notebook">
                <span class="icon is-small">
                  <div class="i-ic-baseline-book" />
                </span>
                <span>Blog</span>
              </a>
            </li>
            <li>
              <a href="https://library.gxres.net" aria-label="To SliverRiver's Library">
                <span class="icon is-small">
                  <div class="i-ic-baseline-library-books" />
                </span>
                <span>Library</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="card-content">
          <div class="content">
            <h1>👋 Hey</h1>
            This is {{ profileStore.name }}, just a noob on the Internet. :P
            <h2>I am...</h2>
            <ul>
              <li>Senior high student from Guangxi, China;</li>
              <li>Member of <a href="https://github.com/LittleSkinCommspt"
                  aria-label="Link to LittleSkin Community">LittleSkin Community</a>;</li>
              <li>Contributor of <a href="https://go.14cloud.cn" aria-label="Link to 14Cloud">14Cloud</a> and BlissROM
                (device: phoenix).</li>
              <li>Maybe more?</li>
            </ul>
            <h2>My skills</h2>
            <p>With the passion of front-end, I like to create front-end projects with Vue. Actually, I had learned
              React before, but it's too hard for me to learn haha.</p>
            <p>Besides, I've learned other skills that are necessary for my daily routine, although I haven't mastered
              one of them till now.</p>
            <h2>My favorite</h2>
            <p>I am a fan of rhythm games and Minecraft, but now I usually spend my gaming time on rhythm games.</p>
            <p>Also, it's hard for me to reject delicious foods!</p>
            <h2>Find me at...</h2>
            <div class="buttons">
              <a class="button" :href="`https://github.com/${profileStore.id}`" aria-label="Visit my GitHub">
                <div class="icon i-mdi-github" />
                <div>GitHub</div>
              </a>
              <a class="button" href="https://m.flyemoji.moe/@slivermoe" aria-label="Visit my mastodon">
                <div class="icon i-mdi-mastodon" />
                <div>Mastodon</div>
              </a>
              <a class="button" href="https://library.gxres.net/contact.html" aria-label="More ways to find me">
                <div class="icon i-ic-baseline-more-horiz" />
                <div>More</div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center text-sm">
        Copyright © 2019 - {{ new Date().getFullYear() }} {{ profileStore.name }}. All rights reserved.
      </div>
    </div>
  </div>
</template>
