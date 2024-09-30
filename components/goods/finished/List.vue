<script setup lang="ts">
// 成品列表-详情
const props = defineProps<{
  productList: FinishedProduct
}>()

// const goodsStatus = [
//   {
//     value: 1,
//     label: '调拨在途',
//   },
//   {
//     value: 2,
//     label: '待入库',
//   },
// ]
</script>

<template>
  <div class=" grid-12">
    <div class="2xl:w-full w-full bg-white rounded-2xl border-solid border-#EFF0F6 col-12 lg:col-8 lg:offset-2 sm:col-12">
      <div class="rounded-2xl">
        <div class="px-4 py-2 rounded-t-2xl info">
          <common-header-theme :title="props.productList.name" :img-url="props.productList.image" :is-img="true" :is-tag="true" tag-color="#FFF4CD" tag-text="调拨在途" tag-text-color="#DD9200" />
        </div>

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
            <common-button-rounded content="操作记录" color="#fff" content-color="#3971F3" />
            <common-button-rounded content="编辑" content-color="#fff" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.info {
  background: linear-gradient(to right, #477ef500 0%, #82d0fa 80%);
}
</style>
