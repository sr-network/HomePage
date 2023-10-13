<template>
    <v-container style="max-width:770px;">
        <v-card class="mx-auto my-4 w-full">

            <v-container>
                <v-row>
                    <v-col sm="6" xs="12">
                        <v-card color="#81D4FA" theme="white">
                            <div class="d-flex flex-no-wrap">
                                <v-avatar rounded="0" image="https://library.restent.win/images/icons/avatar.webp"
                                    size="70"></v-avatar>
                                <v-box class="ml-5 mt-2 mr-4">
                                    <div class="text-h6 mb-1.5">Restent Ou</div>
                                    <div class="text-body-2 d-inline-block text-truncate" style="max-width: 250px;">
                                        静寂に問う 答えを求めて
                                    </div>
                                </v-box>
                            </div>
                        </v-card>
                    </v-col>
                    <v-col sm="6" xs="12">
                        <v-card color="#81D4FA" theme="white">
                            <div class="d-flex flex-no-wrap">
                                <v-avatar rounded="0" image="https://library.restent.win/images/icons/SliverRiver.webp"
                                    size="70"></v-avatar>
                                <v-box class="ml-5 mt-2 mr-4">
                                    <div class="text-h6 mb-1.5">SliverRiver</div>
                                    <div class="text-body-2 d-inline-block text-truncate" style="max-width: 250px;">
                                        何故生まれ落ちたの 映す情景の奥へと
                                    </div>
                                </v-box>
                            </div>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>

            <v-card-text>
                <v-container>
                    <div class="text-h6 mb-2">档案 / Profile</div>
                    <p class="text-body-2 mb-2">17 岁在读学生，来自广西壮族自治区。</p>
                    <p class="text-body-2 mb-2">8 岁开始学习技术和电子产品的相关知识，并在过去的几年中学到了一些比较有用的知识和技巧，尽管实际上它们并不值得一提。</p>
                    <p class="text-body-2 mb-2">目前效力于 <a href="https://github.com/S-Complex"
                            class="text-decoration-none">Sliver
                            Complex</a>, <a href="https://github.com/LittleSkinCommspt"
                            class="text-decoration-none">LittleSkin
                            Community</a> 和 <a href="https://go.14cloud.cn" class="text-decoration-none">14Cloud</a>。</p>
                    <p class="text-body-2 mb-2">当然也是一个 Minecraft 和音乐游戏的爱好者。</p>
                    <br>
                    <p class="text-body-2 mb-2">17-year-old student, lives in Guangxi, China.</p>
                    <p class="text-body-2 mb-2">Started accessing technology and electronics at the age of 8, and learnt
                        many useful knowledges and skills between these years, although they're tiny.</p>
                    <p class="text-body-2 mb-2">Now is a member of <a href="https://github.com/LittleSkinCommspt"
                            class="text-decoration-none">LittleSkin
                            Community</a> and <a href="https://go.14cloud.cn" class="text-decoration-none">14Cloud</a>,
                        owned a orginzation named <a href="https://github.com/S-Complex" class="text-decoration-none">Sliver
                            Complex</a>.</p>
                    <p class="text-body-2 mb-2">Also a fan of Minecraft & rhythm games.</p>
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