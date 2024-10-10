<script lang="ts" setup>
const imgs = defineModel<string>('img')
const text = defineModel<string>('text')
const num = defineModel<number>('num')
</script>

<template>
  <div class="">
    <div class="flex-start">
      <div>
        <img :src="imgs" class="wh-[30px] mr-2">
      </div>
      <div>
        <div class="color-[#46A6FF] dark:color-[#fff] text-size-xs line-height-[24px]">
          {{ text }}
        </div>
        <div class="color-[#007FF4] dark:color-[#fff] text-size-xl line-height-[24px]">
          {{ num }}
        </div>
      </div>
    </div>
  </div>
</template>
