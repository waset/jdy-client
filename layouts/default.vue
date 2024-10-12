<script setup lang="ts">
useToggle(isDark)
onMounted(() => {

})
</script>

<template>
  <div
    class="body min-h-screen box-border   ;">
    <div :style="{ background: `url(/background/bg.png)`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }" class="min-h-screen ">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.body {
  --uno: 'bg-gradient-linear-[200deg,#2e7df2,#F1F5FE] dark:bg-gradient-linear-[200deg,#2e7df2,#071120]';
}
</style>
