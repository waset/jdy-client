<script setup lang="ts">
const props = defineProps<{
  name: string
  color?: string
}>()

const attrs = useAttrs()
let customize: any

watchEffect(() => {
  customize = (content: string, _name: string, _prefix: string, _provider: string) => {
    if (!props.color)
      return content

    return content
      .replace(/fill="[^"]*"/g, `fill="currentColor"`)
  }
})
</script>

<template>
  <nuxt-icon :name="props.name" v-bind="attrs" :customize="customize" :style="{ color: props.color }" />
</template>

<style lang="scss" scoped>

</style>
