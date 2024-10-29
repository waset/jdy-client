<script lang="ts" setup>
const props = defineProps<{
  data: any[]
}>()
</script>

<template>
  <div class="data">
    <template v-for="(item, index) in props.data" :key="index">
      <div class="flex">
        <div class="obj">
          <div class="flex items-center">
            <div class="mark" />
            <div class="text-[12px] font-normal text-color-light">
              {{ item.name }}
            </div>
          </div>
          <div class="text-[16px] text-[#3971F3] font-semibold mt-2">
            {{ item.value }}个
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
  .data {
  --uno: 'mt-16px grid grid-cols-[1fr_1fr_1fr] gap-y-16px text-12px';
  .obj {
    --uno: 'flex flex-col items-center font-400';
    .mark {
      --uno: 'w-4px h-10px rounded-4px bg-[#3971F3] mr-1';
      background: linear-gradient(to bottom, #1a6beb, #6ea6ff);
    }
  }
}
</style>
