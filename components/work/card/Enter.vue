<script setup lang="ts">
const props = defineProps<{
  content: Array<{ title: string, enter: Array<{ name: string, path: string }> }>
}>()
</script>

<template>
  <div>
    <template v-for="(item, index) in props.content" :key="`${item.title}-${index}`">
      <div>
        <div class="text-size-[14px] line-height-[20px] color-[#333] pb-[8px] border-b-[1px] b-b-solid border-b-[#E6E6E8] mb-[16px]">
          {{ item.title }}
        </div>
        <div class="grid-12 gap-row-[16px] gap-col-[24px]">
          <template v-for="(child, i) in item.enter" :key="`${child.name}-${i}`">
            <nuxt-link class="flex-start col-6 color-[#000]" :to="child.path">
              <div class="wh-[30px] bg-[#FF624C] rounded-full" />
              <div class="py-[6px] ml-[4px] text-size-[12px] line-height-[20px]">
                {{ child.name }}
              </div>
            </nuxt-link>
          </template>
        </div>
      </div>
    </template>
  </div>
</template>
