<script setup lang="ts">
const props = withDefaults(defineProps<{
  icon?: string
  padding?: string
}>(), {
  icon: '/assets/compIcon/emptyInfo.svg',
  padding: '20px 50px 20px 50px',
})
</script>

<template>
  <div
    class="empty" :style="{
      padding: props.padding,
    }"
  >
    <div class="icon w-full h-full">
      <NuxtImg :src="props.icon" />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .empty {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
