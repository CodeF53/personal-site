// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: { strict: true, typeCheck: true, shim: false },

  css: ['~/assets/styles/layout.scss', '~/assets/styles/misc.scss', '~/assets/styles/font.scss'],
})
