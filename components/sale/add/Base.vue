<script lang="ts" setup>
const handleClick = async () => {
  // 跳转到搜索商品页
  await navigateTo('/sale/search/member')
}
</script>

<template>
  <div class="px-[16px]">
    <common-fold title="基础信息">
      <div class="p-[16px] w-auto md:grid grid-cols-[1fr_1fr] gap-[16px] lg:grid-cols-[1fr_1fr_1fr]">
        <div class="flex flex-col gap-[12px]">
          <div class="inplabel">
            会员
          </div>
          <div class="flex flex-row items-center gap-[12px]">
            <common-frame name="自然客流" :is-icon="true" heigh="40px" class="flex-1">
              <template #left>
                <common-avatar :size="20" rounded="60px" :has-shadow="false" />
              </template>
            </common-frame>
            <div>
              <sale-sales-plusminus @button-click="handleClick()" />
            </div>
          </div>
        </div>
        <div>
          <div class="inplabel">
            来源
          </div>
          <common-frame name="自然客流" :is-icon="true" heigh="40px" />
        </div>
        <div>
          <div class="inplabel">
            收银员
          </div>
          <common-frame name="自然客流" :is-disabled="true" :is-icon="true" heigh="40px" />
        </div>
        <div>
          <div class="inplabel">
            销售时间
          </div>
          <common-frame :disabled-style="true" tip="2024-04-08 12:10:24" :is-icon="true" heigh="40px" />
        </div>
      </div>
    </common-fold>
  </div>
</template>

<style lang="scss" scoped>
.inplabel {
  --uno: 'pt-[12px] pb-[8px] dark:text-[#FFFFFF]';
}
</style>
