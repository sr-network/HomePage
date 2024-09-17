<template>
    <a class=":uno: bg-white dark:bg-zinc-800 shadow-md p-2 rounded-md flex items-center gap-2" :href="link">
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