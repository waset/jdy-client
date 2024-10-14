<script lang="ts" setup>
const props = defineProps<{
  goodinfo: any[]
}>()
const showPopover = ref(false)
const actions = [
  { text: '微信' },
  { text: '支付宝' },
  { text: '现金' },
]
</script>

<template>
  <div class="pb-[16px]">
    <common-fold title="结算信息">
      <div class="p-[16px]">
        <div class="md:grid grid-cols-[1fr_1fr] gap-[16px] lg:grid-cols-[1fr_1fr_1fr]">
          <template v-for="(item, index) in props.goodinfo" :key="index">
            <div class="flex items-center justify-between pb-[8px]">
              <div class="dark:text-[#FFFFFF] text-[16px] font-semibold">
                {{ item.name }}
              </div>
              <common-frame
                :value="item.num" @update:value="(val:any) => {
                  item.num = val
                }"
              />
            </div>
          </template>
        </div>
        <div class="mt-[14px] py-[14px] border-y-[#E6E6E8] border-y-[1px] border-y-solid">
          <div class="flex flex-col items-end">
            <div class="text-[16px] font-semibold text-[#3971F3]">
              实付金额：0.00
            </div>
            <div class="text-[16px] font-semibold text-[#3971F3]">
              积分合计0.00
            </div>
          </div>
        </div>
        <div class="py-[9px]">
          <label for="remark">备注信息</label>
          <textarea
            id="remark" name="remark"
            class="w-[100%] border-[#CBCDD1] border border-solid rounded-[8px] py-[8px]"
          />
          <div class="flex">
            <div class="text-[#3971F3] text-[14px] px-[8px] py-[2px] bg-[#F1F5FE] rounded-[10px]">
              常用备注
            </div>
          </div>
        </div>
        <div class="text-[#FF2F2F] text-[16px] font-semibold py-[12px]">
          剩余未支付：0.00
        </div>
        <div class="md:grid grid-cols-[1fr_1fr] gap-[16px] lg:grid-cols-[1fr_1fr_1fr]">
          <div class="flex justify-between">
            <van-popover v-model:show="showPopover" :actions="actions">
              <template #reference>
                <div class="refer">
                  <div class="row-left">
                    支付方式
                  </div>
                  <div class="row-right">
                    <van-icon name="arrow-down" />
                  </div>
                </div>
              </template>
            </van-popover>
            <common-Frame />
          </div>
        </div>
      </div>
    </common-fold>
  </div>
</template>

<style lang="scss" scoped>
.refer {
  --uno: 'flex-1 px-12px py-6px border-rd-36px text-[14px] flex-between bg-#fff border-[#e6e6e8] border-1px border-solid dark:bg-[rgba(255,255,255,0.2)] dark:border-[rgba(230,230,232,0.2)]';
}
</style>
