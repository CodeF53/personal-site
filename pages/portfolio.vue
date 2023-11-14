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
          <NuxtLink :to="article._path">
            <div class="wrap spaceBetween">
              <h2 class="row gap1 centerChildren">
                <img :src="article.image">
                <span> {{ article.title }} </span>
              </h2>

              <div class="alignCenter wrap gap2">
                <span v-for="(tag, i) in article.tags" :key="i" class="tag">
                  {{ tag }}
                </span>
              </div>
            </div>

            <p>{{ article.description }}</p>
          </NuxtLink>
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

    > li {
      &, & > * {
        color: inherit;
        text-decoration: none;
      }

      img {
        height: 1.5rem;
      }

      .tag {
        background-color: var(--accent-light);
        padding: .125rem .5rem;
        border-radius: 1rem;

        color: var(--accent-dark);
        font-weight: bold;
        font-size: 0.9rem;
      }
    }
  }
}
</style>
