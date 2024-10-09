<script setup lang="ts">
// 渐变色边框
const props = defineProps<{
  title: string
}>()
</script>

<template>
  <div class="flex justify-between items-center px-4 py-2 rounded-t-3 box">
    <div class="font-extrabold text-#333333 italic text-14px">
      {{ props.title }}
    </div>
    <slot />
  </div>
</template>

<style scoped lang="scss">
.box {
  background: linear-gradient(0.25turn, #3971f3, 20%, #f3f5fe00);
}
</style>
