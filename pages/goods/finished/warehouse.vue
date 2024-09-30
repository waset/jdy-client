<script setup lang="ts">
// 入库单详情

// 测试使用数据。需删除
const testData: WarehouseReceipt = {
  operator: 'admin',
  number: '123456789',
  type: 1,
  status: 1,
  totalCount: 1,
  totalPrice: 200,
  totalWeight: 18,
  NetworkAccessFee: 30,
  remark: '',
  createTime: '2022-01-01 12:00:00',
  completeTime: '2022-01-01 12:00:00',
}
</script>

<template>
  <div class="storage">
    <goods-finished-entry :product-storage-info="testData" />
  </div>
</template>

<style scoped lang="scss">
</style>
