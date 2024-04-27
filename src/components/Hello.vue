<script setup lang="ts">
const profileStore = useProfileStore();
const toggleContent = () => {
    profileStore.toggleContent();
};
</script>

<template>
    <div class=":uno: grid grid-cols-1 place-items-center text-center min-h-96 p-6">
        <div class=":uno: space-y-2">
            <NuxtImg @click="toggleContent" class=":uno: rounded-full" width="128" height="128"
                :src="profileStore.imageUrl" :alt="`${profileStore.name}'s avatar'`" />
            <div class=":uno: text-3xl font-medium">{{ profileStore.name }}</div>
            <p>@{{ profileStore.id }} · aka {{ profileStore.akaName }}</p>
            <div class="buttons are-small">
                <NuxtLink class="button" href="https://blog.gxres.net">
                    <span class=":uno: i-ic-baseline-book icon" />
                    <span>Blog</span>
                </NuxtLink>
                <NuxtLink class="button" href="https://library.gxres.net">
                    <span class=":uno: i-ic-baseline-library-books icon" />
                    <span>Library</span>
                </NuxtLink>
                <NuxtLink class="button" href="https://library.gxres.net/social">
                    <span class=":uno: i-ic-baseline-connect-without-contact icon" />
                    <span>Contact</span>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>