<script lang="ts" setup>

</script>

<template>
  <div>
    <template v-for="i in 3" :key="i">
      <div class="pt-[16px]">
        <common-fold title="周大生万达店" to-color="rgba(241,245,254,0.6)" from-color="rgba(241,245,254,0.6)">
          <template #title>
            <div class="flex items-center justify-between">
              <div class="titlelabel">
                数据
              </div>
              <div class="pl-2">
                汇总
              </div>
            </div>
          </template>
          <div class="p-[16px]">
            <template v-for="i in 5" :key="i">
              <div class="flex justify-between items-center mb-2">
                <div class="text-color-light">
                  推广人数
                </div>
                <div class="text-color">
                  42
                </div>
              </div>
            </template>
          </div>
        </common-fold>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.titlelabel {
  --uno: 'bg-[rgba(199,218,255,1)] text-[rgba(75,87,109,1)] px-[8px] py-[2px] rounded-[8px_0_8px_0]';
}
</style>
