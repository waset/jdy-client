<script setup lang="ts">
definePageMeta({
  layout: 'table',
})
useSeoMeta({
  title: '工作台',
})
interface IList {
  title: string
  children: Array<{ title: string, enter: Array<{ name: string, path: string }> }>
}
const list = ref<IList[]>([{ title: '货品管理', children: [{ title: '成品', enter: [{ name: '成品列表', path: '/product/manage/list' }, { name: '成品列表', path: '/product/manage/list' }] }] }])
</script>

<template>
  <div>
    <div class="color-[#fff] grid-12 px-[16px] py-[12px]">
      <div class="col-4" uno-sm="col-3 offset-1" uno-lg="col-2 offset-2" uno-xl="col-1 offset-3">
        <product-manage-company />
      </div>
      <div class="col-7 offset-5" uno-sm="col-6 offset-5" uno-lg="col-5 offset-5" uno-xl="col-4 offset-5">
        <product-filter-search />
      </div>
    </div>
    <template v-for="(item, index) in list" :key="index">
      <common-coll>
        <template #title>
          <div>{{ item.title }}</div>
        </template>
        <template #content>
          <div class="">
            <work-card-enter :content="item.children" />
          </div>
        </template>
      </common-coll>
    </template>

    <common-tabbar text="table" />
  </div>
</template>
