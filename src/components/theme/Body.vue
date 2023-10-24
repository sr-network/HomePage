<template>
    <v-container style="max-width:770px;">
        <v-card class="mx-auto my-4 w-full">

            <v-container>
                <v-row>
                    <v-col sm="6" xs="12">
                        <v-card color="#0091EA" theme="white">
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
                        <v-card color="#0091EA" theme="white">
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
                    <div class="text-h6 mb-2">档案 / Profile</div>
                    <p class="text-body-2 mb-2">17 岁在读学生，来自广西壮族自治区。</p>
                    <p class="text-body-2 mb-2">8 岁开始接触信息技术和电子产品，并在过去的几年中学到了一些比较有用的知识和技巧。</p>
                    <p class="text-body-2 mb-2">目前效力于 <a href="https://github.com/S-Complex"
                            class="text-decoration-none">Sliver
                            Complex</a>, <a href="https://github.com/LittleSkinCommspt"
                            class="text-decoration-none">LittleSkin
                            Community</a> 和 <a href="https://go.14cloud.cn" class="text-decoration-none">14Cloud</a>。</p>
                    <p class="text-body-2 mb-2">平日喜欢写 Vue，迫于 IQ 太低所以没转战 React；闲暇时间会听一些音乐、看一些有趣的视频，当然少不了打一会音游。</p>
                    <br>
                    <p class="text-body-2 mb-2">17-year-old student, lives in Guangxi, China.</p>
                    <p class="text-body-2 mb-2">Started accessing IT and electronics at the age of 8, and learnt
                        many useful knowledges and skills between these years.</p>
                    <p class="text-body-2 mb-2">Now is a member of <a href="https://github.com/LittleSkinCommspt"
                            class="text-decoration-none">LittleSkin
                            Community</a> and <a href="https://go.14cloud.cn" class="text-decoration-none">14Cloud</a>,
                        owned a orginzation named <a href="https://github.com/S-Complex" class="text-decoration-none">Sliver
                            Complex</a>.</p>
                    <p class="text-body-2 mb-2">I like to coding with Vue in most of my time, and I give up coding with React cause of my low IQ; in my spare time, I listen to some music, watch some interesting videos, and of course, play some rhythm games.</p>
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