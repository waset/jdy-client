<script setup lang="ts">
const props = withDefaults(defineProps<{
  content: string
  color?: string
  shadow?: boolean
  padding?: string
}>(), {
  color: '',
  padding: '',
  shadow: true,
})

const emit = defineEmits(['click'])
const handleClick = () => {
  emit('click')
}
</script>

<template>
  <div
    class="button flex justify-center items-center font-bold text-4 rounded-3xl"
    :style="{
      color: props.color ? '#3971f3' : '#fff',
      background: props.color ? props.color : 'linear-gradient(0deg, #6ea6ffbf 11%, #1a6beb)',
      boxShadow: props.shadow === true ? '0px 5px 10px 0px rgba(57, 113, 243, 0.24)' : '',
      padding: props.padding ? props.padding : '8px 16px',
    }"
    @click="handleClick"
  >
    {{ props.content }}
  </div>
</template>
