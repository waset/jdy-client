<script setup lang="ts">
// 主题色渐变边框
const props = defineProps<{
  title: string
}>()
</script>

<template>
  <div class="theme-color-header flex flex-row items-center justify-between shrink-0">
    <div class="flex flex-row items-center gap-2 flex-1 rounded-t-2xl">
      <slot name="avatar" />
      <div class="text-4 font-semibold">
        {{ props.title }}
      </div>
    </div>
    <slot name="operation" />
  </div>
</template>
