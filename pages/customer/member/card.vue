<script setup lang="ts">
const checked = ref<boolean>(true)
</script>

<template>
  <div>
    <div class="grid-12 px-[16px] py-[12px]">
      <div class="col-4 color-[#fff]">
        <product-manage-company />
      </div>
    </div>
    <div class="blur-bgc rounded-t-[16px] px-[16px] pt-[16px] pb-[120px] h-xl">
      <div class="h-[160px] bg-[#fff] rounded-[8px]" />

      <div class="h-[66px] of-hidden overflow-x-scroll no-scrollbar flex flex-nowrap my-[16px]">
        <div class="w-[100px] h-[66px] bg-[#FFFFFF66] rounded-[8px] mr-[20px] shrink-0" />
        <div class="w-[100px] h-[66px] bg-[#FFFFFF66] rounded-[8px] mr-[20px] shrink-0" />
        <div class="w-[100px] h-[66px] bg-[#FFFFFF66] rounded-[8px] mr-[20px] shrink-0" />
        <div class="w-[100px] h-[66px] bg-[#FFFFFF66] rounded-[8px] mr-[20px] shrink-0" />
        <div class="w-[100px] h-[66px] bg-[#FFFFFF66] rounded-[8px] mr-[20px] shrink-0" />
      </div>

      <div class="flex-start">
        <span class="w-[100px]">启用状态</span> <van-switch v-model="checked" size="24" />
      </div>
      <div class="flex-start">
        <span class="w-[100px]">会员卡主标题</span> <span>郑州金美福珠宝有限公司</span>
      </div>
      <div class="flex-start">
        <span class="w-[100px]">会员卡名称</span> <van-switch v-model="checked" size="24" />
      </div>
      <div class="flex-start">
        <span class="w-[100px]">会员卡描述</span> <van-switch v-model="checked" size="24" />
      </div>

      <div class="flex-start">
        <span class="w-[100px]">启用状态</span> <van-switch v-model="checked" size="24" />
      </div>
    </div>

    <div class="fixed bottom-0 box-border px-[16px] py-[12px] blur-bgc w-full border-t-solid b-t-[1px] border-color-[#E6E6E8] grid-12 ">
      <div class="col-4">
        <common-button-rounded content="取消" color="#fff" />
      </div>
      <div class="col-7 offset-5">
        <common-button-rounded content="保存" />
      </div>
    </div>
  </div>
</template>
