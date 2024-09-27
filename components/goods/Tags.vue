<script setup lang="ts">
const props = defineProps<{
  text: string
  color: string
  fontColor: string
}>()
</script>

<template>
  <div
    class="tag"
    :style="{ backgroundColor: props.color, color: props.fontColor }"
  >
    {{ props.text }}
  </div>
</template>

<style scoped lang="scss">
.tag {
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 8px;
  border-radius: 8px;

  max-width: fit-content;
}
</style>
