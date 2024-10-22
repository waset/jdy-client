<script lang="ts" setup>
useSeoMeta({
  title: '添加拼团',
})
const selected = ref(0)
const statelist = ref(['上架', '下架', '已结束'])
</script>

<template>
  <div class="px-[16px]">
    <analyze-lump-state v-model="selected" :statelist="statelist" />
    <analyze-lump-edit />
    <common-button-bottom confirm-text="保存" />
  </div>
</template>
