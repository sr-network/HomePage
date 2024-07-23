<template>
  <NuxtRouteAnnouncer />
  <Header />
  <main>
    <Main />
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
    lang: "en",
  },
  link: [
    {
      rel: "canonical",
      href: "https://www.gxres.net",
    },
    {
      rel: "stylesheet",
      href: "https://api.slirv.vip/fonts/css2?family=Noto+Sans:ital@0;1&display=swap",
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
  ogImage: `https://library.gxres.net/images/icons/big-favicon.webp`,
});
</script>

<style>
body {
  font-family: "Noto Sans", sans-serif;
  --apply: "m-0 text-lg dark:text-white bg-neutral-50 dark:bg-neutral-900";
}

a {
  --apply: "text-sky-700 font-medium no-underline"
}
</style>
