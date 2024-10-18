<script setup lang="ts">
useSeoMeta({
  title: '个人中心',
})
</script>

<template>
  <div>
    <div class="px-[16px] py-[24px]">
      <my-user-userinfo />
    </div>
    <div class="px-[16px] ">
      <my-user-option />
    </div>
    <common-tabbar text="userinfo" />
  </div>
</template>
