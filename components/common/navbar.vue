<script setup lang="ts">
const text = defineModel('text')
</script>

<template>
  <div class="navbox">
    <div class=" color-white">
      <van-row justify="space-between">
        <van-col span="8" class="text-size-[24px]">
          <van-icon name="arrow-left" />
          <van-icon name="cross" class="ml-[16px]" />
        </van-col>
        <van-col span="8" class="title">
          <div> {{ text }}</div>
        </van-col>
        <van-col span="8">
          <common-dark />
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbox {
  --uno: 'p-4 box-border pos-fixed top-0 w-full';
}

.title {
  --uno: 'text-center font-medium text-size-[17px] line-height-[23.8px]';
}
</style>
