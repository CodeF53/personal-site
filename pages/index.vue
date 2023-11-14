<template>
  <div id="home" class="row centerChildren">
    <img class="pfp" src="/assets/pfp.svg">

    <main class="col gap2">
      <h1>Hi, I'm F53</h1>

      <p class="bio">
        I'm a {{ Math.floor((Date.now() / 100000 - 10463292) / 315360) }}yo Full Stack Developer
        who spends a majority of their free time tinkering on websites and game mods.
        Fluent in React, Vue, Ruby on Rails, Java, and Python.
      </p>

      <ul class="links wrap gap4 centerChildren">
        <li class="interactive">
          <NuxtLink to="mailto:fseusb@gmail.com" aria-label="email">
            <Icon name="ri:mail-fill" />
            <span>Email</span>
          </NuxtLink>
        </li>
        <li class="interactive">
          <NuxtLink to="https://github.com/CodeF53" aria-label="github">
            <Icon name="ph:github-logo-fill" />
            <span>Github</span>
          </NuxtLink>
        </li>
        <li class="interactive">
          <NuxtLink to="https://dev.to/f53" aria-label="blog">
            <Icon name="ri:article-fill" />
            <span>Blog</span>
          </NuxtLink>
        </li>
        <li class="interactive">
          <NuxtLink to="/portfolio" aria-label="portfolio">
            <Icon name="ri:file-list-fill" />
            <span>Portfolio</span>
          </NuxtLink>
        </li>
        <!-- <li class="interactive">
          <NuxtLink to="https://dev.to/f53" aria-label="blog">
            <Icon name="mdi:linkedin" />
            <span>LinkedIn</span>
          </NuxtLink>
        </li> -->
      </ul>
    </main>
  </div>
  <div>
    <h2>TODO:</h2>
    <ul>
      <li>background: move render to worker thread</li>
      <li>portfolio sorting, filtering</li>
      <li>self-host blogs</li>
      <li>layout for non-homepage pages</li>
      <li>duplicate site, but with real name and picture</li>
    </ul>
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
    max-width: var(--content-width);
  }

  .links {
    list-style-type: none;
    padding: 0;

    li {
      background-color: var(--accent-light);
      &, > * { color: var(--accent-dark); }
      font-weight: bold;

      a {
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

  h1 { color: var(--accent-light); }
}
</style>
