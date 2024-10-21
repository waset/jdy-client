<script lang="ts" setup>
const address = ref({
  name: '',
  phone: '',
})
</script>

<template>
  <div class="mt-[16px]">
    <common-fold title="老会员复购率" from-color="rgba(71,126,245,0.8)" to-color="rgba(243,245,254,0.6)">
      <div class="p-[16px]">
        <div class="title pb-[12px]">
          姓名
        </div>
        <common-frame v-model="address.name" tip="姓名" />
        <div class="title py-[12px]">
          手机
        </div>
        <common-frame v-model="address.phone" tip="手机" type="tel" />
      </div>
    </common-fold>
  </div>
</template>

<style lang="scss" scoped>
.title {
  --uno: 'text-color text-14px';
}
</style>
