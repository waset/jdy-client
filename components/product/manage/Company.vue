<script setup lang="ts">
const emits = defineEmits<{
  click: []
}>()
</script>

<template>
  <div>
    <div class="py-[6px] px-[12px] bg-[#FFFFFF66] border-rd-full flex-center-row shadow-lg" @click="emits('click')">
      <div class="font-bold text-size-[14px] mr-[4px]">
        公司总店
      </div>
      <icon name="i-icon:product-toggle" size="24" />
    </div>
  </div>
</template>
