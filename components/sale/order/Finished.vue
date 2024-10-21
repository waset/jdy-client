<script setup lang="ts">
// 销售明细_产品信息_成品

// 折叠菜单
</script>

<template>
  <div>
    <sale-order-nesting title="成品">
      <template #info>
        <div class="flex flex-col gap-[12px] px-[16px]">
          <div class="flex flex-row gap-[12px]">
            <common-avatar :size="40" />
            <div class="grid grid-rows-4 grid-flow-col w-full place-items-start gap-y-[12px] gap-x-[auto]">
              <div class="content">
                <div class="left">
                  条码
                </div>
                <div class="text-[14px] font-medium text-[#3971F3]">
                  s123901287
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
          <div class="h-0.5 bg-[#E6E6E8]" />
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
              <div class="color-[#FF2F2F] font-size-[14px] font-medium">
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
    --uno: 'text-[14px] font-medium text-[#666666]';
  }

  .right {
    --uno: 'text-[14px] font-medium text-[#333333]';
  }
}

.footer {
  --uno: 'flex-center-between pb-[16px]';

  .item {
    --uno: 'flex-center-row gap-[12px]';

    &-left {
      --uno: 'color-[#666] font-size-[14px] font-medium';
    }

    &-right {
      --uno: 'bg-[#F5F5F5] color-[#808089] font-size-[14px] font-medium rounded-[24px] border-solid border-1 border-[#E6E6E8] px-[12px] py-[2px]';
    }
  }
}
</style>
