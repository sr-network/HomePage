<template>
        <mdui-navigation-bar class="grid grid-cols-1 sm:grid-cols-2 p-7" style="position: relative;height:125px;">
            <div class="text-center sm:text-left text-sm">Copyright © 2019 - {{ new Date().getFullYear() }} Restent Ou & SliverRiver</div>
            <div class="text-center sm:text-right text-sm">Built with <a href="https://vitejs.dev">Vite.js</a> by SliverRiver.</div>
        </mdui-navigation-bar>
</template>

<script setup lang="ts">
import 'mdui/components/navigation-bar.js';
</script>