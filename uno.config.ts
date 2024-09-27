import { defineConfig, presetMini } from 'unocss'

export default defineConfig({
  presets: [
    presetMini({
      dark: 'class',
    }),
  ],
  content: {
    pipeline: {
      include: [
        '**/*.{vue,ts}',
      ],
    },
  },
  shortcuts: {
    'flex-start': 'flex items-center justify-start',
    'flex-end': 'flex items-center justify-end',
    'flex-center': 'flex items-center justify-center',
    'flex-between': 'flex items-center justify-between',
    'flex-around': 'flex items-center justify-around',
    'flex-evenly': 'flex items-center justify-evenly',
    'flex-col-center': 'flex flex-col items-center justify-center',
  },
})
