import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: {
    enabled: false,
  },
  ssr: false,
  modules: [
    '@pinia/nuxt',
    'pinia-plugin-persistedstate',
    '@unocss/nuxt',
    '@vant/nuxt',
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@nuxt/image',
  ],
  css: ['~/assets/css/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
  image: {
    dir: 'assets/image',
  },
})
