<script setup lang="ts">
// 步骤进度条
interface StepProps {
  title: string
  subs: number
}

const props = defineProps<{
  description: StepProps[]
  activeIndex: number
}>()
</script>

<template>
  <div>
    <div class="flex flex-row justify-between px-4 py-0 gap-1">
      <template v-for="(item, index) in props.description" :key="index">
        <div class="flex flex-col gap-1 items-center justify-center">
          <div class="w-10px h-10px rounded-full" :style="{ background: index < props.activeIndex ? 'linear-gradient(180deg,#1A6BEB,#6EA6FF)' : '#909399' }" />
          <div class="color-#808089 font-normal text-12px">
            {{ item.title }}
          </div>
        </div>
        <div v-if="index !== props.description.length - 1" class="h-0.25 flex-1" :style="{ background: index < props.activeIndex - 1 ? '#3C9CFF' : '#909399' }" />
      </template>
    </div>
  </div>
</template>
