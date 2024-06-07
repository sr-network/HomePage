<template>
  <div class=":uno: w-full h-150 grid grid-cols-1 place-items-center">
    <div class=":uno: grid grid-cols-1 md:grid-cols-4 gap-6">
      <div class=":uno: order-first md:order-last">
        <div class=":uno: h-full flex items-center">
          <NuxtImg @click="toggleContent" class=":uno: w-36 h-36 rounded-full" width="144"
          height="144" :src="profile.avatar" alt="My avatar" />
        </div>
      </div>
      <div class=":uno: col-span-3">
        <hgroup class=":uno: text m-0">
          <h1>
            <span>👋 Hey, </span>
            <br />
            <span>I'm
              <span class=":uno: bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-sky-400">Restent
                Ou</span>.
            </span>
            <br />
            <transition name="fade">
              <span v-show="profile.isTextVisible" class=":uno: text-base">(a.k.a.
                SliverRiver)</span>
            </transition>
          </h1>
          <p>
            <i>"I always do useless things on the Internet."</i>
          </p>
        </hgroup>
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