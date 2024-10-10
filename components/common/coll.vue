<script setup lang="ts">
const isOpen = ref<boolean>(false)
const toggleOpen = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="grid-12 px-[16px]">
    <div class="grid-12 gap-[24px] col-12 sm:col-8 sm:offset-2">
      <template v-for="(item, index) in 5" :key="index">
        <div class="sm:col-12 lg:col-6 col-12">
          <div class=" rounded-[24px] overflow-hidden">
            <div class="bg-gradient-linear-[90deg,#8CADF8,#D8E7FD] px-[16px] py-[8px] text-size-[14px] line-height-[20px] color-[#333] font-semibold flex-between">
              <slot name="title" />
              <div @click="toggleOpen()">
                <template v-if="isOpen">
                  <van-icon name="arrow-down" />
                </template>
                <template v-else>
                  <van-icon name="arrow-up" />
                </template>
              </div>
            </div>
            <div class="bg-[#DAE8FD] px-[16px]" :class="[isOpen ? 'block1' : 'hidden1']">
              <div class=" pt-[12px] pb-[16px] text-size-[14px]" :class="[isOpen ? 'block2' : 'hidden2']">
                <slot name="content" />
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hidden1 {
  height: 0px;
  transition: all 200ms ease;
}

.block2 {
  opacity: 1;
  transition: all 200ms ease;
}
.hidden2 {
  opacity: 0;
  transition: all 200ms ease;
}
</style>
