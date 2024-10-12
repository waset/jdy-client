<script setup lang="ts">
// 渐变色边框
const props = defineProps<{
  title: string
}>()
</script>

<template>
  <div class="flex-center-between px-4 py-2 rounded-t-3 bg-[linear-gradient(90deg,#3971f3b8,#f3f5fe00)]">
    <div class="font-extrabold text-[#333333] italic text-[14px]">
      {{ props.title }}
    </div>
    <slot />
  </div>
</template>
