// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // typescript: { strict: true, typeCheck: true, shim: false }, (causes build to get stuck somehow)
  modules: ['nuxt-lodash', 'nuxt-icon', '@nuxt/content', '@nuxt/image'],

  css: ['~/assets/styles/layout.scss', '~/assets/styles/misc.scss', '~/assets/styles/font.scss', '~/assets/styles/components.scss', '~/assets/styles/structure.scss'],

  app: {
    // no useless root nuxt div
    rootTag: 'body',

    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Cassie',
      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
      meta: [
        { name: 'theme-color', content: '#36026E' },
        { name: 'description', content: 'Passionate full web developer with expertise in the front and back end. Explore my portfolio to see my work and experience.' },
        { property: 'og:description', content: 'Passionate full stack web developer with expertise in the front and back end. Explore my portfolio to see my work and experience.' },
        { name: 'keywords', content: 'full stack development, web development, front-end development, back-end development, web design, JavaScript, HTML, CSS, React, Vue, Ruby, Ruby on Rails, NextJS, Nuxt, responsive design, portfolio, personal website, coding projects, programming, software development' },
        { name: 'author', content: 'Cassie' },
        { property: 'og:title', content: 'Cassie' },
        { property: 'og:image', content: '/android-chrome-512x512.png' },
        { name: 'twitter:card', content: 'summary' },
      ],
    },
  },
})
