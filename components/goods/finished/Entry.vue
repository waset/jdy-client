<script setup lang="ts">
// 入库单详情
const props = defineProps<{
  productStorageInfo: WarehouseReceipt
}>()
</script>

<template>
  <div>
    <common-header-gradient title="入库单详情" />
    <div class="flex flex-row justify-between items-center text-sm font-normal">
      <div class="color-#666666">
        操作人
      </div>
      <div class="color-#333333">
        {{ props.productStorageInfo.operator }}
      </div>
    </div>
  </div>
</template>
