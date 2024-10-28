<script setup lang="ts">
const props = defineProps<{
  name: string
  color?: string
  size?: string | number
}>()

const attrs = useAttrs()
// const customize = (content: string, _name: string, _prefix: string, _provider: string) => {
//   if (!props.color)
//     return content

//   return content
//     .replace(/fill="[^"]*"/g, `fill="currentColor"`)
// }
</script>

<template>
  <!-- <nuxt-icon :name="props.name" v-bind="attrs" :customize="customize" :style="{ color: props.color }" /> -->
  <client-only>
    <div
      class="icon"
      v-bind="attrs"
      :style="{
        '--color': props.color,
        '--size': props.size ? `${props.size}px` : '16px',
      }">
      <div :class="props.name" />
    </div>
  </client-only>
</template>

<style lang="scss" scoped>
.icon {
  font-size: var(--size);
}
</style>
