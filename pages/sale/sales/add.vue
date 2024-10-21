<script lang="ts" setup>
// 新增销售单
useSeoMeta({
  title: '新增销售单',
})

const goodinfo = ref([
  {
    name: '商品名称',
    num: '',
  },
  {
    name: '配件礼品',
    num: '',
  },
  {
    name: '旧料抵扣',
    num: '',
  },
  {
    name: '优惠金额',
    num: '',
  },
  {
    name: '定金抵扣',
    num: '',
  },
  {
    name: '抵扣积分值',
    num: '',
  },
])
</script>

<template>
  <div>
    <sale-add-base />
    <sale-add-product />
    <sale-add-settlement :goodinfo="goodinfo" />
    <div class="h-[80px]">
      <common-button-bottom confirm-text="开单并打印" cancel-text="仅开单" />
    </div>
  </div>
</template>
