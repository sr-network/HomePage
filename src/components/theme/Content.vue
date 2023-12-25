<template>
    <v-container style="max-width:900px;">
        <v-card class="mx-auto my-4 w-full">

            <v-img lazy-src="https://library.gxres.net/images/introBanner.webp"
                src="https://library.gxres.net/images/introBanner.webp" :height="height" cover
                alt="Introduction Banner"></v-img>

            <v-card-text>
                <v-row>
                    <v-col cols="12" sm="5">
                        <h5 class="text-h5">Self-introduction</h5>
                    </v-col>
                    <v-col cols="12" sm="7">
                        <p class="text-body-1">Senior high student who comes from Guangxi, China.</p>
                        <p class="text-body-1">Named Restent Ou, possibly a.k.a. SliverRiver.</p>
                        <p class="text-body-1">Member of <a href="https://github.com/s-complex">Sliver Complex</a>, <a
                                href="https://github.com/LittleSkinCommspt">LittleSkin Community</a> and <a
                                href="https://go.14cloud.cn">14Cloud</a></p>
                        <p class="text-body-1">Real salted fish in reality.</p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" sm="5">
                        <h5 class="text-h5">My skills</h5>
                    </v-col>
                    <v-col cols="12" sm="7">
                        <ul>
                            <li class="text-body-1">
                                Build static-site with <a href="https://vuejs.org">Vue</a> (and...<a
                                    href="https://react.dev">React</a>
                                sometimes?)
                            </li>
                            <li class="text-body-1">PC Building & Reparing (maybe)</li>
                            <li class="text-body-1">Customer support service</li>
                            <li class="text-body-1">Basic server maintaince</li>
                        </ul>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" sm="5">
                        <h5 class="text-h5">My favorite</h5>
                    </v-col>
                    <v-col cols="12" sm="7">
                        <ul>
                            <li class="text-body-1">
                                Play Minecraft and rhythm games
                            </li>
                            <li class="text-body-1">Listen to music with types of rhythm, classic chinese, china-pop and
                                more</li>
                            <li class="text-body-1">Watch video with types of IT, cooking, etc.</li>
                        </ul>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" sm="5">
                        <h5 class="text-h5">Find me</h5>
                    </v-col>
                    <v-col cols="12" sm="7">
                        <p class="text-body-1">Get the way to find me by reading this <a
                                href="https://library.gxres.net">list</a>.</p>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useDisplay } from 'vuetify'

const { name } = useDisplay()

const height = computed(() => {
    // name is reactive and
    // must use .value
    switch (name.value) {
        case 'sm': return 200
        case 'md': return 500
    }

    return undefined
})
</script>
  
<script lang="ts">
export default {
    data: (): { tab: null } => ({
        tab: null,
    }),
}
</script>

<style type="scss">
@import "@fontsource/jetbrains-mono/400.css";

p {
    line-height: 1.5rem;
    margin-bottom: 0.7rem;
}

hr {
    margin: 20px 0px;
}

ul,
li {
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 0.7rem;
}

code {
    font-family: "Jetbrains Mono";
}
</style>