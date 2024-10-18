<script lang="ts" setup>
const props = defineProps<{
  statelist: string[]
}>()
const selected = defineModel({ type: Number, default: 0 })
</script>

<template>
  <div class="pt-[16px]">
    <common-fold title="活动状态" from-color="rgba(71,126,245,0.6)" to-color="rgba(243,245,254,0.6)">
      <div class="p-[16px] flex">
        <template v-for="(item, index) in props.statelist" :key="index">
          <div class="flex items-center mr-4" @click="selected = index">
            <template v-if="selected === index">
              <div class="selected">
                <div class="round" />
              </div>
            </template>
            <template v-else>
              <div class="unselected" />
            </template>
            <div class="text-[14px] ml-1">
              {{ item }}
            </div>
          </div>
        </template>
      </div>
    </common-fold>
  </div>
</template>

<style lang="scss" scoped>
.selected {
  --uno: 'flex justify-center items-center w-[18px] h-[18px] rounded-[18px] border-[#4D7AF5] border-2px border-solid';
  .round {
    --uno: 'w-[8px] h-[8px] rounded-[8px] bg-[#4D7AF5]';
  }
}
.unselected {
  --uno: 'w-[18px] h-[18px] rounded-[18px]  border-[#E0E0E0] border-2px border-solid';
}
</style>
