<script setup lang="ts">
// 勾选框
const props = defineProps<{
  checked: boolean
}>()
</script>

<template>
  <div class="check-box">
    <template v-if="props.checked">
      <div class="flex justify-center items-center rounded-full w-4 h-4 border-solid border-2 border-#3971F3 bg-#fff">
        <nuxt-img src="/icons/check_box.svg" class="w-full h-full text-#3971F3" />
      </div>
    </template>
    <template v-else>
      <div class="rounded-full w-4 h-4 border-solid border-2 border-#CBCDD1" />
    </template>
  </div>
</template>
