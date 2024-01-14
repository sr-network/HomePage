<template>
    <div style="position: relative;overflow: hidden">
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
            <mdui-dropdown>
                <mdui-button-icon slot="trigger" icon="contrast"></mdui-button-icon>
                <mdui-menu>
                    <mdui-menu-item ref="lightMode" value="light">Light Mode</mdui-menu-item>
                    <mdui-menu-item @click="setTheme('dark')" value="dark">Dark Mode</mdui-menu-item>
                    <mdui-menu-item @click="setTheme('auto')" value="auto">Follow System
                        Settings</mdui-menu-item>
                </mdui-menu>
            </mdui-dropdown>
        </mdui-top-app-bar>
    </div>
</template>

<script setup lang="ts">
import { setTheme } from 'mdui';
import { ref, onMounted } from 'vue';
import { useStore } from '../stores';

const store = useStore();
const navigationDrawer = ref<HTMLElement | null>(null);
const openButton = ref<HTMLElement | null>(null);
const closeButton = ref<HTMLElement | null>(null);
const lightMode = ref<HTMLElement | null>(null);
const darkMode = ref<HTMLElement | null>(null);
const autoMode = ref<HTMLElement | null>(null);

onMounted(() => {
    openButton.value?.addEventListener("click", () => (navigationDrawer.value as any).open = true);
    closeButton.value?.addEventListener("click", () => (navigationDrawer.value as any).open = false);
    lightMode.value?.addEventListener("click", () => {
        setTheme('light');
        store.setTheme('light');
    });
    darkMode.value?.addEventListener("click", () => {
        setTheme('dark');
        store.setTheme('dark');
    });
    autoMode.value?.addEventListener("click", () => {
        setTheme('auto');
        store.setTheme('auto');
    });
    setTheme(store.themePreference);
});
</script>
