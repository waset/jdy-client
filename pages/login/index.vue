<script setup lang="ts">
definePageMeta({
  layout: 'table',
})
useSeoMeta({
  title: '登录注册',
})
</script>

<template>
  <div class="grid-12">
    <div class="px-[16px] pt-[24px] col-12" uno-sm="col-6 offset-3" uno-lg="offset-4 col-4">
      <login-tips />
      <login-info />
    </div>
  </div>
</template>
