<script lang="ts" setup>
const props = defineProps<{
  vipinfo: any[]
}>()
</script>

<template>
  <div class="mt-[16px]">
    <common-fold title="详细信息" from-color="rgba(71,126,245,0.8)" to-color="rgba(243,245,254,0.6)">
      <div class="p-4">
        <div class="info">
          <template v-for="(item, index) in props.vipinfo" :key="index">
            <div class="row">
              <div class="text-color-light">
                {{ item.key }}
              </div>
              <div class="text-color ml-3">
                {{ item.value }}
              </div>
            </div>
          </template>
        </div>
      </div>
    </common-fold>
  </div>
</template>

<style lang="scss" scoped>
.info {
  --uno: 'text-14px font-400';
  .row {
    --uno: 'flex justify-between pb-8px items-center';
  }
}
</style>
