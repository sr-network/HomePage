<template>
    <header class="pf-v5-c-masthead pf-m-display-inline" id="inline-masthead">
        <div class="pf-v5-c-masthead__main">
            <a class="pf-v5-c-masthead__brand" href="#">
                <NuxtImg loading="lazy" decoding="async" class=":uno: w-8 h-8 rounded-full" width="32" height="32"
                    src="https://library.gxres.net/images/icons/favicon.webp" alt="Site favicon" />
            </a>
        </div>
        <div class="pf-v5-c-masthead__content">
            <div class=":uno: w-full h-full pf-v5-c-toolbar__content">
                <div class=":uno: w-full h-full pf-v5-c-toolbar__content-section">
                    <div class=":uno: w-full h-full flex justify-end pf-v5-c-toolbar__group">
                        <div class=":uno: flex items-center pf-v5-c-toggle-group">
                            <div class="pf-v5-c-toggle-group__item">
                                <button class="pf-v5-c-toggle-group__button"
                                    :class="{ 'pf-m-selected': colorMode.preference === 'light' }" type="button"
                                    @click="colorMode.preference = 'light'">
                                    <span class="pf-v5-c-toggle-group__text">
                                        <span class=":uno: text-xl h-full i-fe-sunny-o" />
                                    </span>
                                </button>
                            </div>
                            <div class="pf-v5-c-toggle-group__item">
                                <button class="pf-v5-c-toggle-group__button"
                                    :class="{ 'pf-m-selected': colorMode.preference === 'auto' }" type="button"
                                    @click="colorMode.preference = 'auto'">
                                    <span class="pf-v5-c-toggle-group__text">
                                        <span class=":uno: text-xl h-full i-fe-desktop" />
                                    </span>
                                </button>
                            </div>
                            <div class="pf-v5-c-toggle-group__item">
                                <button class="pf-v5-c-toggle-group__button"
                                :class="{ 'pf-m-selected': colorMode.preference === 'dark' }" type="button"
                                    @click="colorMode.preference = 'dark'">
                                    <span class="pf-v5-c-toggle-group__text">
                                        <span class=":uno: text-xl h-full i-fe-moon" />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
</script>