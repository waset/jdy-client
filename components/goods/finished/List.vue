<script setup lang="ts">
// 成品列表-详情
const props = defineProps<{
  productList: FinishedProduct
}>()

const goodsStatus = {
  1: '调拨在途',
  2: '在库',
  3: '维修中',
}
</script>

<template>
  <div class=" grid-12">
    <div class="2xl:w-full w-full bg-white rounded-2xl border-solid border-#EFF0F6 col-12 lg:col-8 lg:offset-2 sm:col-12">
      <div class="rounded-6">
        <common-header-theme :title="props.productList.name">
          <common-tags type="orange" :text="goodsStatus[props.productList.status]" />
        </common-header-theme>
        <div class="flex flex-col gap-3 px-4 py-3">
          <template v-if="props.productList.info.length">
            <template v-for="(item, index) in props.productList.info" :key="index">
              <div class="flex flex-row justify-between items-center text-sm font-normal">
                <div class="color-#666666">
                  {{ item.name }}
                </div>
                <div class="color-#333333">
                  {{ item.description }}
                </div>
              </div>
            </template>
          </template>
          <template v-else>
            <common-empty />
          </template>
        </div>
        <div class="grid-12">
          <div class="flex flex-row items-center gap-4 px-4 py-2 col-12 lg:col-8 lg:offset-2 sm:col-12 flex-shrink-1">
            <common-button-rounded content="操作记录" color="#fff" />
            <common-button-rounded content="编辑" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
