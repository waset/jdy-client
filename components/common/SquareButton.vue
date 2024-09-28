<script setup lang="ts">
// 方角按钮
const props = withDefaults(defineProps<{
  text: string
  isFull?: boolean
  onClick?: () => void
}>(), {
  text: '',
  isFull: false,
  onClick: () => {},
})

const colorStyle = props.isFull === true ? '#0068FF' : '#fff'
</script>

<template>
  <div class="flex justify-center items-center px-4 py-2" :style="{ backgroundColor: colorStyle, border: props.isFull === true ? 'none' : '1px solid #0068FF' }">
    {{ props.text }}
  </div>
</template>

<style scoped lang="scss">
</style>
