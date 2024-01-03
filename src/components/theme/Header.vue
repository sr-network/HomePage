<template>
    <v-app-bar>
        <template v-slot:prepend>
            <v-app-bar-nav-icon icon="menu" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </template>
        <v-app-bar-title class="text-h6">Ou's Intro</v-app-bar-title>
        <v-btn icon="contrast" @click="toggleTheme"></v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary>
        <v-list density="compact" nav>
            <v-list-subheader>Pages</v-list-subheader>
            <v-list-item prepend-icon="home" title="Index" value="Index" href="#"></v-list-item>
            <v-list-item prepend-icon="book" title="Blog" value="Blog" href="https://blog.gxres.net"></v-list-item>
            <v-list-item prepend-icon="library_books" title="Library" value="Library"
                href="https://library.gxres.net"></v-list-item>
        </v-list>

        <v-list density="compact" nav>
            <v-list-subheader>Quick Access</v-list-subheader>
            <v-list-item prepend-icon="contacts" title="Social" value="Social"
                href="https://library.gxres.net/social"></v-list-item>
            <v-list-item prepend-icon="link" title="Friends" value="Friends"
                href="https://library.gxres.net/links"></v-list-item>
        </v-list>
    </v-navigation-drawer>
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