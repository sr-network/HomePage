<script setup lang="ts">
const profileStore = useProfileStore();
</script>

<template>
    <div class="p-6">
        <p class="text-center text-sm">Copyright © 2019 - {{ new Date().getFullYear() }} {{ profileStore.name }}. All rights reserved.</p>
    </div>
</template>