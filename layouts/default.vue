<script setup lang="ts">
useToggle(isDark)
const img = useImage()
const backgroundStyles = computed(() => {
  const src = isDark.value ? '/images/background/darkbg.png' : '/images/background/bg.png'
  const imgUrl = img(src)
  return { backgroundImage: `url('${imgUrl}')`, backgroundRepeat: 'no-repeat' }
})
</script>

<template>
  <div
    class="body min-h-screen box-border z-0">
    <div
      class="min-h-screen z-2 relative" :style="backgroundStyles">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.body {
  --uno: 'bg-gradient-linear-[200deg,#2e7df2,#F1F5FE] dark:bg-gradient-linear-[200deg,#2e7df2,#071120]';
}
</style>
