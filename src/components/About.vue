<script setup lang="ts">
const profileStore = useProfileStore();
</script>

<template>
    <div class=":uno: max-w-xl mx-auto">
        <div class=":uno: grid grid-cols-1 place-items-center min-h-96 p-6">
            <div class="content">
                <h1>Hey 👋</h1>
                <p>I am {{ profileStore.name }}, nice to meet you~</p>
                <h2>Who am I?</h2>
                <p>I am a senior high student who comes from Guangxi, China.</p>
                <p>I am also a noob on the Internet. At the moment, I'm mostly working for my things.</p>
                <h2>My skills</h2>
                <p>By maintaining my own websites, I have acquired more knowledge of Vue. Likewise, I've learned a few
                    other things for life, such as Linux and OpenWRT.</p>
                <p>But actually I didn't mastered any of the skills I learned till now. I think it's hard for me to
                    mastered a skill.</p>
                <h2>My favorite</h2>
                <p>I am a fan of Minecraft and rhythm games (especially Arcaea and Phigros). Half of my spare time will
                    be spent on them.</p>
                <p>The other half of my free time will be spent on tasting delicious food, because it's hard to describe
                    how much I love delicious food haha.</p>
            </div>
        </div>
    </div>
</template>