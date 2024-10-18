<script setup lang="ts">
const props = withDefaults(defineProps<{
  // 头像尺寸
  size: number
  // 图片链接
  img?: string
  // 圆角半径
  rounded?: string
}>(), {
  size: 40,
  rounded: '8px',
  img: '',
})
</script>

<template>
  <div>
    <template v-if="props.img">
      <nuxt-img
        :src="props.img"
        class="w-full h-full shadow-[-4px_4px_0px_1px_rgba(56,101,258,.8)]"
        :style="{
          width: `${props.size}px`,
          height: `${props.size}px`,
          borderRadius: props.rounded }"
      />
    </template>
    <template v-else>
      <div class="rounded-[8px] bg-gray-200 shadow-[-4px_4px_0px_1px_rgba(56,101,258,.8)]" :style="{ width: `${props.size}px`, height: `${props.size}px` }" />
    </template>
  </div>
</template>
