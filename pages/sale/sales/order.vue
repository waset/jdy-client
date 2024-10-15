<script lang="ts" setup>
const nav = ref(['详情', '结算信息', '操作记录'])
const selectNav = ref(0)
function changeNav(i: number) {
  selectNav.value = i
}
const list = ref([
  {
    name: '货品',
    value: '0.00',
  },
  {
    name: '货品',
    value: '0.00',
  },
  {
    name: '货品',
    value: '0.00',
  },
  {
    name: '货品',
    value: '0.00',
  },
])
</script>

<template>
  <div>
    <sale-add-card title="标题" :list="list" />
    <div class="nav">
      <template v-for="(item, index) in nav" :key="index">
        <div class="nav-item" :class="{ active: index === selectNav }" @click="changeNav(index)">
          {{ item }}
        </div>
      </template>
    </div>
    <common-fold title="产品信息">
      <div class="px-4 py-3">
        <common-fold>
          <template #title>
            <div class="flex items-center border-rd-[24px_24px_0_0]">
              <div class="lable text-[#CC00B8] bg-[#FBE2FF] px-[8px] border-rd-[8px_0_8px_0] mr-[4px]">
                成品
              </div>
              <div class="rounded-[10px] w-[32px] h-[32px] bg-[#3865FCCC]" />
              <div class="font-bold pl-[8px]">
                成品
              </div>
            </div>
          </template>
          <div>
            <div class="grid-12 gap-0 lg:gap-8">
              <template v-for="i in 7" :key="i">
                <div class="col-12 md:col-6 lg:col-4 odd:bg-[#eee] md:odd:bg-white rounded-1">
                  <div class="flex justify-between px-[16px] py-2">
                    <div class="w-[50%]">
                      货品
                    </div>
                    <div class="flex-1 text-center">
                      0.00
                    </div>
                  </div>
                </div>
              </template>
            </div>
            <div
              class="flex justify-between items-center mx-[16px] mt-[14px] py-[14px] border-t-[#E6E6E8] border-t-[1px] border-t-solid text-[16px]"
            >
              <div class="flex items-center">
                <div>数量</div>
                <div class="bg-[#E6E6E8] py-[4px] text-[14px] rounded-[14px] px-[12px] m-[12px] w-[30px]">
                  ×2
                </div>
              </div>
              <div>
                实付金额：<span class="text-[#FF2F2F]">0.00</span>
              </div>
            </div>
          </div>
        </common-fold>
      </div>
    </common-fold>
    <sale-add-card title="结算信息" :list="list">

      <template #footer>
        <div class="mx-[16px] mt-[14px] py-[14px] border-t-[#E6E6E8] border-t-[1px] border-t-solid">
          <div class="flex flex-col items-end">
            <div class="text-[16px] font-semibold text-[#FF2F2F]">
              实付金额：0.00
            </div>
            <div class="text-[16px] font-semibold text-[#3971F3]">
              支付方式0.00
            </div>
          </div>
        </div>
      </template>
    </sale-add-card>
    <div class="h-[80px]">
      <common-button-bottom />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  --uno: 'flex justify-around py-5 dark:text-[#fff]';
  .active {
    --uno: 'relative';

    &::after {
      content: '';
      position: absolute;
      bottom: -6px;
      left: 0;
      right: 0;
      height: 4px;
      border-radius: 4px;
      background: linear-gradient(to bottom, #1a6beb, #6ea6ff);
    }
  }
}
</style>
