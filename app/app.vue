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
useSeoMeta({
	title: 'Restent Ou (@gxres042)',
	ogTitle: 'Restent Ou (@gxres042)',
	description: 'The profile of Restent Ou.',
	ogDescription: 'The profile of Restent Ou.',
	ogImage: `https://library.gxres.net/images/icons/big-favicon.webp`
});
</script>
