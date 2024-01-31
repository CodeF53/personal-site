<script setup lang="ts">
definePageMeta({ layout: 'home' })
</script>

<template>
  <div id="home" class="row centerChildren">
    <NuxtImg
      aria-hidden="true" alt="my profile picture" class="pfp"
      src="/assets/pfp.svg" preload width="320" height="320"
    />

    <main class="col gap2">
      <marquee><h1>Hi, I'm F53</h1></marquee>

      <p class="bio">
        I'm a {{ Math.floor((Date.now() / 100000 - 10463292) / 315360) }}yo Full Stack Developer
        who spends a majority of their free time tinkering on websites and game mods.
        Fluent in React, Vue, Ruby on Rails, Java, and Python.
      </p>

      <Links />
    </main>
  </div>
  <DevOnly>
    <div>
      <h2>TODO:</h2>
      <ul>
        <li>background: move render to worker thread</li>
        <li>portfolio sorting, filtering</li>
        <li>self-host blogs</li>
        <li>duplicate site, but with real name and picture</li>
      </ul>
    </div>
  </DevOnly>
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
