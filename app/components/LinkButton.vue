<template>
	<a
		class=":uno: flex items-center gap-2 rounded-md bg-white p-2 shadow-md dark:bg-zinc-800"
		:href="link"
	>
		<span class=":uno: text-xl" :class="icon" />
		<span>{{ name }}</span>
	</a>
</template>

<script setup lang="ts">
const { link, icon, name } = defineProps({
	link: String,
	icon: String,
	name: String
})
</script>
