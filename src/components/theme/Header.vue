<template>
    <v-navigation-drawer v-model="drawer" temporary>
        <v-list density="compact" nav>
            <v-list-subheader>Pages</v-list-subheader>
            <v-list-item :prepend-icon="mdiHome" title="Index" value="Index" href="#"></v-list-item>
            <v-list-item :prepend-icon="mdiBook" title="Blog" value="Blog" href="https://blog.restent.win"></v-list-item>
            <v-list-item :prepend-icon="mdiLibrary" title="Library" value="Library"
                href="https://library.restent.win"></v-list-item>
        </v-list>

        <v-list density="compact" nav>
            <v-list-subheader>Quick Access</v-list-subheader>
            <v-list-item :prepend-icon="mdiContacts" title="Social" value="Social"
                href="https://library.restent.win/social"></v-list-item>
            <v-list-item :prepend-icon="mdiLink" title="Friends" value="Friends"
                href="https://library.restent.win/links"></v-list-item>
        </v-list>
    </v-navigation-drawer>

    <v-app-bar>
        <template v-slot:prepend>
            <v-app-bar-nav-icon :icon="mdiMenu" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </template>
        <v-app-bar-title class="text-h6">Ou's Intro</v-app-bar-title>
        <v-btn :icon="mdiMoonLastQuarter" @click="toggleTheme"></v-btn>
    </v-app-bar>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify'
import { mdiMenu, mdiMoonLastQuarter, mdiHome, mdiBook, mdiLibrary, mdiContacts, mdiLink } from '@mdi/js'


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