<template>
  <div class="pb-[16px]">
    <common-fold title="产品信息" :is-collapse="false">
      <div class="flex justify-center items-center py-[24px]">
        <div class="product">
          <NuxtImg class="bag" src="/images/sale/bag.png" width="120" />
          <div class="super">
            <div class="super-bg">
              <icon name="jdy:crosspath" size="12" />
            </div>
          </div>
        </div>
      </div>
      <div class="p-[16px]">
        <div class="btn grid-12 gap-[20px]">
          <div class="btn-left col-span-4 offset-2">
            <icon name="jdy:search" size="12" />
            <div class="ml-2">
              搜商品
            </div>
          </div>
          <div
            class="btn-right col-span-4"
          >
            <icon name="jdy:scanit" size="12" />
            <div class="ml-2">
              扫商品
            </div>
          </div>
        </div>
      </div>
    </common-fold>
  </div>
</template>

<style lang="scss" scoped>
.btn-left {
  --uno: 'text-[16px] py-[8px] border-none rounded-[36px] text-[#FFFFFF] flex justify-center items-center';
  background: linear-gradient(to bottom, #1a6beb, #6ea6ff);
}
.btn-right {
  --uno: 'text-[16px] py-[8px] text-[#1a6beb] rounded-[36px] bg-[transparent] flex justify-center items-center';
  border: 1px solid #1a6beb;
}
.product {
  --uno: 'w-[150px] h-[150px] rounded-[50%] relative';
  box-shadow: rgba(239, 242, 255, 1) 0 5px 20px 0;
  .bag {
    --uno: 'absolute top-[26px] left-[14px]';
  }
  .super {
    --uno: 'absolute top-[14px] right-[14px]';
    &-bg {
      --uno: 'w-[36px] h-[36px] rounded-[50%] bg-[#FFFFFF] flex justify-center items-center';
      background: linear-gradient(to bottom, rgba(255, 152, 152, 1), rgba(255, 79, 79, 1));
    }
  }
}
</style>
