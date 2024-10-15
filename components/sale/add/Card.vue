<script lang="ts" setup>
const props = withDefaults(defineProps<{
  list: any[]
}>(), {
  list: () => [],
})
</script>

<template>
  <common-fold title="标题/名称/单号/条码示例">
    <div class="grid-12 gap-0 lg:gap-8">
      <template v-for="(item, index) in props.list" :key="index">
        <div class="col-12 md:col-6 lg:col-4 md:odd:bg-white rounded-1">
          <div class="flex-between text-[16px] py-2 px-4">
            <div class="text-[#666666] dark:text-[rgb(203,205,209)]">
              {{ item.name }}
            </div>
            <div class="text-[#333333] dark:text-[#FFFFFF]">
              {{ item.value }}
            </div>
          </div>
        </div>
      </template>
    </div>
    <slot name="footer" />
  </common-fold>
</template>
