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
  <Hello />
  <About />
  <Footer />
</template>
