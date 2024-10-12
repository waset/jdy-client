import { defineConfig, presetAttributify, presetMini, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  presets: [
    presetMini({
      dark: 'class',
    }),
    presetAttributify({
      prefix: 'un-',
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  content: {
    pipeline: {
      include: ['**/*.{vue,ts}'],
    },
  },
  rules: [
    // 自定义规则
    [/^wh-\[(\d+(?:px|em|rem|%)?)\]$/, ([, size]) => ({
      width: size,
      height: size,
    })],
    [/^bg-gradient-linear-\[(\d{1,3}deg),(.*)\]$/, ([, angle, colors]) => ({
      background: `linear-gradient(${angle}, ${colors})`,
    })],
    [/^(col)-(\d+)$/, ([, _, num]) => {
      return {
        'grid-column': `span ${num} / span ${num}`,
      }
    }],
    [/^(offset)-(\d+)$/, ([, _, num]) => {
      return {
        'grid-column-start': Number(num) + 1,
      }
    }],
    [/^blur-(\d+(?:\.\d+)?)(px)$/, ([, value]) => ({
      'backdrop-filter': `blur(${value}px)`,
    })],

  ],
  shortcuts: {
    'flex-start': 'flex items-center justify-start',
    'flex-end': 'flex items-center justify-end',
    'flex-between': 'flex items-center justify-between',
    'flex-around': 'flex items-center justify-around',
    'flex-evenly': 'flex items-center justify-evenly',
    'flex-center-col': 'flex flex-col items-center justify-center',
    'flex-center-row': 'flex flex-row items-center justify-center',
    'grid-12': 'grid grid-cols-12',
    'blur-bgc': 'light:bg-[rgba(255,255,255,0.7)] dark:bg-[rgba(0,0,0,0.3)] blur-5px', // 毛玻璃背景色
  },
})
