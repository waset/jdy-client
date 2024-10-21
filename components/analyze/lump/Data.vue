<script lang="ts" setup>
const list1 = ref([
  {
    name: '浏览次数',
    value: 1232,
  },
  {
    name: '浏览人数',
    value: 1232,
  },
  {
    name: '参与人数',
    value: 1232,
  },
])
const list2 = ref([
  {
    name: '订单数',
    value: 1232,
  },
  {
    name: '应付金额',
    value: 1232,
  },
  {
    name: '退款量',
    value: 1232,
  },
  {
    name: '退款金额',
    value: 1232,
  },
])
</script>

<template>
  <div class="mt-[16px]">
    <common-fold title="活动详情" from-color="rgba(71,126,245,0.6)" to-color="rgba(243,245,254,0.6)">
      <div class="p-[16px] text-[14px]">
        <common-fold :is-collapse="false" title="汇总" to-color="rgba(241,245,254,0.8)" from-color="rgba(241,245,254,0.8)">
          <template #title>
            <div class="flex items-center justify-between">
              <div class="titlelabel">
                数据
              </div>
              <div class="pl-2">
                汇总
              </div>
            </div>
          </template>
          <div class="py-[12px] px-[16px]">
            <div class="grid grid-cols-[1fr_1fr]">
              <template v-for="(item, index) in list1" :key="index">
                <div class="info flex flex-1 items-center mb-2">
                  <div class="text-color-light">
                    {{ item.name }}
                  </div>
                  <div class="text-color pl-2">
                    {{ item.value }}
                  </div>
                </div>
              </template>
            </div>
            <div class="grid grid-cols-[1fr_1fr] pt-2 border-t-[1px] border-t-solid border-t-[rgba(230,230,232,1)]">
              <template v-for="(item, index) in list2" :key="index">
                <div class="info flex flex-1 items-center mb-2">
                  <div class="text-color-light">
                    {{ item.name }}
                  </div>
                  <div class="text-color pl-2">
                    {{ item.value }}
                  </div>
                </div>
              </template>
            </div>
          </div>
        </common-fold>
        <analyze-lump-list />
      </div>
    </common-fold>
  </div>
</template>

<style lang="scss" scoped>
.titlelabel {
  --uno: 'bg-[rgba(186,255,214,1)] text-[rgba(16,102,51,1)] px-[8px] py-[2px] rounded-[8px_0_8px_0]';
}
.info {
  &:nth-child(even) {
    display: flex;
    justify-content: end;
  }
}
</style>
