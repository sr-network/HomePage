<template>
    <v-footer absolute border>
        <v-row no-gutters>
            <v-col class="text-md-left text-center" cols="12" md="6">
                <p class="pa-2 ma-2 text-body-2">
                    © Restent Ou & SliverRiver 2019 - {{ new Date().getFullYear() }}<br>
                </p>
                
            </v-col>
            <v-col>
                <p class="pa-2 ma-2 text-md-right text-center text-body-2">
                    Powered by <a href="https://vitepress.dev" class="text-decoration-none"
                        style="color: #1e90ff">Nuxt.js</a> · UI by SliverRiver<br>
                </p>
            </v-col>
        </v-row>
    </v-footer>
</template>