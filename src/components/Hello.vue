<template>
  <div class=":uno: p-6 w-full max-w-2xl mx-auto">
    <div class=":uno: h-160 w-full">
      <div class=":uno: h-full grid grid-cols-1 place-items-center">
        <div class=":uno: grid grid-cols-1 md:grid-cols-4 gap-6">
          <div class=":uno: col-span-3 w-full h-full flex items-center">
            <div class=":uno: space-y-2">
              <h1 class=":uno: text-3xl font-semibold">
                <span>👋 Hey, </span>
                <br />
                <span>I'm
                  <span class=":uno: bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-sky-400">Restent
                    Ou</span>.
                </span>
                <br />
                <transition name="fade">
                  <span class=":uno: text-xl" v-if="profile.isTextVisible">(a.k.a. SliverRiver)</span>
                </transition>
              </h1>
              <p>
                <i>"I always do useless things on the Internet."</i>
              </p>
            </div>
          </div>
          <div class=":uno: order-first md:order-last">
            <NuxtImg @click="toggleContent" loading="lazy" decoding="async" class=":uno: w-36 h-36 rounded-full"
              width="144" height="144" :src="profile.avatar" />
          </div>
        </div>
        <div class=":uno: space-x-6">
          <NuxtLink href="https://blog.gxres.net" class="pf-v5-c-button pf-m-primary" type="button">Blog</NuxtLink>
          <NuxtLink href="https://blog.gxres.net" class="pf-v5-c-button pf-m-primary" type="button">Library</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const profile = useProfileStore();
const toggleContent = () => {
  profile.toggleContent();
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>