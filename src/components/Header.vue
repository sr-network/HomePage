<template>
    <div style="position: relative;overflow: hidden">
        <mdui-navigation-drawer close-on-overlay-click close-on-esc modal ref="navigationDrawer">
            <mdui-list>
                <mdui-list-subheader>My sites</mdui-list-subheader>
                <mdui-list-item active>
                    Intro
                    <mdui-icon-person slot="icon" />
                </mdui-list-item>
                <mdui-list-item href="https://blog.gxres.net">
                    Blog
                    <mdui-icon-book slot="icon" />
                </mdui-list-item>
                <mdui-list-item href="https://library.gxres.net">
                    Library
                    <mdui-icon-library-books slot="icon" />
                </mdui-list-item>
            </mdui-list>
            <mdui-list>
                <mdui-list-subheader>Quick Access</mdui-list-subheader>
                <mdui-list-item href="https://library.gxres.net/contact">
                    Contact
                    <mdui-icon-contact-page slot="icon" />
                </mdui-list-item>
                <mdui-list-item href="https://library.gxres.net/links">
                    Friends
                    <mdui-icon-link slot="icon" />
                </mdui-list-item>
                <mdui-list-item href="https://status.slirv.vip">
                    Site Status
                    <mdui-icon-analytics slot="icon" />
                </mdui-list-item>
            </mdui-list>
        </mdui-navigation-drawer>

        <mdui-top-app-bar scroll-behavior="elevate">
            <mdui-button-icon ref="openButton"><mdui-icon-menu /></mdui-button-icon>
            <mdui-top-app-bar-title>Ou's Intro</mdui-top-app-bar-title>
            <div style="flex-grow: 1"></div>
            <mdui-dropdown>
                <mdui-button-icon slot="trigger"><mdui-icon-contrast /></mdui-button-icon>
                <mdui-menu>
                    <mdui-menu-item ref="lightMode" value="light">
                        Keep Light
                        <mdui-icon-wb-sunny slot="icon" />
                    </mdui-menu-item>
                    <mdui-menu-item ref="darkMode" value="dark">
                        Keep Dark
                        <mdui-icon-nightlight slot="icon" />
                    </mdui-menu-item>
                    <mdui-menu-item ref="autoMode" value="auto">
                        Follow System Settings
                        <mdui-icon-computer slot="icon" />
                    </mdui-menu-item>
                </mdui-menu>
            </mdui-dropdown>
        </mdui-top-app-bar>
    </div>
</template>

<script setup lang="ts">
import { setTheme } from 'mdui';
import { ref, onMounted } from 'vue';
import { useThemeStore } from '../stores/themeMode';

import '@mdui/icons/person.js';
import '@mdui/icons/book.js';
import '@mdui/icons/library-books.js';
import '@mdui/icons/contact-page.js';
import '@mdui/icons/link.js';
import '@mdui/icons/analytics.js';
import '@mdui/icons/menu.js';
import '@mdui/icons/contrast.js';
import '@mdui/icons/wb-sunny.js';
import '@mdui/icons/nightlight.js';
import '@mdui/icons/computer.js';

const store: any = useThemeStore();
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
        setTheme("light");
        store.setTheme("light");
    });
    darkMode.value?.addEventListener("click", () => {
        setTheme("dark");
        store.setTheme("dark");
    });
    autoMode.value?.addEventListener("click", () => {
        setTheme("auto");
        store.setTheme("auto");
    });
    setTheme(store.themePreference);
});
</script>
../stores/themeMode