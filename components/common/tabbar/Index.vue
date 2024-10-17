<script setup lang="ts">
const props = withDefaults(defineProps<{
  text?: string
}>(), {
  text: 'todo',
})
const menuItems = [
  { key: 'todo', name: '我的待办', route: '/work/table/todos', activeIcon: 'jdy:todo-select', inactiveIcon: 'jdy:todo-not' },
  { key: 'table', name: '工作台', route: '/work/table', activeIcon: 'jdy:table-select', inactiveIcon: 'jdy:table-not' },
  { key: 'userinfo', name: '个人中心', route: '/my/user', activeIcon: 'jdy:userinfo-select', inactiveIcon: 'jdy:userinfo-not' },
]
</script>

<template>
  <div class="fixed bottom-0 left-0 flex-center-row w-full" uno-lg="h-full w-auto">
    <div class="w-full bg-[#F8FAFF] dark:bg-[#515862] text-[12px] pt-[12px] pb-[4px] px-[40px] box-border flex-between" uno-lg="w-auto px-8px py-12px flex-center-col rounded-8px">
      <div v-for="item in menuItems" :key="item.key">
        <nuxt-link :to="item.route">
          <div class="flex-center-col sm:py-[10px]">
            <div class="wh-[24px] mb-[4px]">
              <icon :name="props.text === item.key ? item.activeIcon : item.inactiveIcon" size="24" />
            </div>
            <div class="line-height-[20px]" :class="{ 'text-active': props.text === item.key, 'text-inactive': props.text !== item.key }">
              {{ item.name }}
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .text-active {
  color: #3971f3;
}
.text-inactive {
  color: #333;
}
</style>
