<script setup lang="ts">
</script>

<template>
  <!-- 待删除注释：这里是成品页面总入口，目前只做跳转用。样式后期全部清除、再调整 -->
  <div class="flex flex-row gap-20">
    <NuxtLink to="goods/finished/list">
      成品列表
    </NuxtLink>
    <NuxtLink to="/goods/finished/warehouse">
      入库单详情
    </NuxtLink>
    <NuxtLink to="/goods/finished/stocktaking">
      盘点单详情
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">
</style>
