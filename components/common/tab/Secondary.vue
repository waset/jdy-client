<script setup lang="ts">
// 二级tab切换
interface Options {
  label: string
  value: number
  count?: number
  disabled?: boolean
}

const props = defineProps<{
  options: Options[]
  currentSelected: number
}>()

const emits = defineEmits<{
  'update:current': [id: number]
  'change': [id: number]
}>()
// 点击切换
function handleClick(id: number) {
  emits('update:current', id)
  emits('change', id)
}
</script>

<template>
  <div class="flex flex-row justify-between gap-1 bg-#f1f5fe border-solid border-1 border-#E6E6E8 rounded-24px">
    <template v-for="(item, index) in props.options" :key="index">
      <div
        class="flex flex-row flex-1 justify-center items-center px-4 py-2 w-auto text-3.5 text-#666666 rounded-24px"
        :style="{ color: index === props.currentSelected ? '#3971F3' : '#666666', background: index === props.currentSelected ? '#FFFFFF' : '', fontWeight: index === props.currentSelected ? 'bold' : 'normal' }"
        @click="handleClick(index)"
      >
        <span>
          {{ item.label }}
        </span>
        <template v-if="item.count">
          <span>
            <!-- 插入数量 -->
            {{ item.count || 0 }}
          </span>
        </template>
      </div>
    </template>
  </div>
</template>
