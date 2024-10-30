<script setup lang="ts">
// 测试数据。待删除
const repairInfo = ref([
  {
    name: '状态',
    desc: '门店已收货',
  },
  {
    name: '问题描述',
    desc: '项链断开',
  },
  {
    name: '维修费',
    desc: '12312',
  },
  {
    name: '维修成本',
    desc: '99',
  },
])
</script>

<template>
  <div>
    <sale-repair-info :info="repairInfo" />
  </div>
</template>

<style scoped lang="scss">
</style>
