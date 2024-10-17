<script setup lang="ts">
definePageMeta({
  layout: 'table',
})

const demoList = ref< { title: string, number: number }[]>([{ title: '销售金额', number: 100 }, { title: '销售件数', number: 100 }, { title: '旧货抵扣', number: 100 }, { title: '退货金额', number: 100 },
])
const demoListt = ref< { title: string, number: number }[]>([{ title: '销售金额', number: 100 }, { title: '销售金额', number: 100 }, { title: '销售件数', number: 100 }, { title: '旧货抵扣', number: 100 }, { title: '退货金额', number: 100 },
])
</script>

<template>
  <div class="grid-12 pb-[120px]">
    <div class="col-12 sm:col-8 sm:offset-2  px-[16px] pt-[48px] pos-relative">
      <div class="absolute right-0 top-[-10px] ">
        <nuxt-img src="/images/banner/work.png" class="w-[200px]" />
      </div>
      <div class=" ">
        <div class="text-size-xl line-height-[24px] font-semibold color-[#fff]">
          早上好,孙暴风
        </div>
        <div class="text-size-[14px] line-height-[24px] color-[#fff] mt-[8px]">
          {{ nowtime }}
        </div>
      </div>
      <div class="mt-[8px] mb-[16px]">
        <common-dark />
      </div>
      <div>
        <work-card-digitalization left-title="boss看板" />
      </div>
      <div class="mt-[16px] grid-12 gap-[8px]">
        <div class="py-[15px] px-[9px] rounded-[16px] blur-bgc flex-center-row col-4">
          <icon name="jdy:product-target" size="30" />
          <span class="text-[14px] line-height-[24px] color-[#428EFF] ml-[8px]">销售目标</span>
        </div>
        <div class="py-[15px] px-[9px] rounded-[16px] blur-bgc flex-center-row col-4">
          <icon name="jdy:product-neworder" size="30" />
          <span class="text-[14px] line-height-[24px] color-[#428EFF] ml-[8px]">门店任务</span>
        </div>
        <div class="py-[15px] px-[9px] rounded-[16px] blur-bgc flex-center-row col-4">
          <icon name="jdy:product-newuser" size="30" />
          <span class="text-[14px] line-height-[24px] color-[#428EFF] ml-[8px]">新增会员</span>
        </div>
      </div>

      <div class="mt-[16px]">
        <work-card-information left-title="今日销售" :list="demoList" />
      </div>
      <div class="mt-[16px]">
        <work-card-information left-title="销售目标" :list="demoList" />
      </div>
      <div class="mt-[16px]">
        <work-card-information left-title="今日销售" :list="demoList" />
      </div>
      <div class="mt-[16px]">
        <work-card-information left-title="会员数据" :list="demoListt" rb-text="查看员工排行" />
      </div>
    </div>

    <common-tabbar text="todo" />
  </div>
</template>

<style scoped lang="scss">

</style>
