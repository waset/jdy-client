<script setup lang="ts">
// 空页面组件
const props = withDefaults(defineProps<{
  icon?: string
  padding?: string
}>(), {
  icon: 'empty',
  padding: '20px 50px 20px 50px',
})

const imgUrl = props.icon.startsWith('/') ? props.icon : `/images/condition/${props.icon}.png`
</script>

<template>
  <div
    class="flex-center-col flex-grow h-auto"
    :style="{ padding: props.padding }"
  >
    <div class="flex-center-row w-full h-full">
      <nuxt-img :src="imgUrl" class="w-[200px] h-auto" />
    </div>
  </div>
</template>
