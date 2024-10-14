<template>
  <div>
    <div class="px-[16px] pt-[48px]">
      <div class="absolute right-0 top-[-10px]">
        <nuxt-img src="/banner/work.png" alt="" width="217" height="211" />
      </div>
      <div class=" top-[-66px] sm:top-[0] sm:right-[240px] sm:flex-center-col sm:items-end">
        <div class="text-size-xl line-height-[24px] font-semibold color-[#fff]">
          早上好,孙暴风
        </div>
        <div class="text-size-[14px] line-height-[24px] color-[#fff] mt-[8px]">
          早上好,孙暴风
        </div>
      </div>
      <div class="mt-[8px] mb-[16px]">
        <common-dark />
      </div>

      <div>
        <work-card-digitalization left-title="工作详情" right-title="今日数据" />
      </div>
      <div class="mt-[16px]">
        <work-card-digitalization left-title="工作目标" />
      </div>
      <common-tabbar />
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
