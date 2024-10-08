<script setup lang="ts">
// 入库单详情
const props = defineProps<{
  productStorageInfo: WarehouseReceipt
  inventorySheet: InventorySheet
}>()

// 入库单状态
const statusDesc = {
  1: '已完成',
  2: '已撤销',
  3: '草稿',
}

// 盘点单tab切换选项
const inventoryOptions = [
  {
    label: '应盘',
    count: props.inventorySheet.shouldCount,
    value: 1,
  },
  {
    label: '实盘',
    count: props.inventorySheet.shouldCount,
    value: 2,
  },
  {
    label: '盘亏',
    count: props.inventorySheet.lossCount,
    value: 3,
  },
  {
    label: '盘盈',
    count: props.inventorySheet.profitCount,
    value: 4,
  },
]

// 当前选择的盘点类型
const currentSelected = ref(1)

// 步骤条
const step = [
  {
    title: '盘点中',
    subs: 1,
  },
  {
    title: '盘点结束',
    subs: 2,
  },
  {
    title: '导出盘点差异',
    subs: 3,
  },
  {
    title: '已完成',
    subs: 4,
  },
]

// 盘点单详情状态--待处理、来源暂时不太确定，暂用：testInventory.InventoryStatus === 2 来代替
// testInventory.InventoryStatus === 3/4，subs = 1
// testInventory.InventoryStatus === 2，subs = 3
// testInventory.InventoryStatus === 1，subs = 4
const active = computed(() => {
  const progress = props.inventorySheet.InventoryStatus === 1 ? 4 : (props.inventorySheet.InventoryStatus === 2 ? 3 : 1)
  return progress
})
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="rounded-6 bg-white w-auto top">
      <common-header-gradient title="入库单详情" />
      <div class="flex flex-col gap-4 px-4 py-4">
        <div class="operation-information gap-3">
          <div class="flex flex-row gap-3 items-center text-sm font-normal">
            <div class="color-#666666">
              操作人
            </div>
            <div class="color-#333333">
              {{ props.productStorageInfo.operator }}
            </div>
          </div>
          <div class="flex flex-row gap-3 items-center text-sm font-normal">
            <div class="color-#666666">
              入库单号
            </div>
            <div class="color-#333333">
              {{ props.productStorageInfo.num }}
            </div>
          </div>
          <div class="flex flex-row gap-3 items-center text-sm font-normal">
            <div class="color-#666666">
              状态
            </div>
            <div class="color-#333333">
              <common-tags type="green" :text="statusDesc[props.productStorageInfo.status]" />
            </div>
          </div>
          <div class="flex flex-row gap-3 items-center text-sm font-normal">
            <div class="color-#666666">
              类型
            </div>
            <div class="color-#333333">
              {{ props.productStorageInfo.type }}
            </div>
          </div>
        </div>
        <div class="h-0.5 bg-#E6E6E8" />
        <div class="product-information">
          <div class="flex flex-row gap-3 items-center text-sm font-normal">
            <div class="color-#666666">
              总件数
            </div>
            <div class="color-#333333">
              {{ props.productStorageInfo.totalCount }}
            </div>
          </div>
          <div class="flex flex-row gap-3 items-center text-sm font-normal">
            <div class="color-#666666">
              总金重
            </div>
            <div class="color-#333333">
              {{ props.productStorageInfo.totalWeight }}
            </div>
          </div>
          <div class="flex flex-row gap-3 items-center text-sm font-normal">
            <div class="color-#666666">
              总标价
            </div>
            <div class="color-#333333">
              {{ props.productStorageInfo.totalPrice }}
            </div>
          </div>
          <div class="flex flex-row gap-3 items-center text-sm font-normal">
            <div class="color-#666666">
              总入网费
            </div>
            <div class="color-#333333">
              {{ props.productStorageInfo.networkAccessFee }}
            </div>
          </div>
        </div>
        <div class="h-0.5 bg-#E6E6E8" />
        <div class="other-information">
          <div class="flex flex-row gap-3 items-center text-sm font-normal">
            <div class="color-#666666">
              备注
            </div>
            <div class="color-#333333">
              {{ props.productStorageInfo.remark }}
            </div>
          </div>
          <div class="flex flex-row gap-3 items-center text-sm font-normal">
            <div class="color-#666666">
              创建时间
            </div>
            <div class="color-#333333">
              {{ props.productStorageInfo.createTime }}
            </div>
          </div>
          <div class="flex flex-row gap-3 items-center text-sm font-normal">
            <div class="color-#666666">
              完成时间
            </div>
            <div class="color-#333333">
              {{ props.productStorageInfo.completeTime }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="info flex flex-col gap-4 rounded-6 bg-#99f6e4 w-auto px-4 py-4">
      <div class="flex flex-col gap-3">
        <common-tab-secondary v-model:current="currentSelected" :options="inventoryOptions" :current-selected="currentSelected" />
        <common-step :description="step" :active-index="active" />
      </div>
      <div class="color-#333333 font-normal text-14px">
        共{{ props.inventorySheet.shouldCount || 0 }}条数据
      </div>
    </div>
  </div>
</template>
