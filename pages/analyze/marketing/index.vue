<script lang="ts" setup>
useSeoMeta({
  title: '营销分析',
})
const data = ref([
  {
    name: '旧料总件数',
    num: 43244,
  },
  {
    name: '旧料总重数',
    num: 43244,
  },
  {
    name: '总入网费',
    num: 43244,
  },
  {
    name: '总标签价',
    num: 43244,
  },
  {
    name: '总重量',
    num: 43244,
  },
])
</script>

<template>
  <div class="px-[16px]">
    <common-dark />
    <analyze-marketing-stat :data="data" />
    <analyze-marketing-list />
  </div>
</template>

<style lang="scss" scoped>

</style>
