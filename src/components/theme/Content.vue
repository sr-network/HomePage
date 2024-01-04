<template>
    <v-container style="max-width:900px;">
        <v-card class="mx-auto my-4 w-full">

            <v-container>
                <div class="d-flex justify-center">
                    <v-sheet class="pa-2 ma-2"> <v-avatar color="grey" size="130" rounded="1">
                            <v-img cover src="https://library.gxres.net/images/icons/avatar.webp"></v-img>
                        </v-avatar>
                        <v-list-item class="text-center" title="Restent Ou" subtitle="@gxres042"></v-list-item></v-sheet>
                    <v-sheet class="pa-2 ma-2"> <v-avatar color="grey" size="130" rounded="1">
                            <v-img cover src="https://library.gxres.net/images/icons/SliverRiver.webp"></v-img>
                        </v-avatar>
                        <v-list-item class="text-center" title="SliverRiver" subtitle="@slivermoe"></v-list-item></v-sheet>
                </div>
            </v-container>
            <v-tabs v-model="tab" color="rgba(var(--v-theme-primary))" grow>
                <v-tab :value="1">English</v-tab>
                <v-tab :value="2">中文</v-tab>
            </v-tabs>

            <v-card-text style="content">
                <v-window v-model="tab" style="min-height: 500px;">
                    <v-window-item :key="1" :value="1">
                        <v-row>
                            <v-col cols="12" sm="4">
                                <h5 class="text-h5">self-introduction</h5>
                            </v-col>
                            <v-col cols="12" sm="8">
                                <p class="text-body-1" style="margin-bottom:0.7rem;">I am a senior high student who comes from Guangxi, China aged 17.</p>
                                <p class="text-body-1" style="margin-bottom:0.7rem;">My English name is Restent Ou, sometimes aka SliverRiver.</p>
                                <p class="text-body-1" style="margin-bottom:0.7rem;">BTW I am a truly rubbish on the Internet.</p>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="4">
                                <h5 class="text-h5">organizations</h5>
                            </v-col>
                            <v-col cols="12" sm="8">
                                <ul>
                                    <li class="text-body-1">
                                        <a href="https://github.com/S-Complex">Sliver Complex</a> · My Lab :3
                                    </li>
                                    <li class="text-body-1"><a href="https://github.com/LittleSkinCommspt">LittleSkin Community</a> · Member</li>
                                    <li class="text-body-1"><a href="https://go.14cloud.cn">14Cloud</a> · Contributor</li>
                                </ul>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="4">
                                <h5 class="text-h5">skills</h5>
                            </v-col>
                            <v-col cols="12" sm="8">
                                <ul>
                                    <li class="text-body-1">
                                        Build website with <a href="https://cn.vuejs.org">Vue</a> in common. WordPress, Typecho and Hexo are OK.
                                    </li>
                                    <li class="text-body-1">Repairing devices basicly, include Desktop PC, Laptop, Mobile phone, etc.</li>
                                    <li class="text-body-1">Basic server maintaince</li>
                                    <li class="text-body-1">more...</li>
                                </ul>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="4">
                                <h5 class="text-h5">favorite</h5>
                            </v-col>
                            <v-col cols="12" sm="8">
                                <ul>
                                    <li class="text-body-1">
                                        Play Minecraft, Phigros and Arcaea.
                                    </li>
                                    <li class="text-body-1">Listen to music or watch video when I am really free.</li>
                                    <li class="text-body-1">Eat delicious food, such as squid 🦑.</li>
                                </ul>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="4">
                                <h5 class="text-h5">find me</h5>
                            </v-col>
                            <v-col cols="12" sm="8">
                                <p class="text-body-1">Get the way to find me by reading this <a
                                        href="https://library.gxres.net">list</a>.</p>
                            </v-col>
                        </v-row>
                    </v-window-item>
                    <v-window-item :key="2" :value="2">
                        <v-row>
                            <v-col cols="12" sm="4">
                                <h5 class="text-h5">自我介绍</h5>
                            </v-col>
                            <v-col cols="12" sm="8">
                                <p class="text-body-1" style="margin-bottom:0.7rem;">我是一名 17 岁的高中学生，来自广西壮族自治区。</p>
                                <p class="text-body-1" style="margin-bottom:0.7rem;">我的英文名是 Restent Ou，有时会以 SliverRiver 这个名字活动。</p>
                                <p class="text-body-1" style="margin-bottom:0.7rem;">你说得对，但是我是一个互联网废物。</p>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="4">
                                <h5 class="text-h5">组织</h5>
                            </v-col>
                            <v-col cols="12" sm="8">
                                <ul>
                                    <li class="text-body-1">
                                        <a href="https://github.com/S-Complex">Sliver Complex</a> · 我的实验场地 :3
                                    </li>
                                    <li class="text-body-1"><a href="https://github.com/LittleSkinCommspt">LittleSkin Community</a> · 成员</li>
                                    <li class="text-body-1"><a href="https://go.14cloud.cn">14Cloud</a> · 贡献者</li>
                                </ul>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="4">
                                <h5 class="text-h5">技能</h5>
                            </v-col>
                            <v-col cols="12" sm="8">
                                <ul>
                                    <li class="text-body-1">
                                        通常用 <a href="https://cn.vuejs.org">Vue</a> 来建网站。WordPress, Typecho 和 Hexo 也是可以的。
                                    </li>
                                    <li class="text-body-1">基础的设备修理，包括但不限于台式机、笔记本和手机。</li>
                                    <li class="text-body-1">很很很基础的运维。</li>
                                    <li class="text-body-1">还有挺多，不记得了</li>
                                </ul>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="4">
                                <h5 class="text-h5">爱好</h5>
                            </v-col>
                            <v-col cols="12" sm="8">
                                <ul>
                                    <li class="text-body-1">
                                        玩 Minecraft，也玩 Phigros 和 Arcaea
                                    </li>
                                    <li class="text-body-1">真正能闲的下来的时候我会听一会音乐或是看一会视频</li>
                                    <li class="text-body-1">吃自己喜欢的美食，其一是鱿鱼🦑</li>
                                </ul>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="4">
                                <h5 class="text-h5">找我</h5>
                            </v-col>
                            <v-col cols="12" sm="8">
                                <p class="text-body-1">阅读 <a
                                        href="https://library.gxres.net">这个列表</a> 你就知道要怎么找到我了</p>
                            </v-col>
                        </v-row>
                    </v-window-item>
                </v-window>
            </v-card-text>
        </v-card>
    </v-container>
</template>
  
<script lang="ts">
export default {
    data: (): { tab: null } => ({
        tab: null,
    }),
}
</script>