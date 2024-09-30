<script setup lang="ts">
// 主题色渐变边框
const props = withDefaults(defineProps<{
  title: string
  isImg?: boolean
  imgUrl?: string
  isTag?: boolean
  tagText?: string
  tagColor?: string
  tagTextColor?: string
  tagIsOval?: boolean
  isDownIcon?: boolean
}>(), {
  title: '',
  isImg: false,
  isTag: false,
  isDownIcon: false,
})
</script>

<template>
  <div class="theme-color-header flex flex-row items-center justify-between shrink-0">
    <div class="flex flex-row items-center gap-2 flex-1 rounded-t-2xl">
      <template v-if="props.isImg === true">
        <div class="img" style="position: relative">
          <nuxt-img :src="props.imgUrl" class="w-8 h-8 relative z-10" />
          <div
            class="under" style="
                                    position: absolute;
                                    top: 4px;
                                    left: -4px;
                                    z-index: 5;
                                "
          >
            <!-- 阴影 -->
            <nuxt-img src="/common/projection.svg" class="w-8 h-8" />
          </div>
        </div>
      </template>
      <div class="text-4 font-semibold">
        {{ props.title }}
      </div>
    </div>
    <div class="tag">
      <template v-if="props.isTag">
        <common-tags :text="props.tagText" :color="props.tagColor" :font-color="props.tagTextColor" :is-oval="props.tagIsOval" />
      </template>
    </div>
    <div class="downList flex items-center justify-center">
      <template v-if="props.isDownIcon === true">
        <nuxt-img src="/common/down.svg" class="w-6 h-6" />
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>
