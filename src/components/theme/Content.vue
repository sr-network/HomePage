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

            <v-card-text>
                <v-window v-model="tab">
                    <v-window-item :key="1" :value="1">
                        <v-row>
                            <v-col cols="12" sm="5">
                                <h5 class="text-h5">Self-introduction</h5>
                            </v-col>
                            <v-col cols="12" sm="7">
                                <p class="text-body-1">Senior high student who comes from Guangxi, China.</p>
                                <p class="text-body-1">Named Restent Ou, possibly a.k.a. SliverRiver.</p>
                                <p class="text-body-1">Member of <a href="https://github.com/s-complex">Sliver Complex</a>,
                                    <a href="https://github.com/LittleSkinCommspt">LittleSkin Community</a> and <a
                                        href="https://go.14cloud.cn">14Cloud</a>.
                                </p>
                                <p class="text-body-1">Real salted fish in reality.</p>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="5">
                                <h5 class="text-h5">My skills</h5>
                            </v-col>
                            <v-col cols="12" sm="7">
                                <ul>
                                    <li class="text-body-1">
                                        Build static-site with <a href="https://vuejs.org">Vue</a> (and...<a
                                            href="https://react.dev">React</a>
                                        sometimes?)
                                    </li>
                                    <li class="text-body-1">PC Building & Reparing (maybe)</li>
                                    <li class="text-body-1">Customer support service</li>
                                    <li class="text-body-1">Basic server maintaince</li>
                                </ul>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="5">
                                <h5 class="text-h5">My favorite</h5>
                            </v-col>
                            <v-col cols="12" sm="7">
                                <ul>
                                    <li class="text-body-1">
                                        Play Minecraft and rhythm games
                                    </li>
                                    <li class="text-body-1">Listen to music with types of rhythm, classic chinese, china-pop
                                        and
                                        more</li>
                                    <li class="text-body-1">Watch video with types of IT, cooking, etc.</li>
                                </ul>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="5">
                                <h5 class="text-h5">Find me</h5>
                            </v-col>
                            <v-col cols="12" sm="7">
                                <p class="text-body-1">Get the way to find me by reading this <a
                                        href="https://library.gxres.net">list</a>.</p>
                            </v-col>
                        </v-row>
                    </v-window-item>
                    <v-window-item :key="2" :value="2">
                        <v-row>
                            <v-col cols="12" sm="5">
                                <h5 class="text-h5">自我介绍</h5>
                            </v-col>
                            <v-col cols="12" sm="7">
                                <p class="text-body-1">来自广西壮族自治区的一位高中生。</p>
                                <p class="text-body-1">名 Restent Ou，也可能另名 SliverRiver。</p>
                                <p class="text-body-1"><a href="https://github.com/s-complex">Sliver Complex</a>、<a
                                        href="https://github.com/LittleSkinCommspt">LittleSkin Community</a> 和 <a
                                        href="https://go.14cloud.cn">14Cloud</a> 的成员。
                                </p>
                                <p class="text-body-1">现实中的一条纯咸鱼。</p>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="5">
                                <h5 class="text-h5">我的技能</h5>
                            </v-col>
                            <v-col cols="12" sm="7">
                                <ul>
                                    <li class="text-body-1">
                                        配合 <a href="https://vuejs.org">Vue</a> (也有可能会用 <a href="https://react.dev">React</a>
                                        ) 构建自己的小网站
                                    </li>
                                    <li class="text-body-1">电脑的组装与维修（？</li>
                                    <li class="text-body-1">客服支持提供</li>
                                    <li class="text-body-1">基础服务器运维</li>
                                </ul>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="5">
                                <h5 class="text-h5">我的喜好</h5>
                            </v-col>
                            <v-col cols="12" sm="7">
                                <ul>
                                    <li class="text-body-1">
                                        游玩 Minecraft 与节奏游戏（比如某个 A 开头的）
                                    </li>
                                    <li class="text-body-1">收听各种音乐，包括但不限于音游曲、经典华语乐曲、华语流行曲</li>
                                    <li class="text-body-1">收看以 IT 和美食内容为主的视频</li>
                                </ul>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="5">
                                <h5 class="text-h5">找我？</h5>
                            </v-col>
                            <v-col cols="12" sm="7">
                                <p class="text-body-1">阅读 <a href="https://library.gxres.net">这个列表</a> 以知晓要如何找到我。</p>
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