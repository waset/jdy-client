<script setup lang="ts">

</script>

<template>
  <div
    class="body min-h-screen box-border z-0">
    <div
      class="min-h-screen z-2 relative">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.body {
  --uno: 'bg-gradient-linear-[180deg,#3875C5,#F1F5FE] dark:bg-gradient-linear-[180deg,#3875C5,#07111F]';
}
</style>
