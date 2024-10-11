<script setup lang="ts">
const props = defineProps<{
  memberInfo: MemberInfo
}>()

const checked = ref(false)

// 用户等级描述
const levelDesc = {
  1: '银卡',
  2: '金卡',
  3: '钻石卡',
}
</script>

<template>
  <div class="flex flex-col px-4 py-2">
    <div class="flex flex-row gap-2 items-center px-4 py-2 bg-#F1F5FE rounded-t-3">
      <div class="check">
        <common-check v-model="checked" :checked="checked" />
      </div>
      <div class="flex flex-row gap-2 items-center">
        <!-- TODO: 合并代码后，这里引入头像组件 -->
        <div class="text-[14px] font-medium">
          头像组件
        </div>
        <div class="text-[14px] font-semibold">
          {{ props.memberInfo.nickname }}
        </div>
      </div>
    </div>
    <div class="info grid grid-rows-3 grid-flow-col gap-2 px-4 pt-3 pb-4 bg-#fff rounded-b-3">
      <div class="flex flex-row gap-2 text-[14px] font-medium">
        <span class="color-#666666">昵称</span>
        <span class="color-#333333">{{ props.memberInfo.nickname }}</span>
      </div>
      <div class="flex flex-row gap-2 text-[14px] font-medium  w-auto">
        <span class="color-#666666">生日</span>
        <span class="color-#333333">{{ props.memberInfo.birthday || '--' }}</span>
      </div>
      <div class="flex flex-row gap-2 text-[14px] font-medium">
        <span class="color-#666666">手机号</span>
        <span class="color-#3971F3">{{ props.memberInfo.phone }}</span>
      </div>
      <div class="flex flex-row gap-2 text-[14px] font-medium">
        <span class="color-#666666">累计购买</span>
        <span class="color-#333333">{{ props.memberInfo.buyCount || '--' }}</span>
      </div>
      <div class="flex flex-row gap-2 text-[14px] font-medium">
        <span class="color-#666666">是否关注公众号</span>
        <common-tags type="grey" :text="props.memberInfo.isFollow === 1 ? '是' : '否'" />
      </div>
      <div class="flex flex-row gap-2 text-[14px] font-medium">
        <span class="color-#666666">等级</span>
        <common-level :desc="levelDesc[props.memberInfo.level]" />
      </div>
    </div>
  </div>
</template>
