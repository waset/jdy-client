<script setup lang="ts">
const searchKey = defineModel('searchKey')

const subsearch = () => {
}
</script>

<template>
  <div>
    <div class="py-[6px] px-[12px] bg-[#FFFFFF66] border-rd-full text-size-[20px]  shadow-lg grid-12">
      <div class="col-1">
        <van-icon name="search" />
      </div>
      <div class="text-size-[14px] line-height-[20px]  col-10 offset-2 sm:offset-1">
        <input
          v-model="searchKey" type="text" class="bg-transparent border-0 input w-full" placeholder="搜索"
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
