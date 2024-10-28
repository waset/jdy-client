<script setup lang="ts">
const searchKey = defineModel('searchKey')

const subsearch = () => {
}
</script>

<template>
  <div>
    <div class="py-[6px] px-[12px] bg-[#FFFFFF66] border-rd-full text-size-[20px]  shadow-lg grid-12">
      <div class="col-1">
        <van-icon name="search" />
      </div>
      <div class="text-size-[14px] line-height-[20px] col-9 offset-2">
        <input
          v-model="searchKey" type="text" class="bg-transparent border-0 placeholder-text-[#fff] w-full" placeholder="搜索"
          @keyup.enter="subsearch()">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
