<template>
	<NuxtRouteAnnouncer />
	<main class=":uno: mx-auto max-w-xl">
		<Profile />
		<About />
	</main>
	<Footer />
</template>

<script setup lang="ts">
onMounted(() => {
	umTrackView()
})

useHead({
	title: "Restent Ou (@gxres042)",
	meta: [
		{
			charset: "utf-8"
		},
		{
			name: "description",
			content: "Homepage of Restent Ou a.k.a. SliverRiver."
		},
		{
			name: "twitter:description",
			content: "Homepage of Restent Ou a.k.a. SliverRiver"
		},
  {
   name="baidu-site-verification",
   content="codeva-yept7qZoUr"
  }
	],
	htmlAttrs: {
		lang: "en"
	},
	link: [
		{
			rel: "preconnect",
			href: "https://library.gxres.net",
			crossorigin: ""
		},
		{
			rel: "canonical",
			href: "https://www.gxres.net"
		},
		{
			rel: "icon",
			href: "https://library.gxres.net/images/icons/favicon.webp"
		},
		{
			rel: "apple-touch-icon",
			href: "https://library.gxres.net/images/icons/big-favicon.webp"
		}
	]
})

useSeoMeta({
	title: "Restent Ou (@gxres042)",
	ogTitle: "Restent Ou (@gxres042)",
	description: "Homepage of Restent Ou a.k.a. SliverRiver",
	ogDescription: "Homepage of Restent Ou a.k.a. SliverRiver",
	ogImage: `https://library.gxres.net/images/icons/big-favicon.webp`
})
</script>

<style>
.dark {
	color-scheme: dark;
}
body {
	font-family:
		-apple-system,
		BlinkMacSystemFont,
		Segoe UI,
		system-ui,
		Roboto,
		PingFang SC,
		Hiragino Sans GB,
		Source Han Sans SC,
		Noto Sans CJK SC,
		Noto Sans SC,
		WenQuanYi Micro Hei,
		WenQuanYi Zen Hei,
		Helvetica Neue,
		Microsoft YaHei,
		Helvetica,
		Arial,
		sans-serif,
		Apple Color Emoji,
		Segoe UI Emoji,
		Segoe UI Symbol;
	--apply: "bg-gradient-to-b from-white to-blue-100 dark:from-zinc-900 dark:to-blue-950";
}
button {
	--apply: "bg-transparent";
}
a {
	--apply: "hover:text-blue-500";
}
</style>
