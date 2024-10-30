<script lang="ts" setup>
const props = defineProps<{
  navList: string[]
}>()
const current = defineModel({ type: Number, default: 0 })
function changeNav(i: number) {
  current.value = i
}
</script>

<template>
  <div class="nav">
    <template v-for="(item, index) in props.navList" :key="index">
      <div :class="current === index ? 'selected' : 'unselect'" @click="changeNav(index)">
        {{ item }}
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  --uno: 'grid grid-cols-3 gap-4 w-fit h-fit mx-auto';
  .unselect {
    --uno: 'px-4 py-1 text-[14px] text-[#000000] font-400 bg-#FFFFFF rounded-6px h-fit';
  }
  .selected {
    background: linear-gradient(to right, #b4d1fa, #bde2fc);
    --uno: 'px-4 pt-1 pb-[10px] text-[14px] text-[#333333] font-bold';
    clip-path: polygon(
      6.818% 0%,
      6.818% 0%,
      5.712% 0.231%,
      4.663% 0.9%,
      3.685% 1.97%,
      2.791% 3.405%,
      1.997% 5.169%,
      1.316% 7.225%,
      0.761% 9.537%,
      0.348% 12.069%,
      0.089% 14.785%,
      0% 17.647%,
      0% 64.706%,
      0% 64.706%,
      0.089% 67.568%,
      0.348% 70.284%,
      0.761% 72.816%,
      1.316% 75.128%,
      1.997% 77.184%,
      2.791% 78.948%,
      3.685% 80.383%,
      4.663% 81.453%,
      5.712% 82.122%,
      6.818% 82.353%,
      45.407% 82.353%,
      49.016% 98.529%,
      49.016% 98.529%,
      49.165% 99.059%,
      49.347% 99.471%,
      49.551% 99.765%,
      49.772% 99.941%,
      50% 100%,
      50.228% 99.941%,
      50.449% 99.765%,
      50.653% 99.471%,
      50.835% 99.059%,
      50.984% 98.529%,
      54.593% 82.353%,
      93.182% 82.353%,
      93.182% 82.353%,
      94.288% 82.122%,
      95.337% 81.453%,
      96.315% 80.383%,
      97.209% 78.948%,
      98.003% 77.184%,
      98.684% 75.128%,
      99.239% 72.816%,
      99.652% 70.284%,
      99.911% 67.568%,
      100% 64.706%,
      100% 17.647%,
      100% 17.647%,
      99.911% 14.785%,
      99.652% 12.069%,
      99.239% 9.537%,
      98.684% 7.225%,
      98.003% 5.169%,
      97.209% 3.405%,
      96.315% 1.97%,
      95.337% 0.9%,
      94.288% 0.231%,
      93.182% 0%,
      6.818% 0%
    );
  }
}
</style>
