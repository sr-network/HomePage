<template>
	<div class="mx-auto max-w-2xl p-6 space-y-6">
		<NuxtRouteAnnouncer />
		<Header />
		<br />
		<Content />
		<Footer />
	</div>
</template>

<script setup lang="ts">
onMounted(() => {
	umTrackView();
});

useHead({
	title: 'Restent Ou (@gxres042)',
	meta: [
		{
			charset: 'utf-8'
		},
		{
			name: 'description',
			content: 'The profile of Restent Ou.'
		},
		{
			name: 'twitter:description',
			content: 'The profile of Restent Ou.'
		},
		{
			name: 'baidu-site-verification',
			content: 'codeva-yept7qZoUr'
		}
	],
	htmlAttrs: {
		lang: 'en'
	},
	link: [
		{
			rel: 'preconnect',
			href: 'https://library.gxres.net',
			crossorigin: ''
		},
		{
			rel: 'canonical',
			href: 'https://www.gxres.net'
		},
		{
			rel: 'icon',
			href: 'https://library.gxres.net/images/icons/favicon.webp'
		},
		{
			rel: 'apple-touch-icon',
			href: 'https://library.gxres.net/images/icons/big-favicon.webp'
		}
	]
});

useSeoMeta({
	title: 'Restent Ou (@gxres042)',
	ogTitle: 'Restent Ou (@gxres042)',
	description: 'The profile of Restent Ou.',
	ogDescription: 'The profile of Restent Ou.',
	ogImage: `https://library.gxres.net/images/icons/big-favicon.webp`
});
</script>

<style>

</style>
