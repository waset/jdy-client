<script setup lang="ts">
// 勾选框
const checked = defineModel<boolean>('checked')

function toggleCheck() {
  checked.value = !checked.value
}
</script>

<template>
  <div class="check-box" @click="toggleCheck">
    <template v-if="checked">
      <div class="flex justify-center items-center rounded-full w-4 h-4 border-solid border-2 border-[#3971F3] bg-[#fff]">
        <icon name="jdy:check-box" class="w-full h-full text-[#3971F3]" />
      </div>
    </template>
    <template v-else>
      <div class="rounded-full w-4 h-4 border-solid border-2 border-[#CBCDD1]" />
    </template>
  </div>
</template>
