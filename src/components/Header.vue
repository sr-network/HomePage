<template>
    <mdui-navigation-drawer close-on-overlay-click close-on-esc modal ref="navigationDrawer">
        <mdui-list>
            <mdui-list-subheader>My sites</mdui-list-subheader>
            <mdui-list-item icon="person" active>Intro</mdui-list-item>
            <mdui-list-item icon="book" href="https://blog.gxres.net">Blog</mdui-list-item>
            <mdui-list-item icon="library_books" href="https://library.gxres.net">Library</mdui-list-item>
        </mdui-list>
        <mdui-list>
            <mdui-list-subheader>Quick Access</mdui-list-subheader>
            <mdui-list-item icon="contacts" href="https://library.gxres.net/contact">Contact</mdui-list-item>
            <mdui-list-item icon="links" href="https://library.gxres.net/links">Friends</mdui-list-item>
            <mdui-list-item icon="analytics" href="https://status.slirv.vip">Site Status</mdui-list-item>
        </mdui-list>
    </mdui-navigation-drawer>

    <mdui-top-app-bar scroll-behavior="elevate">
        <mdui-button-icon ref="openButton" icon="menu"></mdui-button-icon>
        <mdui-top-app-bar-title>Ou's Intro</mdui-top-app-bar-title>
        <div style="flex-grow: 1"></div>
        <mdui-button-icon @click="toggleTheme" icon="contrast"></mdui-button-icon>
    </mdui-top-app-bar>
</template>

<script setup lang="ts">
import 'mdui/components/navigation-bar.js';
import 'mdui/components/list-item.js';
import 'mdui/components/list-subheader.js';
import 'mdui/components/list.js';
import 'mdui/components/top-app-bar-title.js';
import 'mdui/components/top-app-bar.js';
import 'mdui/components/button-icon.js';
import { setTheme } from 'mdui';
import { ref, onMounted, reactive } from 'vue';

const navigationDrawer = ref<HTMLElement | null>(null);
const openButton = ref<HTMLElement | null>(null);
const closeButton = ref<HTMLElement | null>(null);
const state = reactive({
    darkMode: false,
});
const toggleTheme = () => {
    state.darkMode = !state.darkMode;
    setTheme(state.darkMode ? 'dark' : 'light');
};

onMounted(() => {
    openButton.value?.addEventListener("click", () => (navigationDrawer.value as any).open = true);
    closeButton.value?.addEventListener("click", () => (navigationDrawer.value as any).open = false);
    const prefersDarkScheme = matchMedia('(prefers-color-scheme: dark)');
    setTheme(prefersDarkScheme.matches ? 'dark' : 'light');
    prefersDarkScheme.addEventListener('change', (event) =>
        setTheme(event.matches ? 'dark' : 'light')
    )
});
</script>
