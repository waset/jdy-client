<script lang="ts" setup>
interface FoldProps {
  title?: string
  // 标题字体大小
  size?: string
  // 渐变方向
  direction?: 'left' | 'right'
  fromColor?: string
  toColor?: string
  // 是否展开折叠
  isCollapse?: boolean
}

const props = withDefaults(defineProps<FoldProps>(), {
  title: '',
  size: '14px',
  direction: 'left',
  fromColor: 'rgba(71, 126, 245, 0)',
  toColor: 'rgba(130, 208, 250, 0.8)',
  isCollapse: true,
})

const isShow = ref<boolean>(true)

function toggleShow() {
  if (!props.isCollapse)
    return
  isShow.value = !isShow.value
}
</script>

<template>
  <div class="collapse-item">
    <div class="title" :style="`background: linear-gradient(to ${direction}, ${fromColor}, ${toColor});font-size:${size};`" @click="toggleShow">
      <template v-if="$slots.title">
        <slot name="title" />
      </template>
      <template v-else>
        <div>{{ props.title }}</div>
      </template>

      <template v-if="isCollapse">
        <div>
          <van-icon :name="!isShow ? 'arrow' : 'arrow-down'" />
        </div>
      </template>
    </div>
    <Transition mode="out-in">
      <template v-if="isShow">
        <div class="bg-[#FFF] dark:bg-[rgba(239,240,246,0.1)]">
          <slot />
        </div>
      </template>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.collapse-item {
  --uno: 'flex flex-col overflow-hidden';
  border-radius: 24px;
  border: 1px solid #eff0f6;
  .title {
    --uno: 'flex justify-between items-center py-8px px-16px text-14px font-600 text-#333333 dark:text-#FFFFFF';
  }
}
.collapse-item .v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
