<script setup lang="ts">
import ContentHeading from './ContentHeading.vue';
import MainContent from './MainContent.vue';
import CardFooter from './CardFooter.vue';
import { ref } from 'vue';
import { Head } from '@unhead/vue/components';

const data = ref({
    imageUrl: 'https://library.gxres.net/images/icons/avatar.webp',
    name: 'Restent Ou',
    akaName: 'SliverRiver',
    id: '@gxres042',
    isContentChanged: false
})

function toggleContent() {
    if (data.value.isContentChanged) {
        data.value.imageUrl = 'https://library.gxres.net/images/icons/avatar.webp'
        data.value.name = 'Restent Ou'
        data.value.akaName = 'SliverRiver'
        data.value.id = '@gxres042'
    } else {
        data.value.imageUrl = 'https://library.gxres.net/images/icons/SliverRiver.webp'
        data.value.name = 'SliverRiver'
        data.value.akaName = 'Restent Ou'
        data.value.id = '@slivermoe'
    }

    data.value.isContentChanged = !data.value.isContentChanged;
}
</script>

<template>
    <Head>
        <title>{{ data.name }} ({{ data.id }})</title>
        <meta name="description" :content="'Introduction of' + ' ' + data.name">
    </Head>
    <div class="card">
        <div class="container mx-auto p-4">
            <div class="grid justify-center items-center space-y-3">
                <div class="flex justify-center">
                    <img width="172" height="172" class="rounded-full" @click="toggleContent" :src="data.imageUrl">
                </div>
                <div class="text-center">
                    <div class="text-3xl">{{ data.name }}</div>
                    <div class="text-sm">a.k.a. {{ data.akaName }}</div>
                </div>
                <div class="buttons">
                    <a class="button" href="https://blog.gxres.net">
                        <span class="icon i-material-symbols-light-book-rounded" />
                        <span>Blog</span>
                    </a>
                    <a class="button" href="https://blog.gxres.net">
                        <span class="icon i-material-symbols-light-library-books-rounded" />
                        <span>Library</span>
                    </a>
                </div>
            </div>
        </div>
        <hr>
        <div class="card-content">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
                <div class="space-y-3">
                    <ContentHeading>我是谁？</ContentHeading>
                    <MainContent>我就读于广西的一所高级中学。</MainContent>
                    <MainContent>我是一个很典型的菜鸟，看起来什么都会却什么也不会，我也期望着自己有一天能够完全掌握一项技能 233。</MainContent>
                    <MainContent>我或许是一个性格多变但是偏阴暗的人，这可能使你在与我交流时产生困扰。但是别担心，大多数情况下，事情并不会发展成你想象的那样，但你仍需多加注意。</MainContent>
                </div>
                <div class="space-y-3">
                    <div class="flex flex-wrap gap-3">
                        <div class="space-y-1">
                            <div class="text-sm">所在地</div>
                            <button class="button" aria-label="My location">
                                <span class="icon i-material-symbols-light-location-on-rounded" />
                                <span>广西壮族自治区</span>
                            </button>
                        </div>
                        <div class="space-y-1">
                            <div class="text-sm">语言</div>
                            <div class="buttons">
                                <button class="button" aria-label="What languages I speak">
                                    <span class="icon i-material-symbols-light-language-chinese-array-rounded" />
                                    <span>zh_CN</span>
                                </button>
                                <button class="button" aria-label="What languages I speak">
                                    <span class="icon i-material-symbols-light-language-chinese-array-rounded" />
                                    <span>en_US</span>
                                </button>
                            </div>
                        </div>
                        <div class="space-y-1">
                            <div class="text-sm">联系我</div>
                            <button class="button" aria-label="What languages I speak">
                                <span class="icon i-material-symbols-light-contact-page-rounded" />
                                <span>列表</span>
                            </button>
                        </div>
                        <div class="space-y-1">
                            <div class="text-sm">我加入的组织</div>
                            <div class="buttons">
                                <a class="button" href="https://github.com/s-complex">
                                    <span class="icon i-material-symbols-light-home-work-rounded" />
                                    <span>Sliver Complex</span>
                                </a>
                                <a class="button" href="https://github.com/LittleSkinCommspt">
                                    <span class="icon i-material-symbols-light-home-work-rounded" />
                                    <span>LittleSkin Community</span>
                                </a>
                            </div>
                        </div>
                        <div class="space-y-1">
                            <div class="text-sm">参与了测试</div>
                            <div class="buttons">
                                <button class="button">
                                    <span class="icon i-material-symbols-light-android" />
                                    <span>BlissROM (phoenix)</span>
                                </button>
                                <button class="button">
                                    <span class="icon i-material-symbols-light-android" />
                                    <span>riceDroid (phoenix, 10.2 final)</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
                <div class="space-y-3">
                    <ContentHeading>我的技能</ContentHeading>
                    <MainContent>尽管我没有完全掌握任何一项技能，但过往我学习了比较多的、为自己提供便利的技能知识。</MainContent>
                    <MainContent>目前我比较喜欢用 Vue.js 编写一个前端网站。虽然我曾学习并尝试了 React，但是我用起来并不是很舒服 Orz。</MainContent>
                    <MainContent>在日常生活中，我简单学习了诸如 组装电脑、安卓手机刷机、Wi-Fi Mesh 组网这些很普通的技能，以收拾因自己好奇心而起但不小心翻车的烂摊子。</MainContent>
                    <MainContent>我或许也是一个摄影师，但成图总会不尽人意的 233。</MainContent>
                </div>
                <div class="space-y-3">
                    <div class="flex flex-wrap gap-3">
                        <div class="space-y-1">
                            <div class="text-sm">已有知识</div>
                            <div class="buttons">
                                <div class="button">
                                    <span class="icon i-material-symbols-light-router-rounded" />
                                    <span>Wi-Fi Mesh</span>
                                </div>
                                <div class="button">
                                    <span class="icon i-material-symbols-light-router-rounded" />
                                    <span>OpenWRT ?</span>
                                </div>
                                <div class="button">
                                    <span class="icon i-material-symbols-light-photo-camera-rounded" />
                                    <span>摄影</span>
                                </div>
                                <div class="button">
                                    <span class="icon i-material-symbols-light-code-rounded" />
                                    <span>Vue.js</span>
                                </div>
                                <div class="button">
                                    <span class="icon i-material-symbols-light-code-rounded" />
                                    <span>React ?</span>
                                </div>
                                <div class="button">
                                    <span class="icon i-material-symbols-light-code-rounded" />
                                    <span>Python</span>
                                </div>
                                <div class="button">
                                    <span class="icon i-material-symbols-light-computer-rounded" />
                                    <span>Linux</span>
                                </div>
                                <div class="button">
                                    <span class="icon i-material-symbols-light-settop-component-outline-rounded" />
                                    <span>服务器运维 ?</span>
                                </div>
                            </div>
                        </div>
                        <div class="space-y-1">
                            <div class="text-sm">前端框架</div>
                            <div class="buttons">
                                <a class="button" href="https://vitejs.dev">
                                    <span class="icon i-material-symbols-light-code-rounded" />
                                    <span>Vite.js</span>
                                </a>
                                <a class="button" href="https://vitepress.dev">
                                    <span class="icon i-material-symbols-light-code-rounded" />
                                    <span>VitePress</span>
                                </a>
                                <a class="button" href="https://valaxy.site">
                                    <span class="icon i-material-symbols-light-code-rounded" />
                                    <span>Valaxy</span>
                                </a>
                                <a class="button" href="https://nuxt.com">
                                    <span class="icon i-material-symbols-light-code-rounded" />
                                    <span>Nuxt</span>
                                </a>
                            </div>
                        </div>
                        <div class="space-y-1">
                            <div class="text-sm">略有知识的操作系统</div>
                            <div class="buttons">
                                <div class="button">
                                    <span class="icon i-material-symbols-light-computer-rounded" />
                                    <span>Windows (all)</span>
                                </div>
                                <div class="button">
                                    <span class="icon i-material-symbols-light-computer-rounded" />
                                    <span>Debian 12</span>
                                </div>
                                <div class="button">
                                    <span class="icon i-material-symbols-light-computer-rounded" />
                                    <span>Ubuntu (all?)</span>
                                </div>
                                <div class="button">
                                    <span class="icon i-material-symbols-light-computer-rounded" />
                                    <span>Android (13 & 14)</span>
                                </div>
                                <div class="button">
                                    <span class="icon i-material-symbols-light-computer-rounded" />
                                    <span>Arch Linux (latest)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
                <div class="space-y-3">
                    <ContentHeading>我的爱好</ContentHeading>
                    <MainContent>我的爱好特别复杂，包含了 IT、美食、音游等内容。</MainContent>
                    <MainContent>我的主要爱好便是游玩音乐游戏，目前主修 Arcaea, Phigros。或许是因为过度热爱，我的收藏歌单很大一部分都是来自音乐游戏的音乐 233。</MainContent>
                    <MainContent>我也喜欢购入一些二手并且性价比高的设备和软件。</MainContent>
                </div>
                <div class="space-y-3">
                    <div class="flex flex-wrap gap-3">
                        <div class="space-y-1">
                            <div class="text-sm">设备</div>
                            <div class="buttons">
                                <button class="button">
                                    <span class="icon i-material-symbols-light-phone-android-rounded" />
                                    <span>Mi 11 Lite</span>
                                </button>
                                <button class="button">
                                    <span class="icon i-material-symbols-light-phone-android-rounded" />
                                    <span>Redmi K30 4G</span>
                                </button>
                                <button class="button">
                                    <span class="icon i-material-symbols-light-developer-mode-rounded" />
                                    <span>OrangePi R1 Plus</span>
                                </button>
                                <button class="button">
                                    <span class="icon i-material-symbols-light-computer-rounded" />
                                    <span>Dell Optiplex 5060 SFF</span>
                                </button>
                                <button class="button">
                                    <span class="icon i-material-symbols-light-tablet-android-rounded" />
                                    <span>Samsung Galaxy Tab S6 Lite</span>
                                </button>
                            </div>
                        </div>
                        <div class="space-y-1">
                            <div class="text-sm">游戏列表</div>
                            <div class="buttons">
                                <button class="button">
                                    <span class="icon i-material-symbols-light-videogame-asset-rounded" />
                                    <span>Arcaea</span>
                                </button>
                                <button class="button">
                                    <span class="icon i-material-symbols-light-videogame-asset-rounded" />
                                    <span>Phigros</span>
                                </button>
                                <button class="button">
                                    <span class="icon i-material-symbols-light-videogame-asset-rounded" />
                                    <span>Minecraft</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <div class="container p-4">
            <CardFooter icon="i-material-symbols-light-fork-right-rounded">灵感源于 <a
                    href="https://github.com/amphineko/atomicneko">atomicneko</a>，由 <a
                    href="https://vitejs.dev">Vite.js</a> 驱动。</CardFooter>
            <CardFooter icon="i-material-symbols-light-favorite-rounded">{{ data.name }} 的主页 <a href="/">//
                    gxres.net</a>
            </CardFooter>
            <CardFooter icon="i-material-symbols-light-warning-rounded">版权所有 © 2019 - {{ new
                        Date().getFullYear() }} {{ data.name }}.</CardFooter>
        </div>
    </div>
</template>

<style>
.main-content {
    border-left: 5px solid #42A5F5;
    padding: 12px;
}
</style>