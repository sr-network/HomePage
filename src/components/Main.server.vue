<template>
  <div class=":uno: mx-auto max-w-2xl px-4 pb-4 -mt-20">
    <div class=":uno: flex justify-center">
      <NuxtImg
        preload
        decoding="async"
        class=":uno: h-32 w-32 rounded-full shadow-lg"
        width="128"
        height="128"
        src="https://library.gxres.net/images/icons/avatar.webp"
        alt="Restent's avatar"
      />
    </div>
    <section class="typo">
      <h1 class=":uno: text-center">Restent Ou</h1>
      <div class=":uno: flex flex-row justify-center gap-4">
        <a href="https://blog.gxres.net">Blog</a>
        <a href="https://library.gxres.net">Library</a>
        <a href="https://slirv.vip">Lab</a>
      </div>
      <p>
        Hello, I'm Restent Ou, a senior high student who comes from Guangxi,
        China.
      </p>
      <h2>a.k.a.</h2>
      <p>In some scenarios, I may be active as SliverRiver.</p>
      <p>In game, I usually campaign under the name undefinedR2.</p>
      <h2>Work</h2>
      <p>
        I mainly work for myself, creating meaningless things in my lab. You may
        also see me at
        <a href="https://travellings.cn" target="_blank">Travellings</a> and
        <a href="https://speed.14cloud.cn" target="_blank">14Cloud</a>.
      </p>
      <p>
        I'm probably better at front-end, love working with Vue, and have some
        knowledge base of React and Svelte.
      </p>
      <p>
        At the same time, as a matter of interest, I also got to know and try
        out <a href="https://nitro.unjs.org" target="_blank">Nitro</a> (a
        back-end toolkit).
      </p>
      <h2>Favorite</h2>
      <ul>
        <li>Games such as Minecraft, Arcaea, etc.</li>
        <li>Cuisine</li>
        <li>Xiaomi Ecosystem (?)</li>
        <li>...</li>
      </ul>
      <h2>Find me</h2>
      <p>
        You can find me at
        <a href="https://github.com/gxres042" target="_blank">GitHub</a> or
        <a href="https://m.flyemoji.moe/@slivermoe" target="_blank">Mastodon</a
        >.
      </p>
      <p>
        Or, you can get more ways to find me by following
        <a href="https://library.gxres.net/social/for-contact">the list here</a
        >.
      </p>
    </section>
  </div>
</template>

<style>
.typo {
  h1 {
    --apply: "font-semibold leading-snug text-4xl my-4";
  }

  h2 {
    --apply: "font-semibold leading-snug text-3xl my-8";
  }

  a {
    --apply: "hover:underline";
  }

  p,
  ul {
    --apply: "my-4 leading-relaxed";
  }

  ul {
    --apply: "pl-5 list-disc";
  }
}
</style>
