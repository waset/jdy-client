<script lang="ts" setup>
const props = defineProps<{
  data: any[]
}>()
</script>

<template>
  <div class="stat">
    <template v-for="(item, index) in props.data" :key="index">
      <div class="flex">
        <div class="label" :style="{ background: randomColor(index) }" />
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
