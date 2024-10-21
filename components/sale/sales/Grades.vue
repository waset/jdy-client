<script setup lang="ts">
const props = defineProps<{
  memberInfo: MemberInfo
}>()
const checked = defineModel({ type: Boolean, default: false })
// 用户等级描述
const levelDesc = {
  1: '银卡',
  2: '金卡',
  3: '钻石卡',
}

const isSquare = defineModel({ type: Boolean, default: true })
const hasShadow = defineModel({ type: Boolean, default: false })
</script>

<template>
  <div class="flex flex-col px-4 py-2">
    <div class="flex flex-row gap-2 items-center px-4 py-2 bg-[#F1F5FE] rounded-t-3">
      <div class="check">
        <common-check v-model="checked" :checked="checked" />
      </div>
      <div class="flex flex-row gap-2 items-center">
        <common-avatar v-model:is-square="isSquare" v-model:has-shadow="hasShadow" :img="props.memberInfo.img || ''" :size="24" />
        <div class="text-[14px] font-semibold">
          {{ props.memberInfo.nickname }}
        </div>
      </div>
    </div>
    <div class="info grid grid-rows-3 grid-flow-col gap-2 px-4 pt-3 pb-4 bg-[#fff] rounded-b-3" uno-sm="grid-cols-2" uno-md="grid-cols-3">
      <div class="flex flex-row gap-2 text-[14px] font-medium">
        <span class="left">昵称</span>
        <span class="right">{{ props.memberInfo.nickname }}</span>
      </div>
      <div class="flex flex-row gap-2 text-[14px] font-medium w-auto">
        <span class="left">生日</span>
        <span class="right">{{ props.memberInfo.birthday || '--' }}</span>
      </div>
      <div class="flex flex-row gap-2 text-[14px] font-medium">
        <span class="left">手机号</span>
        <span class="color-#3971F3">{{ props.memberInfo.phone }}</span>
      </div>
      <div class="flex flex-row gap-2 text-[14px] font-medium">
        <span class="left">累计购买</span>
        <span class="right">{{ props.memberInfo.buyCount || '--' }}</span>
      </div>
      <div class="flex flex-row gap-2 text-[14px] font-medium">
        <span class="left">是否关注公众号</span>
        <common-tags type="grey" :text="props.memberInfo.isFollow === 1 ? '是' : '否'" />
      </div>
      <div class="flex flex-row gap-2 text-[14px] font-medium">
        <span class="left">等级</span>
        <common-level :desc="levelDesc[props.memberInfo.level]" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.left {
  --uno: 'color-[#666666]';
}

.right {
  --uno: 'color-[#333333]';
}
</style>
