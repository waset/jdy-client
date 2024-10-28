<script setup lang="ts">
// 勾选框
const props = withDefaults(defineProps<{
  /**
   * 圆角大小
   */
  rounded?: string
}>(), {
  rounded: '60px',
})
const checked = defineModel({ type: Boolean, default: false })

function toggleCheck() {
  checked.value = !checked.value
}
</script>

<template>
  <div @click="toggleCheck">
    <template v-if="checked">
      <div class="check-box" :style="{ borderRadius: props.rounded }">
        <icon name="jdy:check-box" class="w-full h-full text-[#3971F3]" />
      </div>
    </template>
    <template v-else>
      <div class="w-4 h-4 border-solid border-2 border-[#CBCDD1]" :style="{ borderRadius: props.rounded }" />
    </template>
  </div>
</template>

<style scoped>
.check-box {
  --uno: 'flex justify-center items-center w-4 h-4 border-solid border-2 border-[#3971F3] bg-[#fff]';
}
</style>
