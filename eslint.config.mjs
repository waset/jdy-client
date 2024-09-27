// @ts-check
import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    languageOptions: {
      parserOptions: {
        warnOnUnsupportedTypeScriptVersion: false,
      },
    },
  },
  antfu({
    unocss: true,
    formatters: true,
  }),
  {
    rules: {
      'no-console': 'warn',
      'unocss/order': 'off',
      'curly': 'off',
      'antfu/top-level-function': 'off',
      'unocss/order-attributify': 'off',
    },
  },
)
