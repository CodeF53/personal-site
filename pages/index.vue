<script setup lang="ts">
definePageMeta({ layout: 'home' })
</script>

<template>
  <div id="home" class="row centerChildren">
    <NuxtImg
      aria-hidden="true" alt="my oc waving" class="pfp"
      src="/assets/wave.png" :preload="true" width="320" height="320"
      :placeholder="64" format="webp"
    />

    <main class="col gap2">
      <h1>Hi, I'm Cassie!</h1>

      <p class="bio">
        I'm a {{ Math.floor((Date.now() / 100000 - 10463292) / 315360) }}yo Full Stack Developer
        who spends a majority of their free time tinkering on websites and game mods.
        Fluent in React, Vue, Ruby on Rails, Java, and Python.
      </p>

      <Links />
    </main>
  </div>
</template>

<style lang="scss">
#home {
  --imgSize: min(20rem, 50vw, 50vh);
  @media (max-width: 60rem) {
    flex-direction: column;

    --imgSize: min(20rem, 100vw - 1rem)
  }

  gap: 2rem;

  img.pfp {
    width: var(--imgSize);
    height: var(--imgSize);
  }

  main {
    max-width: min(40rem, var(--content-width));
  }

  h1 { color: var(--accent-light); }
}
</style>
