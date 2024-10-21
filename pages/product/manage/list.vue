<script setup lang="ts">
const searchKey = ref('')
const complate = ref(0)
useSeoMeta({
  title: '货品管理',
})
</script>

<template>
  <div>
    <!-- 筛选 -->
    <product-filter v-model:id="complate" v-model:search="searchKey" />
    <!-- 小卡片组件 -->
    <div class="px-[16px]">
      <product-manage-card />
    </div>
    <product-manage-bottom />
    <common-create />
  </div>
</template>
