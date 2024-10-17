<script setup lang="ts">
const props = defineProps<{
  text: string
}>()
</script>

<template>
  <div
    class="fixed bottom-0 left-0 flex-center-row w-full"
    uno-lg=" h-full w-auto">
    <div

      class="w-full bg-[#F8FAFF] dark:bg-[#515862] text-[12px] pt-[12px] pb-[4px] px-[40px] box-border flex-between"
      uno-lg="w-auto px-8px py-12px flex-center-col rounded-8px "
    >
      <NuxtLink to="/work/table/todos">
        <div class="flex-center-col">
          <div class="wh-[24px]  mb-[4px]">
            <template v-if="props.text === 'todo'">
              <icon name="jdy:todo-select" size="24" />
            </template>
            <template v-else>
              <icon name="jdy:todo-not" size="24" />
            </template>
          </div>
          <div class="line-height-[20px] dark:color-[#FFF] color-[#333]" :style="{ color: props.text === 'todo' ? '#3971F3' : '' }">
            我的待办
          </div>
        </div>
      </NuxtLink>
      <NuxtLink to="/work/table">
        <div class="flex-center-col" uno-lg="py-18px">
          <div class="wh-[24px]  mb-[4px]">
            <template v-if="props.text === 'table'">
              <icon name="jdy:table-select" size="24" />
            </template>
            <template v-else>
              <icon name="jdy:table-not" size="24" />
            </template>
          </div>
          <div class="line-height-[20px] color-[#333] dark:color-[#FFF]" :style="{ color: props.text === 'table' ? '#3971F3' : '' }">
            工作台
          </div>
        </div>
      </NuxtLink>
      <NuxtLink to="/my/user">
        <div class="flex-center-col">
          <div class="wh-[24px]  mb-[4px]">
            <template v-if="props.text === 'userinfo'">
              <icon name="jdy:userinfo-select" size="24" />
            </template>
            <template v-else>
              <icon name="jdy:userinfo-not" size="24" />
            </template>
          </div>
          <div class="line-height-[20px] dark:color-[#FFF] color-[#333]" :style="{ color: props.text === 'userinfo' ? '#3971F3' : '' }">
            个人中心
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
