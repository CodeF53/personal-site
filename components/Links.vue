<script setup lang="ts">
import EmailModal from './EmailModal.vue'

const emailModal = ref<InstanceType<typeof EmailModal>>()
</script>

<template>
  <EmailModal ref="emailModal" />

  <ul class="links wrap gap4 centerChildren">
    <li class="interactive email">
      <div aria-label="email" @click="emailModal!.open()">
        <Icon name="ri:mail-fill" />
        <span>Email</span>
      </div>
    </li>
    <li class="interactive github">
      <NuxtLink to="https://github.com/CodeF53" aria-label="github">
        <Icon name="ph:github-logo-fill" />
        <span>Github</span>
      </NuxtLink>
    </li>
    <!-- <li class="interactive blog">
      <NuxtLink to="https://dev.to/f53" aria-label="blog">
        <Icon name="ri:article-fill" />
        <span>Blog</span>
      </NuxtLink>
    </li> -->
    <li class="interactive portfolio">
      <NuxtLink to="/portfolio" aria-label="portfolio">
        <Icon name="ri:file-list-fill" />
        <span>Portfolio</span>
      </NuxtLink>
    </li>
    <li class="interactive friends">
      <NuxtLink to="/friends" aria-label="friends">
        <Icon name="material-symbols:supervisor-account" />
        <span>Friends</span>
      </NuxtLink>
    </li>
  </ul>
</template>

<style lang="scss">
.links {
  list-style-type: none;
  padding: 0;

  li {
    background-color: var(--accent-light);
    &, > * { color: var(--accent-dark); }
    font-weight: bold;

    a, div {
      display: flex;
      gap: .25rem;
      justify-content: center;
      align-items: center;
      text-decoration: none;

      > svg {
        height: 1.25rem;
        width: 1.25rem;
      }
    }
  }
}
</style>
