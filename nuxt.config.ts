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
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-chrome-192x192.png' },
        { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/android-chrome-512x512.png' }
      ],
      meta: [
        { name: 'theme-color', content: '#ffffff' },
        { name: 'description', content: 'Nuxt 4 ile geliştirilmiş statik web projesi' }
      ]
    }
  }
})