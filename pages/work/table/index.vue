<template>
  <div>
    <common-navbar />
    <div class="color-[#fff] grid-12 px-[16px] py-[12px]">
      <div class="col-4 " un-sm="col-2 offset-2">
        <product-manage-company />
      </div>
      <div class="col-7 offset-5" un-sm="col-5  offset-5">
        <product-filter-search />
      </div>
    </div>
    <div>
      <!--  折叠组件 -->
      <common-coll>
        <template #title>
          <div>销售管理</div>
        </template>
        <template #content>
          <div class="">
            <work-card-enter />
          </div>
        </template>
      </common-coll>
    </div>

    <common-tabbar />
  </div>
</template>
