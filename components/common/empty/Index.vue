<script setup lang="ts">
const props = withDefaults(defineProps<{
  icon?: string
  padding?: string
}>(), {
  icon: 'empty',
  padding: '20px 50px 20px 50px',
})
</script>

<template>
  <div
    class="flex-center-col flex-grow h-auto"
    :style="{ padding: props.padding }"
  >
    <div class="flex-center-row w-full h-full">
      <nuxt-img src="/images/condition/empty.png" class="w-[200px] h-auto" />
    </div>
  </div>
</template>
