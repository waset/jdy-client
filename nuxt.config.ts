import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: {
    enabled: false,
  },
  ssr: true,
  modules: [
    '@pinia/nuxt',
    'pinia-plugin-persistedstate',
    '@unocss/nuxt',
    '@vant/nuxt',
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@nuxt/image',
    '@waset/unplugin-iconify/nuxt',
    '@nuxtjs/color-mode',
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
  colorMode: {
    preference: 'light', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storage: 'localStorage', // or 'sessionStorage' or 'cookie'
    storageKey: 'nuxt-color-mode',
  },
  image: {
    inject: true,
  },
  Iconify: {
    convert: {
      icon: 'assets/icons',
      svg: {
        path: 'assets/icons',
        noColor: true,
      },
    },
    iconifyIntelliSense: true,
  },

})
