<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/types'

const { article } = defineProps<{ article: ParsedContent }>()
const path = article._path
const { image, title, tags, description } = article
</script>

<template>
  <NuxtLink class="portfolioListItem" :to="path">
    <div class="header wrap spaceBetween">
      <h2 class="row gap1 centerChildren">
        <img :src="image">
        <span> {{ title }} </span>
      </h2>

      <div class="alignCenter wrap gap2">
        <span v-for="(tag, i) in tags" :key="i" :class="`tag ${tag}`">
          {{ tag }}
        </span>
      </div>
    </div>

    <p>{{ description }}</p>
  </NuxtLink>
</template>

<style lang="scss">
.portfolioListItem {
  &, & > * {
    color: inherit;
    text-decoration: none;
  }

  img {
    height: 1.5rem;
  }

  @media (max-width: 42rem) {
    .header {
      flex-direction: column;
    }
  }

  .tag {
    background-color: var(--accent-light);
    padding: .125rem .5rem;
    border-radius: 1rem;

    color: var(--accent-dark);
    font-weight: bold;
    font-size: 0.9rem;

    &.DRAFT {
      background-color: #660000;
      color: white;
    }
  }
}
</style>
