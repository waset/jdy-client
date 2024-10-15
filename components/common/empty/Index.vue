<script setup lang="ts">
const props = withDefaults(defineProps<{
  icon?: string
  padding?: string
}>(), {
  icon: '/images/empty.svg',
  padding: '20px 50px 20px 50px',
})
</script>

<template>
  <div
    class="empty flex-center-col flex-grow h-auto"
    :style="{ padding: props.padding }"
  >
    <div class="icon w-full h-full flex-center-row">
      <nuxt-img :src="props.icon" />
    </div>
  </div>
</template>
