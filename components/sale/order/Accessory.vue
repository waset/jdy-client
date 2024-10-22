<script setup lang="ts">
// 销售明细_产品信息_配件
</script>

<template>
  <div>
    <sale-order-nesting title="配件">
      <template #tag>
        <common-tags type="orange" text="配件" :is-oval="true" />
      </template>
      <template #info>
        <div class="flex flex-col gap-[12px] px-[16px]">
          <div class="flex flex-row gap-[12px]">
            <common-avatar :size="40" />
            <div class="grid grid-rows-4 grid-flow-col w-full place-items-start gap-y-[12px] gap-x-[auto]">
              <div class="content">
                <div class="left">
                  条码
                </div>
                <div class="text-[14px] font-medium text-[#3971F3] dark:text-[#6EA6FF]">
                  --
                </div>
              </div>
              <div class="content">
                <div class="left">
                  零售方式
                </div>
                <div class="right">
                  自提
                </div>
              </div>
              <div class="content">
                <div class="left">
                  零售方式
                </div>
                <div class="right">
                  自提
                </div>
              </div>
              <div class="content">
                <div class="left">
                  零售方式
                </div>
                <div class="right">
                  自提
                </div>
              </div>
              <div class="content">
                <div class="left">
                  工艺
                </div>
                <common-tags type="grey" text="否" />
              </div>
              <div class="content">
                <div class="left">
                  特价
                </div>
                <common-tags type="grey" text="否" />
              </div>
            </div>
          </div>
          <div class="h-0.4 bg-[#E6E6E8] dark:bg-[rgba(230,230,232,0.3)]" />
          <!-- footer -->
          <div class="footer">
            <div class="item">
              <div class="item-left">
                数量
              </div>
              <div class="item-right">
                x1
              </div>
            </div>
            <div class="item">
              <div class="item-left">
                应付金额
              </div>
              <div class="color-[#FF2F2F] font-size-[14px] font-medium dark:color-[#FF624D]">
                4399.00
              </div>
            </div>
          </div>
        </div>
      </template>
    </sale-order-nesting>
  </div>
</template>

<style scoped lang="scss">
.content {
  --uno: 'flex-center-row gap-[8px]';

  .left {
    --uno: 'text-[14px] font-medium text-[#666666] dark:color-[#CBCDD1]';
  }

  .right {
    --uno: 'text-[14px] font-medium text-[#333333] dark:color-[#FFFFFF]';
  }
}

.footer {
  --uno: 'flex-center-between pb-[16px]';

  .item {
    --uno: 'flex-center-row gap-[12px]';

    &-left {
      --uno: 'color-[#666] font-size-[14px] font-medium dark:color-[#CBCDD1]';
    }

    &-right {
      --uno: 'bg-[#F5F5F5] color-[#000] font-size-[14px] font-medium rounded-[24px] border-solid border-1 border-[#E6E6E8] px-[12px] py-[2px] dark:color-[#666666] dark:bg-[rgb(245,245,245,0.5)] dark:border-[rgb(245,245,245,0.5)]';
    }
  }
}
</style>
