<template>
	<NuxtRouteAnnouncer />
	<div class=":uno: mx-auto max-w-4xl p-4">
		<Intro />
		<Profile />
	</div>
	<Footer />
</template>

<script setup lang="ts">
useHead({
	title: "Restent Ou (@gxres042)",
	meta: [
		{
			name: "description",
			content: "Homepage of Restent Ou a.k.a. SliverRiver"
		}
	],
	htmlAttrs: {
		lang: "en"
	},
	link: [
		{
			rel: "canonical",
			href: "https://www.gxres.net"
		},
		{
			rel: "stylesheet",
			href: "https://fonts.googleapis.com/css2?family=Noto+Sans:ital@0;1&display=swap"
		},
		{
			rel: "preload",
			href: "https://library.gxres.net/images/bg.webp",
			as: "image"
		},
		{
			rel: "preload",
			href: "https://library.gxres.net/images/icons/avatar.webp",
			as: "image"
		},
		{
			rel: "icon",
			href: "https://library.gxres.net/images/icons/favicon.webp"
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
body {
	font-family: "Noto Sans", sans-serif;
	--apply: "m-0 text-lg dark:text-white bg-gradient-to-b from-white to-sky-200 dark:from-neutral-950 dark:to-sky-900";
}

a {
	--apply: "text-sky-700 dark:text-sky-500 font-medium no-underline hover:underline";
}
</style>
