<script setup lang="ts">
const porps = defineProps<{
  leftTitle: string

}>()
</script>

<template>
  <div class="blur-bgc rounded-[16px] ">
    <div class="grid-12">
      <div
        class="skew col-4">
        <div class="skew-right" />
        <div class="skew-text ">
          {{ porps.leftTitle }}
        </div>
      </div>
    </div>

    <div class="pt-[10px] pl-[6px] text-[10px]" uno-sm="text-[14px]">
      <div class="bg-[#C7DAFF] py-[5px] pl-[6px] pr-[10px] rounded-l-[20px]  grid-12">
        <div class="items-title">
          门店
        </div>
        <div class="items-title">
          总业绩
        </div>
        <div class="items-title">
          中回收旧料抵扣
        </div>
        <div class="items-title">
          中回收旧料抵扣
        </div>
        <div class="items-title">
          低毛利
        </div>
        <div class="items-title">
          低销售额
        </div>
      </div>
      <div class="py-[12px] pb-[16px] pl-[6px] pr-[10px] rounded-l-[20px] text-[10px] grid-12 " uno-sm="text-[14px]">
        <div class="items">
          平顶山潮宏基万达店
        </div>
        <div class="items">
          123344
        </div>
        <div class="items">
          123344
        </div>
        <div class="items">
          123344
        </div>
        <div class="items">
          123344
        </div>
        <div class="items">
          123344
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.skew {
  --uno: 'h-[29px] relative';
  .skew-right {
    --uno: 'absolute left-[20px] w-[80%] h-[100%] bg-gradient-linear-[90deg,#1a6beb,#69a2fe]  skew-x-335 rounded-rb-8px';
  }
  .skew-text {
    --uno: 'line-height-[29px] absolute text-size-xl text-center  w-[80%] h-[100%]  color-[#fff] bg-gradient-linear-[90deg,#1a6beb,#5B98FB] rounded-tl-16px ';
  }
}
.items-title {
  --uno: 'col-2 flex-center-row text-center color-#4B576D';
}
.items {
  --uno: 'col-2 flex-center-row text-center color-[#3971F3] dark:color-[#fff]';
}
</style>
