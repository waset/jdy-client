<script setup lang="ts">
// 销售明细页面

// 测试数据。需删除替换
const saleList: SalesSlip[] = [
  {
    num: 'CZ-32493974',
    store: {
      name: '青青草原一号店',
      salesVolume: 100000,
    },
    member: {
      nickname: '张三',
      phone: '13800138000',
      level: 2,
    },
    mainSalesman: '李四',
    goodsInfo: '足金挂坠',
    quantity: 55789,
    realAmount: 25000,
    goodsAmount: 15000,
    discountAmount: '100',
    oldDiscountAmount: '20',
    integral: '32',
    openType: '线下开单',
    createTime: '2021-11-11 11:11:11',
    slipStatus: 2,
  },
]

const options = [
  {
    label: '销售明细',
    value: 1,
  },
  {
    label: '销售明细图',
    value: 2,
  },
]

const currentSelected = ref(1)
</script>

<template>
  <div class="grid-12">
    <div class="flex flex-col gap-[16px] px-[16px] py-[16px] col-12" uno-lg="col-8 offset-2" uno-sm="col-12">
      <!-- header -->
      <!-- 搜索 -->
      <div class="flex flex-row gap-[12px]">
        <product-filter-search class="color-[#fff] flex-1" />
        <product-filter-senior class="color-[#fff]" />
      </div>
      <!-- 切换tab -->
      <common-tab-secondary v-model:current-selected="currentSelected" :options="options" />
      <!-- content -->
      <sale-sales-cards :info="saleList" />
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>
