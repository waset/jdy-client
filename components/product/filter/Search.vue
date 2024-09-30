<script setup lang="ts">
const searchKey = defineModel('searchKey')

const subsearch = () => {
}
</script>

<template>
  <div>
    <div class="py-[6px] px-[12px] bg-[#FFFFFF66] border-rd-full text-size-[20px] flex-start shadow-lg">
      <van-icon name="search" />
      <div class="text-size-[14px] line-height-[20px] ml-[8px]">
        <input
          v-model="searchKey" type="text" class="bg-transparent w-full border-0 input w-full" placeholder="搜索"
          @keyup.enter="subsearch()">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.input::input-placeholder {
  color: #fff;
}

.input::-webkit-input-placeholder {
  //兼容WebKit browsers（Chrome的内核）
  color: #fff;
}

.input::-moz-placeholder {
  //Mozilla Firefox 4 to 18
  color: #fff;
}

.input::-moz-placeholder {
  //Mozilla Firefox 19+
  color: #fff;
}

.input::-ms-input-placeholder {
  //Internet Explorer 10+
  color: #fff;
}
</style>
