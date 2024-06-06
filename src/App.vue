<template>
  <Navbar />
  <main class=":uno: max-w-4xl mx-auto p-6">
    <Hello />
    <About />
    <FindMe />
  </main>
  <Footer />
</template>

<script setup lang="ts">
useHead({
  title: "Restent Ou (@gxres042)",
  meta: [
    { name: "description", content: "Homepage of Restent Ou a.k.a. SliverRiver" },
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
  title: "Restent Ou (@gxres042)",
  ogTitle: "Restent Ou (@gxres042)",
  description: "Homepage of Restent Ou a.k.a. SliverRiver",
  ogDescription: "Homepage of Restent Ou a.k.a. SliverRiver",
  ogImage: `https://library.gxres.net/images/icons/favicon.webp`,
});
</script>