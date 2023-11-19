<template>
    <v-container style="max-width:770px;">
        <v-card class="mx-auto my-4 w-full">

            <v-img src="https://library.restent.win/images/introBanner.webp" height="399px" cover></v-img>

            <v-card-text>
                <v-container>
                    <v-card-title class="text-h4 text-center">Hi, <code>gxres042</code> here.</v-card-title>
                    <v-tabs v-model="tab" color="rgba(var(--v-theme-primary))" align-tabs="center">
                        <v-tab :value="English">English</v-tab>
                        <v-tab :value="Chinese">中文</v-tab>
                    </v-tabs>
                    <br>
                    <v-window v-model="tab">
                        <v-window-item value="English">
                            <ul>
                                <li>
                                    My name is Restent Ou, a.k.a. SliverRiver.
                                    <li>* Sometimes SliverRiver may be an entity.</li>
                                </li>
                                <li>My origin visualization is a rabbit, that's why my main avatars have elements of rabbit.</li>
                                <li>I am a front-end maintainer who based on Vue mostly, and I am also have some knowledges of Python 3.</li>
                                <li>Besides, I am working for <a href="https://github.com/s-complex">Sliver Complex</a>, <a href="https://github.com/LittleSkinCommspt">LittleSkin Community</a> and <a href="https://go.14cloud.cn">14Cloud</a> now.</li>
                                <li>Outside of working on Internet, listen to many types of music, play rhythm games or Minecraft and watching funny video in my spare time is my favorite.</li>
                                <li>BTW I will learn anything IDK if my friends need help about these things.</li>
                            </ul>
                        </v-window-item>
                        <v-window-item value="Chinese">
                            <ul>
                                <li>
                                    我的英文名是 Restent Ou，SliverRiver 也是我的一个常用名称。
                                    <li>* 某些情况下，SliverRiver 会是一个实体。</li>
                                </li>
                                <li>我的原型是兔兔，这也是为什么我目前的在用头像含有兔子的元素。</li>
                                <li>我是一个爱用 Vue 造答辩的前端维护，对 Python 3 有一定基础。<div class="text-decoration-line-through">但我就是不想写.jpg</div></li>
                                <li>此外，我目前在为 <a href="https://github.com/s-complex">Sliver Complex</a>, <a href="https://github.com/LittleSkinCommspt">LittleSkin Community</a> 和 <a href="https://go.14cloud.cn">14Cloud</a> 效劳。</li>
                                <li>在造答辩项目外，我非常喜欢在空闲时间听各种劲爆音游曲、游玩劲爆移动端音游谱面（其实偶尔会玩一下 Minecraft）并观看各种抽象视频。<div class="text-decoration-line-through">不做生活没乐趣，做了秒变精神小伙</div></li>
                                <li>如果身边的朋友需要帮助，而相关方面不熟悉的话，我也会尽自己可能学习（）</li>
                            </ul>
                        </v-window-item>
                    </v-window>
                </v-container>
            </v-card-text>
        </v-card>
    </v-container>
</template>
  
<script lang="ts">
export default {
    data: () => ({
        tab: null,
    }),
}
</script>