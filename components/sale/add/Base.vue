<template>
  <div class="pb-[16px]">
    <common-fold title="基础信息">
      <div class="p-[16px] md:grid grid-cols-[1fr_1fr] gap-[16px] lg:grid-cols-[1fr_1fr_1fr]">
        <div>
          <div class="inplabel">
            来源
          </div>
          <common-frame name="自然客流" :is-icon="true" />
        </div>
        <div>
          <div class="inplabel">
            收银员
          </div>
          <common-frame name="自然客流" :is-disabled="true" :is-icon="true" />
        </div>
        <div>
          <div class="inplabel">
            销售时间
          </div>
          <common-frame :disabled-style="true" tip="2024-04-08 12:10:24" :is-icon="true" />
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
