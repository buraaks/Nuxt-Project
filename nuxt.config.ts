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
      title: 'Burak Temur',
      htmlAttrs: {
        lang: 'tr'
      },
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ],
      meta: [
        { name: 'theme-color', content: '#1a1a1a' },
        { name: 'description', content: 'Burak Temur - Yazilim gelistirici ve ogrenci. Nuxt, Vue.js, C# ve .NET ile projeler gelistiriyorum.' },
        { property: 'og:title', content: 'Burak Temur ' },
        { property: 'og:description', content: 'Yazilim gelistirici ve ogrenci. Nuxt, Vue.js, C# ve .NET ile projeler gelistiriyorum.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'tr_TR' },
        { name: 'author', content: 'Burak Temur' },
        { name: 'keywords', content: 'Burak Temur, developer, yazilimci, portfolio, Nuxt, Vue.js, C#, .NET' }
      ]
    }
  }
})