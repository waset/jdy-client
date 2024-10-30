<script setup lang="ts">
const props = defineProps<{
  info: any[]
}>()
</script>

<template>
  <div class="flex flex-col gap-[16px]">
    <common-fold>
      <div class="grid-cols-[1fr] gap-[16px] px-[16px] py-[16px]" uno-lg="grid-cols-[1fr]" uno-md="grid">
        <div class="flex flex-col gap-[12px]">
          <div class="flex-center-between gap-[8px]">
            <span class="color-[#666] font-size-[14px]">门店信息</span>
            <span class="color-[#333] font-size-[14px]">洛阳XXXXXX店 | 0395-xxxxxxxxx</span>
          </div>
          <div class="flex-center-between gap-[8px]">
            <span class="color-[#666] font-size-[14px]">接待人</span>
            <span class="color-[#333] font-size-[14px]">李一一 | 15000000000</span>
          </div>
          <div class="flex-center-between gap-[8px]">
            <span class="color-[#666] font-size-[14px]">会员信息</span>
            <span class="color-[#333] font-size-[14px]">懒羊羊1500xxxxxx</span>
          </div>
        </div>
      </div>
    </common-fold>

    <common-fold>
      <div class="grid-cols-[1fr] gap-[16px] px-[16px] py-[16px]" uno-lg="grid-cols-[1fr]" uno-md="grid">
        <div class="flex flex-col gap-[12px]">
          <template v-for="(item, index) in props.info" :key="index">
            <div class="flex items-center justify-between">
              <div class="color-[#333] dark:color-[#FFFFFF] text-[16px] font-medium">
                {{ item.name }}
              </div>
              <common-frame
                v-model="item.num"
              />
            </div>
          </template>
          <div class="flex-center-between gap-[8px]">
            <span class="color-[#666] font-size-[14px]">取货方式</span>
          </div>
        </div>
      </div>
    </common-fold>
  </div>
</template>

<style scoped lang="scss">
</style>
