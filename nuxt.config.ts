// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  
  // Statik hosting (FTP) için en önemli ikili:
  ssr: false, 
  nitro: {
    preset: 'static'
  },

  app: {
    head: {
      title: 'Nuxt Projesi',
      htmlAttrs: {
        lang: 'tr'
      },
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ],
      meta: [
        { name: 'theme-color', content: '#1a1a1a' },
        { name: 'description', content: 'Burak Temur - Developer & Student Portfolio' }
      ]
    }
  }
})