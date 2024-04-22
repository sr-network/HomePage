<script setup lang="ts">
const profileStore = useProfileStore();

const toggleContent = () => {
  profileStore.toggleContent();
};

useHead({
  meta: [
    { name: "description", content: `Introduction of ${profileStore.name}` },
  ],
  htmlAttrs: {
    lang: "zh-CN",
  },
  link: [
    {
      rel: "canonical",
      href: "https://www.gxres.net",
    },
    {
      rel: "preconnect",
      href: "https://library.gxres.net",
    },
    {
      rel: "icon",
      href: "https://library.gxres.net/images/icons/favicon.webp",
    },
  ],
});

useSeoMeta({
  title: `${profileStore.name} (@${profileStore.id})`,
  ogTitle: `${profileStore.name} (@${profileStore.id})`,
  description: `Introduction of ${profileStore.name}`,
  ogDescription: `Introduction of ${profileStore.name}`,
  ogImage: `https://library.gxres.net/images/icons/favicon.webp`,
});
</script>

<template>

  <Head>
    <Title>{{ profileStore.name }} (@{{ profileStore.id }})</Title>
  </Head>
  <div class="max-w-2xl container mx-auto min-h-screen">
    <div class="grid grid-cols-1 place-items-center text-center">
      <div class="p-6 w-full">
        <div class="box content">
          <div>
            <NuxtImg class="rounded-full" width="128" height="128" @click="toggleContent" :src="profileStore.imageUrl"
              :alt="`${profileStore.name}'s avatar'`" />
          </div>
          <h1>{{ profileStore.name }}</h1>
          <p>@{{ profileStore.id }} · a.k.a. {{ profileStore.akaName }}</p>
          <div class="buttons flex justify-center">
            <a class="button" href="https://blog.gxres.net">
              <span class="icon i-ic-baseline-book" />
              <span>Blog</span>
            </a>
            <a class="button" href="https://library.gxres.net">
              <span class="icon i-ic-baseline-library-books" />
              <span>Library</span>
            </a>
          </div>
          <h2>Self introduce</h2>
          <p>I am a student who comes from Guangxi, China.</p>
          <p>I am also a noob on the Internet.</p>
          <h2>Organizations</h2>
          <p>
            <a href="https://github.com/s-complex" target="_blank">Sliver Complex</a>
            ·
            <a href="https://github.com/LittleSkinCommspt" target="_blank">LittleSkin Community</a>
            ·
            <a href="https://speed.14cloud.cn" target="_blank">14Cloud</a>
            Management Team
          </p>
          <h2>Skills</h2>
          <div class="tags flex justify-center">
            <span class="tag">Vue</span>
            <span class="tag">OpenWRT</span>
            <span class="tag">Linux</span>
            <span class="tag">Home Network</span>
            <span class="tag">Python</span>
            <span class="tag">Photograph</span>
          </div>
          <blockquote>
            <p>I haven't mastered any skills, although I'm always trying.</p>
          </blockquote>
          <h2>Favorite</h2>
          <ul>
            <li>
              Playing Minecraft and rhythm games (prefer Phigros & Arcaea);
            </li>
            <li>Eating delicious food;</li>
            <li>Go outside with my friends I guess.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
