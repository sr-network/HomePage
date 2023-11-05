<template>
    <v-container style="max-width:770px;">
        <v-card class="mx-auto my-4 w-full">

            <v-container>
                <v-row>
                    <v-col sm="6" xs="12">
                        <v-card color="rgba(var(--v-theme-profileCard))">
                            <div class="d-flex flex-no-wrap">
                                <v-avatar rounded="0" image="https://library.restent.win/images/icons/avatar.webp"
                                    size="70"></v-avatar>
                                <v-box class="ml-5 mt-2 mr-4">
                                    <div class="text-h6 mb-1.5">Restent Ou</div>
                                    <div class="text-body-2 d-inline-block text-truncate" style="max-width: 250px;">
                                        @gxres042
                                    </div>
                                </v-box>
                            </div>
                        </v-card>
                    </v-col>
                    <v-col sm="6" xs="12">
                        <v-card color="rgba(var(--v-theme-profileCard))">
                            <div class="d-flex flex-no-wrap">
                                <v-avatar rounded="0" image="https://library.restent.win/images/icons/SliverRiver.webp"
                                    size="70"></v-avatar>
                                <v-box class="ml-5 mt-2 mr-4">
                                    <div class="text-h6 mb-1.5">SliverRiver</div>
                                    <div class="text-body-2 d-inline-block text-truncate" style="max-width: 250px;">
                                        @SliverRiver327
                                    </div>
                                </v-box>
                            </div>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>

            <v-card-text>
                <v-container>
                    <p>中国学生、轻量项目维护者。</p>
                    <p>8 岁时偶然接触到 IT 和电子产品方面的事物，在此之后通过自学和团队合作的方式不断学习相关知识。</p>
                    <p>效力于 <a href="https://github.com/s-complex">Sliver Complex</a>, <a href="https://github.com/LittleSkinCommspt">LittleSkin Community</a> 和 <a href="https://go.14cloud.cn">忆加速</a>，你或许在这些地方能够看见我。</p>
                    <p>其中一个个人喜好是在空闲时间听音乐、看有趣的视频，亦或是游玩 Minecraft 或音乐游戏。</p>
                    <br>
                    <p>Chinese student and lightweight project maintainer.</p>
                    <p>Accessed IT and electronics casually at the age of 8, and then began to learn related knowledge through self-study and team collaboration.</p>
                    <p>Working for <a href="https://github.com/s-complex">Sliver Complex</a>, <a href="https://github.com/LittleSkinCommspt">LittleSkin Community</a> and <a href="https://go.14cloud.cn">14Cloud</a>, and maybe you can see me at these places.</p>
                    <p>One of my personal favorites is listening to music, watching interesting videos, or playing Minecraft or music games.</p>
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