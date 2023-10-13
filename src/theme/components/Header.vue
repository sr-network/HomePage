<template>
    <v-navigation-drawer v-model="drawer" temporary>

        <v-list density="compact" nav>
            <v-list-subheader>My sites</v-list-subheader>
            <v-list-item prepend-icon="mdi-home" title="Home" value="Index"></v-list-item>
            <v-list-item prepend-icon="mdi-book" title="Blog" value="Blog" href="https://blog.restent.win"></v-list-item>
            <v-list-item prepend-icon="mdi-library" title="Library" value="Library"
                href="https://library.restent.win"></v-list-item>
        </v-list>
        <v-list density="compact" nav>
            <v-list-subheader>Quick Access</v-list-subheader>
            <v-list-item prepend-icon="mdi-account-group" title="Friends" value="Friends"
                href="https://library.restent.win/links.html"></v-list-item>
            <v-list-item prepend-icon="mdi-cellphone-sound" title="Contact" value="Contact"
                href="https://library.restent.win/contact.html"></v-list-item>
        </v-list>
    </v-navigation-drawer>

    <v-app-bar>
        <template v-slot:prepend>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </template>
        <v-app-bar-title class="text-h6">Ou's Intro</v-app-bar-title>
        <v-btn icon="mdi-brightness-6" @click="toggleTheme"></v-btn>
    </v-app-bar>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme() {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<script lang="ts">
export default {
    data() {
        return {
            drawer: false,
        }
    },
}
</script>

<style>
.lazy-image {
    width: 100%;
    position: absolute;
}
</style>