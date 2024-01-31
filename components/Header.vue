<script lang="ts" setup>

</script>

<template>
  <header class="col">
    <nav class="row gap2 spaceBetween alignCenter">
      <NuxtLink to="/" class="home interactive" aria-label="home">
        <NuxtImg
          :aria-hidden="true" alt="my profile picture" class="pfp"
          src="/assets/pfp.low.svg" preload width="40" height="40"
        />
      </NuxtLink>

      <Links />
    </nav>
  </header>
</template>

<style lang="scss">
header {
  position: fixed; top: 0;
  left: 0; right: 0;

  nav {
    height: var(--header-height);
    width: var(--content-width);
  }

  a.home {
    height: 100%;
    aspect-ratio: 1;
    padding: 0.25rem;
    border-radius: unset;
  }
  .pfp { height: 100%; }

  // mobile responsiveness
  .links {
    // first hide labels
    @media (max-width: 35rem) {
      span { display: none; }
    }
    // then hide blog/email and reduce the gap between links
    @media (max-width: 20rem) {
      .blog, .email { display: none; }
      gap: 0.25rem;
    }
  }
}
</style>
