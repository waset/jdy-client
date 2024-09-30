<script setup lang="ts">
const wh = defineModel('wh')
</script>

<template>
  <div class="bg-coolGray rounded-[4px] avatar" :style="{ width: `${wh}px`, height: `${wh}px` }" />
</template>

<style lang="scss" scoped>
.avatar {
  position: relative;
  transform-style: preserve-3d;
}
.avatar::before {
  content: '';
  position: absolute;
  bottom: -4px;
  left: -4px;
  z-index: 0;
  width: 100%;
  height: 100%;
  background-color: #5c82fd;
  transform: translateZ(-10px);
  border-radius: 4px;
}
</style>
