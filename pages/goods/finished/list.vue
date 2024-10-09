<script setup lang="ts">
// 成品列表详情

// 成品列表详情测试使用数据。需删除
const illData: FinishedProduct = {
  name: 'ill11111111111',
  image: '/icons/example.svg',
  status: 1,
  info: [
    {
      name: '所属大类',
      description: 'DB21849878923174918237',
    },
    {
      name: '所属门店',
      description: 'AAAAA金类直售',
    },
    {
      name: '货品名称',
      description: '名称名称',
    },
    {
      name: '材质',
      description: 'DB21849878923174918237',
    },
    {
      name: '成色',
      description: '999999.99',
    },
    {
      name: '品类',
      description: '金属',
    },
    {
      name: '数量',
      description: '4363463462435',
    },
    {
      name: '零售方式',
      description: '线下',
    },
    {
      name: '工费',
      description: '78',
    },
    {
      name: '入网费',
      description: '20',
    },
  ],
}
</script>

<template>
  <goods-finished-list :product-list="illData" />
</template>
