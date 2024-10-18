<script setup lang="ts">
definePageMeta({
  layout: 'table',
})
useSeoMeta({
  title: '工作台',
})

const list = ref([{ title: '货品管理', children: [{ title: '成品', enter: [{ name: '成品列表', path: '/product/manage/list' }, { name: '成品列表', path: '/product/manage/list' }] }] }])
</script>

<template>
  <div>
    <div class="color-[#fff] grid-12 px-[16px] py-[12px]">
      <div class="col-4 " uno-sm="col-2 offset-2">
        <product-manage-company />
      </div>
      <div class="col-7 offset-5" uno-sm="col-5  offset-5">
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
