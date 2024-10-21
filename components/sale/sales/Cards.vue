<script setup lang="ts">
// 销售列表-卡片
const props = defineProps<{
  info: SalesSlip[]
}>()

const handleClick = async () => {
  // 跳转到详情页
  // this.$router.push({name: 'SalesOrder', params: {id: item.id}})
  await navigateTo('/sale/sales/order')
}
</script>

<template>
  <div class="flex flex-col gap-[12px] bg-[rgba(255,255,255,0.8)] rounded-[24px] gap-4 border-solid border-1 border-[#EFF0F6] overflow-hidden">
    <template v-for="(item, index) in props.info" :key="index">
      <!-- header -->
      <common-header-theme :title="item.num" color="#333">
        <common-tags :text="item.openType" />
      </common-header-theme>
      <!-- info -->
      <div class="info">
        <div class="part">
          <span class="part-left">所属门店</span>
          <span class="part-right">{{ item.store.name }}</span>
        </div>
        <div class="part">
          <span class="part-left">会员</span>
          <span class="part-right">{{ item.member.nickname }}</span>
        </div>
        <div class="part">
          <span class="part-left">会员手机</span>
          <span class="part-right">{{ item.member.phone }}</span>
        </div>
      </div>
      <!-- footer -->
      <div class="operation">
        <!-- 操作按钮 -->
        <div class="flex-center-row bg-[#F3F5FE] rounded-b-[24px] px-[16px] py-[8px] dark:bg-[rgba(243,245,254,0.1)]">
          <div class="info color-[#3971F3] text-size-[14px] font-semibold dark:color-[#fff]" @click="handleClick">
            查看详情
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.info {
  --uno: 'flex flex-col gap-[12px] px-[16px]';

  .part {
    --uno: 'flex-center-between';
    &-left {
      --uno: 'text-size-[14px] color-[#666] dark:color-[#CBCDD1]';
    }
    &-right {
      --uno: 'text-size-[14px] color-[#333] dark:color-[#fff]';
    }
  }
}
</style>
