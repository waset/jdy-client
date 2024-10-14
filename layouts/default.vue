<script setup lang="ts">
useToggle(isDark)
</script>

<template>
  <div
    class="body min-h-screen box-border z-0">
    <template v-if="isDark">
      <NuxtImg src="/background/darkbg.png" class="fixed top-0 left-0 z-[1] w-[375px] sm:w-[500px]" />
    </template>
    <template v-else>
      <NuxtImg src="/background/bg.png" class="fixed top-0 left-0 z-[1] w-[375px] sm:w-[500px]" />
    </template>
    <div class="min-h-screen z-2 relative">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.body {
  --uno: 'bg-gradient-linear-[200deg,#2e7df2,#F1F5FE] dark:bg-gradient-linear-[200deg,#2e7df2,#071120]';
}
</style>
