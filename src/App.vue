<script lang="ts">
import 'mdui/components/navigation-drawer.js';
import 'mdui/components/list-item.js';
import 'mdui/components/list.js';
import 'mdui/components/menu-item.js';
import 'mdui/components/menu.js';
import 'mdui/components/top-app-bar-title.js';
import 'mdui/components/top-app-bar.js';
import 'mdui/components/button-icon.js';
import 'mdui/components/dropdown.js';
import 'mdui/components/navigation-bar.js';
import 'mdui/components/layout.js';
import 'mdui/components/layout-main.js';
</script>

<script setup lang="ts">
import Header from './components/Header.vue'
import Content from './components/Content.vue'
import Footer from './components/Footer.vue'
import { setColorScheme } from 'mdui/functions/setColorScheme';

const loadScript1 = import('@mdui/icons/person.js');
const loadScript2 = import('@mdui/icons/book.js');
const loadScript3 = import('@mdui/icons/library-books.js');
const loadScript4 = import('@mdui/icons/contact-page.js');
const loadScript5 = import('@mdui/icons/link.js');
const loadScript6 = import('@mdui/icons/analytics.js');
const loadScript7 = import('@mdui/icons/menu.js');
const loadScript8 = import('@mdui/icons/contrast.js');
const loadScript9 = import('@mdui/icons/wb-sunny.js');
const loadScript10 = import('@mdui/icons/nightlight.js');
const loadScript11 = import('@mdui/icons/computer.js');

// 等待所有 JavaScript 文件加载完成
Promise.all([
  loadScript1, loadScript2, loadScript3, loadScript4, loadScript5,
  loadScript6, loadScript7, loadScript8, loadScript9, loadScript10,
  loadScript11
])

setColorScheme('#2196F3');
</script>

<template>
  <mdui-layout>
    <Header />
    <mdui-layout-main>
      <Content />
    </mdui-layout-main>
    <Footer />
  </mdui-layout>
</template>