<script setup lang="ts">
const { $colorMode } = useNuxtApp()
const mode = computed({
  get() {
    return $colorMode.preference
  },
  set(newValue) {
    $colorMode.preference = newValue
  },
})
</script>

<template>
  <div class=" w-fit select-none">
    <div class="bg-[#FFFFFF66] rounded-full p-[2px] flex-center-row ">
      <div class="p-[4px] rounded-full flex-center-row light:bg-[#FFF] dark:bg-transparent" @click="mode = 'light'">
        <icon name="jdy:sun-line" size="16" :color="mode === 'light' ? '#3971F3' : '#FFF'" />
        <span class="text-size-[12px] line-height-[24px] ml-[4px] color-[#3971F3] dark:color-[#fff]">{{ mode }}浅色</span>
      </div>
      <div class="p-[4px] rounded-full flex-center-row light:bg-transparent dark:bg-[#FFF]" @click="mode = 'dark'">
        <icon name="jdy:moon-white" size="16" :color="mode === 'dark' ? '#3971F3' : '#FFF'" />
        <span class="text-size-[12px]  line-height-[24px] ml-[4px] color-[#fFf] dark:color-[#3971F3]">{{ mode }}深色</span>
      </div>
    </div>
  </div>
</template>
