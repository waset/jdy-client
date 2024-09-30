<script setup lang="ts">
const toggleDark = useToggle(isDark)
</script>

<template>
  <div class="text-size-[24px] flex-end" @click="toggleDark()">
    <div class="bg-[#FFFFFF66] rounded-full p-[2px] flex-center-row">
      <div class="wh-[24px] rounded-full flex-center-row light:bg-[#FFF] dark:bg-transparent">
        <template v-if="isDark">
          <NuxtImg src="/dark/sun-line.svg" width="16" />
        </template>
        <template v-else>
          <NuxtImg src="/dark/sun-blue.svg" width="16"
          />
        </template>
      </div>
      <div class="wh-[24px] rounded-full flex-center-row light:bg-transparent dark:bg-[#FFF]">
        <template v-if="isDark">
          <NuxtImg src="/dark/moon-fill.svg" width="16"
          />
        </template>
        <template v-else>
          <NuxtImg src="/dark/moon-white.svg" width="16"
          />
        </template>
      </div>
    </div>
  </div>
</template>
