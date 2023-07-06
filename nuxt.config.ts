// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/reset.css'],
  pages: true,
  ssr: false,
  app: {
    head: {
      charset: 'utf-8',
      
    }
  }
})
