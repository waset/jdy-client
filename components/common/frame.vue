<script lang="ts" setup>
const props = withDefaults(defineProps<{
  name?: string
  bgColor?: string
  color?: string
  disable?: boolean
  type?: 'text' | 'password' | 'number' | 'tel' | 'email' | 'url' | 'date' | 'time' | 'datetime-local' | 'month' | 'week' | 'search' | 'color'
}>(), {
  name: '名称',
  bgColor: '',
  color: '',
  disable: false,
  type: 'text',
})
const emit = defineEmits(['changeValue'])
const onInput = (e: any) => {
  emit('changeValue', e.target.value)
}
</script>

<template>
  <div :style="`${props.bgColor ? `background:${bgColor}` : ''}`" class="row  dark:bg-[red]">
    <div class="row-left">
      <input :disabled="disable" class="row-input" :type="props.type" :placeholder="props.name" @input="onInput">
    </div>
    <div class="row-right">
      <template v-if="$slots.icon">
        <slot name="icon" />
      </template>
      <template v-else>
        <van-icon :color="props.color" name="arrow" />
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.row {
  padding: 0 12px;
  border: #e6e6e8 1px solid;
  border-radius: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &-input {
    border: none;
    background: transparent;
  }
}
</style>
