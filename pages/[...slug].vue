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

    <Giscus
      :id="`${$route.path}-comments`"
      repo="CodeF53/personal-site"
      repo-id="R_kgDOHtalww"
      category="Announcements"
      category-id="DIC_kwDOHtalw84CnVha"
      mapping="specific"
      :term="$route.path"
      strict="0"
      reactions-enabled="1"
      emit-metadata="0"
      input-position="top"
      theme="https://giscus.app/themes/purple_dark.css"
      lang="en"
      loading="lazy"
    />
  </main>
</template>

<style lang="scss">
#markdownPage {
  max-width: var(--content-width);
  padding: 1rem 0;

  article {
    h1 { font-size: 2rem; }
  }

  display: flex;
  flex-direction: column;
  gap: 1rem;
  giscus-widget { margin-bottom: 1rem }
}
</style>
