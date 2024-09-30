<script setup lang="ts">
// 渐变色边框
const props = withDefaults(defineProps<{
  title: string
}>(), {
  title: '',
})
</script>

<template>
  <div class="flex justify-between items-center box">
    {{ props.title }}
  </div>
</template>

<style scoped lang="scss">
.box {
  background: linear-gradient(to right, #3971f3 50%, #f3f5fe 0%);
}
</style>
