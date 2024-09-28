<script setup lang="ts">
// 父组件调用时，再取消这一段的备注
// const props = defineProps<{
//   productList: FinishedProduct
// }>()

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
  <div class="2xl:w-full w-full bg-white rounded-2xl border-solid border-#EFF0F6">
    <div class="rounded-2xl">
      <div class="px-4 py-2 rounded-t-2xl info">
        <CommonThemeColorHeader :title="illData.name" :img-url="illData.image" :is-img="true" :is-tag="true" tag-color="#FFF4CD" tag-text="调拨在途" tag-text-color="#DD9200" />
      </div>
      <div class="flex flex-col gap-3 px-4 py-3">
        <template v-if="illData.info.length">
          <template v-for="(item, index) in illData.info" :key="index">
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
          <!-- icon="/example.svg" -->
          <CommonEmpty />
        </template>
      </div>
      <div class="flex flex-row  items-center gap-4 px-4 py-2">
        <CommonButton content="操作记录" color="#fff" content-color="#3971F3" />
        <CommonButton content="编辑" content-color="#fff" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.info {
  background: linear-gradient(to right, #477ef500 0%, #82d0fa 80%);
}
</style>
