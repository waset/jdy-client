<script setup lang="ts">
// 再接收一个padding
const props = withDefaults(defineProps<{
  color?: string
  content?: string
  contentColor?: string
  shadow?: boolean
  padding?: string
  onClick?: () => void
}>(), {
  color: '',
  content: '',
  shadow: true,
  shadowColor: '#333',
  onClick: () => {},
})

// 如果没有传入颜色，则使用默认颜色
const backgroundStyle = props.color ? props.color : 'linear-gradient(0deg, #6ea6ffbf 11%, #1a6beb)'

// 如果没有设置阴影，则不显示
const shadowStyle = props.shadow === true ? `0px 5px 10px 0px rgba(57, 113, 243, 0.24)` : ''

// 如果没有设置padding，则使用默认padding
const paddingStyle = props.padding ? `${props.padding}` : '8px 16px'
</script>

<template>
  <div class="button flex justify-center items-center font-bold text-4 rounded-3xl" :style="{ color: props.contentColor, background: backgroundStyle, boxShadow: shadowStyle, padding: paddingStyle }" @click="props.onClick">
    {{ props.content }}
  </div>
</template>

<style scoped lang="scss">
</style>
