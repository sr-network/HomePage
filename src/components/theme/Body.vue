<template>
    <v-container style="max-width:770px;">
        <v-card class="mx-auto my-4 w-full">

            <v-img src="https://library.restent.win/images/introBanner.webp" height="410px" cover></v-img>

            <v-tabs v-model="tab" color="rgba(var(--v-theme-primary))" grow>
                <v-tab :value="English">English</v-tab>
                <v-tab :value="Chinese">中文</v-tab>
            </v-tabs>

            <v-card-text>
                <v-window v-model="tab">
                    <v-container>
                        <v-window-item value="English">
                            <div class="text-center">
                                <h4 class="text-h4">Who am I?</h4>
                                <p class="text-body-1">Firstly, I am NOT a famous person on Internet.</p>
                                <p class="text-body-1">Secondly, I am just a normal guy from a city which located in
                                    Guangxi, China. I am also studying at a senior high school in this city now.</p>
                                <p class="text-body-1">Thirdly, I am the root of name "Restent Ou" and "SliverRiver".</p>
                                <h4 class="text-h4">How to describe myself?</h4>
                                <p class="text-body-1">You can understand me as a "Emotionally vulnerable patients, with no
                                    consummate skill".</p>
                                <p class="text-body-1">I am so sure that I don't have any skill that is consummate. And
                                    unlucky I am easy to get emotionally vulnerable, even sometimes I will hurt others'
                                    emotions.</p>
                                <h4 class="text-h4">What I do on Internet?</h4>
                                <p class="text-body-1">Nothing. I code my websites with the most of my time, and sometimes I
                                    may help others to maintain some projects or manage some groups.</p>
                                <p class="text-body-1">I am now working for <a
                                        href="https://github.com/LittleSkinCommspt">LittleSkin Community</a>, <a
                                        href="https://go.14cloud.cn">14Cloud</a> and myself (<a
                                        href="https://github.com/s-complex">Sliver Complex</a>).</p>
                                <p class="text-body-1">You may also see me in some groups of Android Custom ROMs & Third-party Kernels, that's because I am a fan of phone customize, but I'm planning to decelerate my events about it.</p>
                                <h4 class="text-h4">What is my favorite?</h4>
                                <ul>
                                    <li class="text-body-1">Playing Minecraft and rhythm games (include Phigros, Arcaea, etc)</li>
                                    <li class="text-body-1">Watching many types of video (most of them are IT, Minecraft and cooking)</li>
                                    <li class="text-body-1">Listening to music (include rhythm music, Chinese songs, English songs, etc)</li>
                                </ul>
                            </div>
                        </v-window-item>
                        <v-window-item value="Chinese">
                            <div class="text-center">
                                <h4 class="text-h4">我是谁？</h4>
                                <p class="text-body-1">首先，我在网络上并不是什么名人。</p>
                                <p class="text-body-1">其次，我只是一个来自广西壮族自治区内的某个城市的普通人，现在正在该市的一所高中就读。</p>
                                <p class="text-body-1">再来，我是 “Restent Ou” 和 “SliverRiver” 这两个名字的所有者。</p>
                                <h4 class="text-h4">如何描述我自己？</h4>
                                <p class="text-body-1">你可以理解成 “感情易受伤害的一个炮灰”。</p>
                                <p class="text-body-1">我可以很自信的告诉你：我并没有任何一个非常厉害的技能。并且很不巧的是，我的感情易受伤害（像极了你一拳砸向一层薄薄的玻璃窗），甚至有时我也可能会伤害到其他人的感情。</p>
                                <h4 class="text-h4">我在网上做些什么？</h4>
                                <p class="text-body-1">并没有什么。我的大部分时间都投给了给自己网站敲代码，有时候也会帮别人维护一些项目、管理一下群聊。</p>
                                <p class="text-body-1">我现在在为 <a
                                        href="https://github.com/LittleSkinCommspt">LittleSkin Community</a>、 <a
                                        href="https://go.14cloud.cn">忆加速 Network</a> 以及我自己（<a
                                        href="https://github.com/s-complex">Sliver Complex</a>）打工。</p>
                                <p class="text-body-1">你可能在某些高自定义类原生和第三方内核群看到我，这是因为我也算是个很喜欢玩刷机的人，不过目前我正在考虑减淡这一方面的活动（毕竟人老了，不适合继续刷了）。</p>
                                <h4 class="text-h4">我的爱好是什么？</h4>
                                <ul>
                                    <li class="text-body-1">游玩 Minecraft 和音乐游戏（包括但不限于 Phigros 和 Arcaea）</li>
                                    <li class="text-body-1">观看非常多种类的类型（大部分都是 IT、Minecraft 和美食视频）</li>
                                    <li class="text-body-1">听音乐（包括但不限于节奏音乐、华语歌曲和英文歌曲）</li>
                                </ul>
                            </div>
                        </v-window-item>
                    </v-container>
                </v-window>
            </v-card-text>
        </v-card>
    </v-container>
</template>
  
<script lang="ts">
import '@/assets/scss/body.scss';

export default {
    data: (): { tab: null } => ({
        tab: null,
    }),
}
</script>