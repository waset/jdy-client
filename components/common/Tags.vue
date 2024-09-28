<script setup lang="ts">
const props = withDefaults(defineProps<{
  text?: string
  color?: string
  fontColor?: string
  isOval?: boolean
}>(), {
  text: '',
  color: '',
  fontColor: '',
  isOval: false,
})

// 设置border-radius
const borderStyle = props.isOval === true ? '100px 10px / 120px' : '8px'
</script>

<template>
  <div
    class="tag flex-center px-[8px]"
    :style="{ backgroundColor: props.color, color: props.fontColor, borderRadius: borderStyle }"
  >
    {{ props.text }}
  </div>
</template>

<style scoped lang="scss">
.tag {
  max-width: fit-content;
}
</style>
