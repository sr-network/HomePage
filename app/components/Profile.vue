<template>
	<div class=":uno: flex flex-col items-center justify-center gap-2 p-4 h-svh">
		<button aria-label="点击切换主人" @click="toggleSrc">
			<NuxtImg
				class=":uno: rounded-full shadow-md"
				width="128"
				height="128"
				:src="currentProfile.src"
				:alt="`${currentProfile.name}'s avatar'`"
			/>
		</button>
		<button aria-label="点击切换主人" @click="toggleSrc">
			<h1 class=":uno: text-2xl">{{ currentProfile.name }}</h1>
		</button>
		<p>{{ currentProfile.slogan }}</p>
		<p
			class=":uno: flex flex-row items-center gap-2 text-zinc-600 dark:text-zinc-300"
		>
			<span class=":uno: i-ic-baseline-location-on" />
			<span>Guangxi, China</span>
		</p>
		<div class=":uno: flex flex-wrap items-center gap-2">
			<template v-for="link in links" :key="link.name">
				<LinkButton :name="link.name" :link="link.link" :icon="link.icon" />
			</template>
		</div>
		<div
			class=":uno: animate-split absolute bottom-5 left-5 right-5 flex animate-bounce justify-center"
		>
			<div class=":uno: i-ic-baseline-keyboard-arrow-down text-xl" />
		</div>
	</div>
</template>

<script setup lang="ts">
const links = [
	{
		name: "Blog",
		link: "https://blog.gxres.net",
		icon: "i-ic-baseline-book"
	},
	{
		name: "Library",
		link: "https://library.gxres.net",
		icon: "i-ic-baseline-library-books"
	},
	{
		name: "Lab",
		link: "https://slirv.vip",
		icon: "i-ic-baseline-table-view"
	}
]

const gxres042 = {
	src: "https://library.gxres.net/images/icons/avatar.webp",
	name: "Restent Ou",
	slogan: "静寂に問う 答えを求めて"
}
const slivermoe = {
	src: "https://library.gxres.net/images/icons/SliverRiver.webp",
	name: "SliverRiver",
	slogan: "私は迷子 助けてください"
}
const currentProfile = ref(gxres042)

const toggleSrc = () => {
	currentProfile.value =
		JSON.stringify(currentProfile.value) === JSON.stringify(gxres042)
			? slivermoe
			: gxres042
}
</script>
