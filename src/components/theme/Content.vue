<template>
    <v-container style="max-width:770px;">
        <v-card class="mx-auto my-4 w-full">

            <v-img src="https://library.restent.win/images/introBanner.webp" height="410px" cover></v-img>

            <v-card-text>
                <h5 class="text-h5">Hi there</h5>
                <p class="text-body-1">Here is Restent Ou, with his partner SliverRiver.</p>
                <ul>
                    <li class="text-body-1">Student who comes from Guangxi, China.</li>
                    <li class="text-body-1">Vue-based web maintainer, main targets are my websites.</li>
                    <li class="text-body-1">Depression patient. <strong>FOR STRANGER: DON'T CLOSE TO ME.</strong></li>
                </ul>
                <v-divider />
                <p class="text-body-1">Find more infomation about me at <a href="https://library.restent.win/about">here</a> (still working).</p>
            </v-card-text>
        </v-card>
    </v-container>
</template>
  
<script lang="ts">
import '@/css/content.scss';

export default {
    data: (): { tab: null } => ({
        tab: null,
    }),
}
</script>