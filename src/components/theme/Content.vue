<script setup lang="ts">
import { useTheme } from 'vuetify'


const theme = useTheme()

function toggleTheme() {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<template>
    <div class="d-flex justify-end"><v-btn icon="contrast" variant="text" @click="toggleTheme"></v-btn></div>
    <v-container style="max-width:900px;">
        <v-container>
            <div class="d-flex justify-center">
                <div class="pa-2 ma-2"> <v-avatar color="grey" size="130" rounded="1">
                        <v-img cover src="https://library.gxres.net/images/icons/avatar.webp"></v-img>
                    </v-avatar>
                    <v-list-item class="text-center" title="Restent Ou" subtitle="@gxres042"></v-list-item>
                </div>
                <div class="pa-2 ma-2"> <v-avatar color="grey" size="130" rounded="1">
                        <v-img cover src="https://library.gxres.net/images/icons/SliverRiver.webp"></v-img>
                    </v-avatar>
                    <v-list-item class="text-center" title="SliverRiver" subtitle="@slivermoe"></v-list-item>
                </div>
            </div>
        </v-container>
        <div class="content text-center">
            <h1>👋🏼</h1>
            <p>I am Restent Ou, sometimes a.k.a. SliverRiver.</p>
            <p>我是 Restent Ou，有时会以 SliverRiver 的名义活动。</p>
            <v-divider />
            <h2>Sites</h2>
            <div class="d-flex justify-center">
                <div class="pa-2 ma-2"><v-btn prepend-icon="book" size="large" href="https://blog.gxres.net">BLOG</v-btn>
                </div>
                <div class="pa-2 ma-2"><v-btn prepend-icon="library_books" size="large"
                        href="https://library.gxres.net">LIBRARY</v-btn></div>
                <div class="pa-2 ma-2"><v-btn prepend-icon="analytics" size="large"
                        href="https://status.slirv.vip">STATUS</v-btn></div>
            </div>
            <h2>Misc</h2>
            <div class="d-flex justify-center">
                <div class="pa-2 ma-2"><v-btn prepend-icon="person" size="large"
                        href="https://library.gxres.net/about">ABOUT (wip)</v-btn></div>
                <div class="pa-2 ma-2"><v-btn prepend-icon="contacts" size="large"
                        href="https://library.gxres.net/contact">CONTACT</v-btn></div>
                <div class="pa-2 ma-2"><v-btn prepend-icon="link" size="large"
                        href="https://library.gxres.net">FRIENDS</v-btn></div>
        </div>
    </div>
</v-container></template>
