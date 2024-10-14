<script setup lang="ts">
useToggle(isDark)
</script>

<template>
  <div
    class="body min-h-screen box-border;">
    <NuxtImg src="/background/bg.png" class="fixed top-0 left-0 z-0 w-[400px] sm:w-[600px]" />
    <div class="min-h-screen ">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.body {
  --uno: 'bg-gradient-linear-[200deg,#2e7df2,#F1F5FE] dark:bg-gradient-linear-[200deg,#2e7df2,#071120]';
}
</style>
