// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/content'],
  css: ['~/assets/css/main.css'],
  colorMode: {
    preference: 'dark'
  },

  // Statik hosting (FTP) için en önemli ikili:
  ssr: false, 
  nitro: {
    preset: 'static',
    prerender: {
      routes: ['/api/repos']
    }
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
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
        { name: 'description', content: 'Burak Temur - Yazılım geliştirici ve öğrenci.' },
        { property: 'og:title', content: 'Burak Temur' },
        { property: 'og:description', content: 'Yazılım geliştirici ve öğrenci.' },
        { property: 'og:image', content: 'https://jeft.com.tr/og-image.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'tr_TR' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Burak Temur' },
        { name: 'twitter:description', content: 'Yazılım geliştirici ve öğrenci.' },
        { name: 'twitter:image', content: 'https://jeft.com.tr/og-image.png' },
        { name: 'author', content: 'Burak Temur' },
        { name: 'keywords', content: 'Burak Temur, yazılım geliştirici, öğrenci, portfolyo' }
      ]
    }
  }
})  