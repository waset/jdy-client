<script lang="ts" setup>
interface Props {
  name?: string
  isDisabled?: boolean
  type?: 'text' | 'password' | 'number' | 'tel' | 'email' | 'url' | 'date' | 'time' | 'datetime-local' | 'month' | 'week' | 'search' | 'color'
  fontSize?: string
  value?: string | number
}

const props = withDefaults(defineProps<Props>(), {
  name: '',
  isDisabled: false,
  type: 'text',
  fontSize: '14px',
  value: '',
})

const emit = defineEmits(['changeValue'])

const onInput = (e: any) => {
  emit('changeValue', e.target.value)
}
</script>

<template>
  <div class="row" :class="props.isDisabled ? 'disable' : 'nodisable'" :style="{ fontSize }">
    <div class="row-left">
      <input updata:changeValue="props.value" :disabled="props.isDisabled" :class="props.isDisabled ? 'row-input dis' : 'row-input nodis'" :type="props.type" :placeholder="props.name" @input="onInput">
    </div>

    <div class="row-right">
      <template v-if="$slots.icon">
        <slot name="icon" />
      </template>
      <template v-else>
        <van-icon name="arrow" :color="props.isDisabled ? '#808089' : '#CBCDD1'" />
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.row {
  padding: 6px 12px;
  border-radius: 36px;
  &.disable {
    --uno: 'flex-between bg-[rgba(230,230,232,0.5)] border-[#e6e6e8] border-1px border-solid dark:bg-[rgba(230,230,232,0.3)] dark:border-[rgba(230,230,232,0.2)]';
  }
  &.nodisable {
    --uno: 'flex-between bg-#fff border-[#e6e6e8] border-1px border-solid dark:bg-[rgba(255,255,255,0.2)] dark:border-[rgba(230,230,232,0.2)]';
  }
  &-input {
    background: transparent;
    --uno: 'border-none bg-transparent color-[#333] dark:color-[#fff]';
  }
  .nodis::placeholder {
    color: #cbcdd1;
  }
  .dis::placeholder {
    color: #808089;
  }
}
</style>
