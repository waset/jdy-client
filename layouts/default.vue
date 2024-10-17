<script setup lang="ts">

</script>

<template>
  <div
    class="body min-h-screen box-border z-0">
    <div
      class="min-h-screen z-2 relative"
      uno-bg="[image:url(/images/background/bg.png)] dark:[image:url(/images/background/darkbg.png)]"
      :style="{ backgroundRepeat: 'no-repeat' }"
    >
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.body {
  --uno: 'bg-gradient-linear-[200deg,#2e7df2,#F1F5FE] dark:bg-gradient-linear-[200deg,#2e7df2,#071120]';
}
</style>
