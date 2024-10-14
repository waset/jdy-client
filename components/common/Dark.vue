<script setup lang="ts">
const colorMode = useColorMode()

const toggleColorMode = () => {
  colorMode.preference = colorMode.preference === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <div class=" w-fit" @click="toggleColorMode()">
    <div class="bg-[#FFFFFF66] rounded-full p-[2px] flex-center-row">
      <div class="p-[4px] rounded-full flex-center-row light:bg-[#FFF] dark:bg-transparent">
        <template v-if="colorMode.preference === 'dark'">
          <icon name="jdy:sun-line" size="16" />
        </template>
        <template v-else>
          <icon name="jdy:sun-blue" size="16" />
        </template>
        <span class="text-size-[12px] line-height-[24px] ml-[4px] color-[#3971F3] dark:color-[#fff]">浅色</span>
      </div>
      <div class="p-[4px] rounded-full flex-center-row light:bg-transparent dark:bg-[#FFF]">
        <template v-if="colorMode.preference === 'dark'">
          <icon name="jdy:moon-fill" size="16" />
        </template>
        <template v-else>
          <icon name="jdy:moon-white" size="16" />
        </template>
        <span class="text-size-[12px]  line-height-[24px] ml-[4px] color-[#fFf] dark:color-[#3971F3]">深色</span>
      </div>
    </div>
  </div>
</template>
