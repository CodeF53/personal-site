<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

const query: QueryBuilderParams = {
  path: '/',
  sort: [{ sortDate: -1 }],
}
</script>

<template>
  <main id="portfolio">
    <h1>Portfolio</h1>
    <ul class="results col gap4">
      <ContentList v-slot="{ list }" :query="query">
        <li v-for="article in list" :key="article._path" class="interactive panel">
          <PortfolioListItem :article="article" />
        </li>
      </ContentList>
    </ul>
  </main>
</template>

<style lang="scss">
#portfolio {
  max-width: var(--content-width);
  padding: 1rem 0;

  .results {
    max-width: var(--content-width);
    list-style: none;
    padding: 0;
  }
}
</style>
