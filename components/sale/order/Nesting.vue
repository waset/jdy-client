<script setup lang="ts">
const props = defineProps<{
  title: string
}>()

const folded = defineModel({ type: Boolean, default: true })

const toggleFold = () => {
  folded.value = !folded.value
}
</script>

<template>
  <div class="card">
    <!-- header -->
    <div class="flex-center-between px-[16px] py-[8px] bg-[#F1F5FE]">
      <div class="flex-center-row gap-[8px]">
        <slot name="tag" />
        <div class="text-[14px] font-semibold color-[#1B2129]">
          {{ props.title }}
        </div>
      </div>
      <div
        class="font-size-[10px] color-[#333]" @click="toggleFold()">
        <van-icon :name="!folded ? 'arrow' : 'arrow-down'" size="12" />
      </div>
    </div>
    <!-- info -->
    <template v-if="folded">
      <slot name="info" />
    </template>
  </div>
</template>

<style scoped lang="scss">
.card {
  --uno: 'flex flex-col bg-[#fff] border-solid border-1 border-[#EFF0F6] rounded-[24px] shadow-[0_10px_20px_-7px_rgb(0,0,0,0.1)] gap-[12px] overflow-hidden';
}
</style>
