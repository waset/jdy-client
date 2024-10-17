<script lang="ts" setup>
const props = defineProps<{
  data: any[]
}>()
// 根据 index 动态生成颜色 (这里使用 HSL 色值)
function generateBackgroundColor(index: number) {
  const hueStart = (index * 50) % 360 // 起始色调 (Hue)
  const hueEnd = (hueStart + 60) % 360 // 结束色调 (Hue)，根据起始色调偏移一定角度
  return `linear-gradient(to bottom, hsl(${hueStart}, 100%, 80%), hsl(${hueEnd}, 100%, 80%))`
}
</script>

<template>
  <div class="stat">
    <template v-for="(item, index) in props.data" :key="index">
      <div class="flex">
        <div class="label" :style="{ background: generateBackgroundColor(index) }" />
        <div class="data">
          <div class="text-[12px]">
            {{ item.name }}
          </div>
          <div class="text-[14px] mt-1">
            {{ item.num }}
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.stat {
  --uno: 'grid grid-cols-[1fr_1fr_1fr] gap-x-30px gap-y-16px blur-bgc text-color p-16px rounded-24px';
  .data {
    --uno: 'flex flex-col font-400';
  }
  .label {
    --uno: 'mr-1 w-4px h-16px rounded-4px';
  }
}
</style>
