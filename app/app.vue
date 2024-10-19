<template>
	<div>
		<NuxtRouteAnnouncer />
		<div class=":uno: grid grid-cols-1 lg:grid-cols-4 lg:gap-3">
			<Sidebar />
			<main class=":uno: prose p-3 lg:col-span-3">
				<div class=":uno: mx-auto max-w-3xl">
					<SwitchLanguage />
					<NuxtPage />
					<footer>
						<p class=":uno: text-center text-sm">
							Copyright © 2019 - {{ new Date().getFullYear() }} Restent Ou. All rights reserved.
						</p>
					</footer>
				</div>
			</main>
		</div>
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
	--apply: 'dark:bg-gray-900 overflow-y-scroll';
}
.prose {
	h1 {
		--apply: 'text-4xl font-medium my-6';
	}
	h2 {
		--apply: 'text-xl my-6';
	}
	h3 {
		--apply: 'text-lg my-6';
	}
	h4 {
		--apply: 'my-6';
	}
	p {
		--apply: 'my-6';
	}
	ol {
		--apply: 'my-6 ml-6 list-decimal';
	}
	ul {
		--apply: 'my-6 ml-6 list-disc';
		li {
			--apply: 'my-6';
		}
	}
	a {
		--apply: 'text-blue-500 hover:underline';
	}
}
</style>
