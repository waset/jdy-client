<template>
  <div>
    <div class="grid-12">
      <div class="col-12 lg:col-8 lg:offset-2 sm:col-8 sm:offset-2 grid-12 px-[16px] py-[12px]">
        <div class="col-7  color-[#fff]">
          <product-filter-search />
        </div>
        <div class="col-5 flex-end color-[#fff]">
          <product-filter-senior />
          <span class="bg-[#FF624C] text-size-[12px] rounded-full line-height-[20px] text-center color-[#fff] box-border min-w-[20px] flex justify-center items-center">
            2
          </span>
        </div>
      </div>
      <div class="col-12 lg:col-8 lg:offset-2 sm:col-8 sm:offset-2 text-size-[14px] line-height-[20px] color-[#fff] px-[16px] py-[12px]">
        搜索结果3条
      </div>
    </div>
    <div>
      <div class="px-[16px]">
        <product-manage-fold />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
