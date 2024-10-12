<script setup lang="ts">
const toggleDark = useToggle(isDark)
</script>

<template>
  <div class=" w-fit" @click="toggleDark()">
    <div class="bg-[#FFFFFF66] rounded-full p-[2px] flex-center-row">
      <div class="p-[4px] rounded-full flex-center-row light:bg-[#FFF] dark:bg-transparent">
        <template v-if="isDark">
          <icon name="jdy:demo" size="16" mode="css" />
          <span class="text-size-[12px] line-height-[24px] ml-[4px] color-[#fff]">浅色</span>
        </template>
        <template v-else>
          <icon name="jdy:sun-blue" size="16" mode="css" />
          <span class="text-size-[12px] line-height-[24px]  ml-[4px] color-[#3971F3]">浅色</span>
        </template>
      </div>
      <div class="p-[4px] rounded-full flex-center-row light:bg-transparent dark:bg-[#FFF]">
        <template v-if="isDark">
          <icon name="jdy:moon-fill" size="16" mode="css" />
          <span class="text-size-[12px]  line-height-[24px] ml-[4px] color-[#3971F3]">深色</span>
        </template>
        <template v-else>
          <icon name="jdy:moon-white" size="16" mode="css" />
          <span class="text-size-[12px]  line-height-[24px] ml-[4px] color-[#fFf]">深色</span>
        </template>
      </div>
    </div>
  </div>
</template>
