<script lang="ts" setup>
useSeoMeta({
  title: '添加拼团',
})
const selected = ref(0)
const statelist = ref(['上架', '下架', '已结束'])
</script>

<template>
  <div>
    <div class="px-[16px] sm:grid-12">
      <div class="sm:col-span-10 offset-1">
        <analyze-lump-state v-model="selected" :statelist="statelist" />
        <analyze-lump-edit />
      </div>
      <common-button-bottom confirm-text="保存" />
    </div>
  </div>
</template>
