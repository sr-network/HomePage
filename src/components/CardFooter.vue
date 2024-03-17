<script setup lang="ts">
const props = defineProps({
    icon: String
})
</script>

<template>
    <div class="grid flex items-center">
        <div class="icon" :class="props.icon" />
        &nbsp;
        <div>
            <slot />
        </div>
    </div>
</template>