<script setup lang="ts">
const leftTitle = defineModel('title')
const rightTitle = defineModel('right')
</script>

<template>
  <div class="blur-bgc rounded-[16px] ">
    <div class="grid-12">
      <div
        class="skew col-4">
        <div class="skew-right" />
        <div class="skew-text ">
          {{ leftTitle }}
        </div>
      </div>
      <div class="col-4 offset-8 flex-end pr-[16px] pt-[5px] color-[#3971F3]">
        {{ rightTitle }}
      </div>
    </div>

    <div class="grid-12 gap-[16px] pt-[11px] pb-[16px] px-[16px]">
      <div class="col-4">
        <product-home-card img="/home/neworder.svg" text="新增订单" :num="20" />
      </div>
      <div class="col-4">
        <product-home-card img="/home/newuser.svg" text="新增客户" :num="20" />
      </div>
      <div class="col-4">
        <product-home-card img="/home/money.svg" text="销售金额" :num="20" />
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
</style>
