<template>
  <main id="markdownPage">
    <ContentDoc>
      <template #default="{ doc }">
        <Meta name="og:image" :content="doc.image" />
        <article class="panel">
          <h1>{{ doc.title }}</h1>
          <ContentRenderer class="markdown" :value="doc" />
        </article>
      </template>

      <template #not-found>
        <p>No content found.</p>
      </template>
    </ContentDoc>
  </main>
</template>

<style lang="scss">
#markdownPage {
  max-width: var(--content-width);
  padding: 1rem 0;

  article {
    h1 { font-size: 2rem; }
  }
}
</style>
