<template>
  <div id="home" class="row centerChildren">
    <img class="pfp" src="/assets/pfp.svg">

    <main class="col gap2">
      <h1>Hi, I'm F53</h1>

      <p class="bio">
        I'm a {{ Math.floor((Date.now() / 100000 - 10463292) / 315360) }}yo Full Stack Developer
        who spends a majority of their free time tinkering on mods and websites.
        Fluent in React, Vue, Ruby on Rails, Java, and Python.
      </p>

      <ul class="links gap4 row centerChildren">
        <li>
          <NuxtLink to="mailto:fseusb@gmail.com" aria-label="email">
            <img src="/assets/email.svg">
            <span>Email</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="https://github.com/CodeF53" aria-label="github">
            <img src="/assets/github.svg">
            <span>Github</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="https://dev.to/f53" aria-label="blog">
            Blog
          </NuxtLink>
        </li>
      </ul>
    </main>
  </div>
  <div>
    <h2>TODO:</h2>
    <ul>
      <li>background: optimize render</li>
      <li>background: something fancy with mouse movement</li>
      <li>colors</li>
      <li>experience page: (education + jobs + projects) handled with markdown, click to learn more, filterable, sortable</li>
      <li>blog page: handled with markdown, filterable, sortable</li>
      <li>header for non-homepage pages</li>
      <li>duplicate site, but with real name and picture, with minimal duplicate source code</li>
    </ul>
  </div>
</template>

<style lang="scss">
#home {
  --imgSize: min(20rem, 50vw, 50vh);
  --bioSize: min(40rem, 100vw - 2rem);
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
    max-width: var(--bioSize);
  }

  .links {
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;

    a {
      display: flex;
      gap: .25rem;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      cursor: pointer;
    }
    img {
      height: 1.5rem;
    }
  }
}
</style>
