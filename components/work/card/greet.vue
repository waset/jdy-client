<script setup lang="ts">
const getGreeting = () => {
  const hour = new Date().getHours()
  if (hour < 12)
    return '早上好'
  if (hour < 18)
    return '下午好'
  return '晚上好'
}
</script>

<template>
  <div class="mb-[8px]">
    <div class="text-size-xl line-height-[24px] font-semibold color-[#fff]">
      {{ getGreeting() }},孙暴风
    </div>
    <div class="text-size-[14px] line-height-[24px] color-[#fff] mt-[8px]">
      {{ getDayAndWeek() }}
    </div>
  </div>
</template>
