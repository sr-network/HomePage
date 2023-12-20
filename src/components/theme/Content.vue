<template>
    <v-container style="max-width:770px;">
        <v-card class="mx-auto my-4 w-full">

            <v-img lazy-src="https://library.restent.win/images/introBanner.webp"
                src="https://library.restent.win/images/introBanner.webp" height="410px" cover
                alt="Introduction Banner"></v-img>

            <v-card-text>
                <h5 class="text-h5">Hi there</h5>
                <p class="text-body-1">Here is Restent Ou, with his partner SliverRiver.</p>
                <h5 class="text-h5">My careers (?)</h5>
                <ul>
                    <li class="text-body-1">Student in Guangxi, China</li>
                    <li class="text-body-1"><a href="https://github.com/s-complex">Sliver Complex</a> · Main Manager</li>
                    <li class="text-body-1"><a href="https://github.com/LittleSkinCommspt">LittleSkin Community</a> · Member
                    </li>
                    <li class="text-body-1"><a href="https://go.14cloud.cn">14Cloud</a> · Contributor</li>
                </ul>
                <h5 class="text-h5">Misc</h5>
                <ul>
                    <li class="text-body-1">I like to build front-end website with Vue, main targets are my websites.</li>
                    <li class="text-body-1">I am interested to IT and electronics. Now I have some experience, and some
                        ability for fixing them.</li>
                    <li class="text-body-1">I am a player of Minecraft and rhythm games. But uh, most of my gaming time is
                        spent on rhythm games.</li>
                    <li class="text-body-1">I am also a photographer, but my ability is <strong>very BAD</strong>. Main
                        photos that my websites use were shot by me.</li>
                </ul>
                <v-divider />
                <p class="text-body-1">Ready for next? Open drawer, and explore my websites or contact me!</p>
            </v-card-text>
        </v-card>
    </v-container>
</template>
  
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
    margin: 0.8rem 1.3rem;
}

code {
    font-family: "Jetbrains Mono";
}</style>