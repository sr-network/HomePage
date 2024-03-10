<script setup lang="ts">
import { ref } from 'vue';

const data = ref({
    imageUrl: 'https://library.gxres.net/images/icons/avatar.webp',
    name: 'Restent Ou',
    ilustAuthor: '19Kilo',
    isContentChanged: false
})

function toggleContent() {
    if (data.value.isContentChanged) {
        data.value.imageUrl = 'https://library.gxres.net/images/icons/avatar.webp'
        data.value.name = 'Restent Ou'
        data.value.ilustAuthor = '19Kilo'
    } else {
        data.value.imageUrl = 'https://library.gxres.net/images/icons/SliverRiver.webp'
        data.value.name = 'SliverRiver'
        data.value.ilustAuthor = 'SliverRiver'
    }

    data.value.isContentChanged = !data.value.isContentChanged;
}
</script>

<template>
    <div class="p-4">
        <div class="card">
            <div class="p-4">
                <div class="grid grid-cols-1 md:grid-cols-3">
                    <div class="grid justify-items-center my-4">
                        <img class="rounded-full mb-2" width="128" height="128"
                            :src="data.imageUrl" @click="toggleContent">
                        <div class="text-lg font-medium">{{ data.name }}</div>
                        <p class="text-sm text-center mb-2">Ilust: {{ data.ilustAuthor }}</p>
                        <div class="buttons are-small">
                            <a class="button" href="https://blog.gxres.net">
                                <span class="icon i-ic-baseline-book" />
                                <span>Blog</span>
                            </a>
                            <a class="button" href="https://library.gxres.net">
                                <span class="icon i-ic-baseline-library-books" />
                                <span>Library</span>
                            </a>
                        </div>
                    </div>
                    <div class="col-span-2 p-4">
                        <div class="grid justify-items-center md:justify-items-start">
                            <div class="mb-2">Location: Guangxi, China</div>
                            <div class="mb-2">Languages</div>
                            <div class="tags mb-2">
                                <span class="tag">Chinese (Simplified)</span>
                                <span class="tag">English (United States)</span>
                            </div>
                            <div class="mb-2">Organizations</div>
                            <div class="tags mb-2">
                                <a href="https://github.com/s-complex" class="tag">Sliver Complex</a>
                                <a href="https://github.com/LittleSkinCommspt" class="tag">LittleSkin Community</a>
                                <a href="https://go.14cloud.cn" class="tag">14Cloud</a>
                            </div>
                            <div class="mb-2">Find me</div>
                            <div class="tags">
                                <a href="https://github.com/gxres042" class="tag">GitHub</a>
                                <a href="https://bsky.app/social/gxres.net" class="tag">BlueSky</a>
                                <a href="https://m.flyemoji.moe/@slivermoe" class="tag">Mastodon</a>
                                <a href="https://library.gxres.net/contact.html" class="tag">More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>