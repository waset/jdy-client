<script setup lang="ts">
const props = defineProps<{
  level: string
  leftbtn?: string
  rightbtn: string
}>()
</script>

<template>
  <div class="bg-[#fff] pt-[12px] rounded-3xl text-[14px] mb-[16px]">
    <div class="px-[16px]">
      <div class="flex-start mb-[8px]">
        <div class=" color-[#666]  line-height-[20px] ">
          等级名称
        </div>
        <div class="w-[68px] ml-[8px]">
          <common-level :desc="props.level" />
        </div>
      </div>
      <div class="flex-start mb-[8px]">
        <div class=" color-[#666]  line-height-[20px] ">
          积分范围
        </div>
        <div class="w-[68px] ml-[8px]">
          1231232
        </div>
      </div>
      <div class="flex-start mb-[8px]">
        <div class=" color-[#666]  line-height-[20px] ">
          等级配置
        </div>
        <div class="w-[68px] ml-[8px]">
          1231
        </div>
      </div>
    </div>
    <div class=" py-[10px] flex-around text-[14px] line-height-[20px]  font-semibold bg-[#F3F5FE] rounded-b-[24px]">
      <template v-if="props.leftbtn">
        <div class="color-[#FF2F2F]">
          <div>{{ props.leftbtn }}</div>
        </div>
      </template>

      <template v-if="props.rightbtn">
        <div>
          <div class="color-[#3971F3]">
            {{ props.rightbtn }}
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
