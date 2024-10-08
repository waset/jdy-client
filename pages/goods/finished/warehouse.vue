<script setup lang="ts">
// 入库单详情

// 入库单详情测试使用数据。需删除
const testData: WarehouseReceipt = {
  operator: 'admin',
  num: '123456789',
  type: 1,
  status: 1,
  totalCount: 1,
  totalPrice: 200,
  totalWeight: 18,
  networkAccessFee: 30,
  remark: '备注啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
  createTime: '2022-01-01 12:00:00',
  completeTime: '2022-01-01 12:00:00',
}

// 盘点单详情
const testInventory: InventorySheet = {
  num: '1111111233213',
  store: '测试门店',
  scope: '全部商品',
  wareHouse: '测试仓库',
  brand: '测试品牌',
  operator: 'li',
  supervisor: 'wang',
  shouldCount: 250,
  lossCount: 17,
  profitCount: 50,
  createTime: '2022-01-01 12:00:00',
  InventoryStatus: 3,
}
</script>

<template>
  <div class="storage">
    <goods-finished-entry :product-storage-info="testData" :inventory-sheet="testInventory" />
  </div>
</template>
