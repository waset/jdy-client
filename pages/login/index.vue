<script setup lang="ts">
const isLogin = ref<boolean>(false)
useSeoMeta({
  title: '登录',
})
</script>

<template>
  <div class="">
    <common-dark />
    <div class="px-[16px] pt-[24px]">
      <div class="line-height-[24px] mb-[41px] color-[#fff]">
        <div class=" text-[20px]">
          欢迎登录！
        </div>
        <div class="text-[14px]">
          未注册的手机号将自动创建为账号
        </div>
      </div>

      <div class="ti-row grid-12 text-[20px]">
        <template v-if="isLogin">
          <div class="ti-left col-5 z1">
            登录
          </div>
          <div class="ti-after col-2" />
          <div class="col-5 color-[#Fff] flex-center-row" @click="isLogin = !isLogin">
            注册
          </div>
        </template>
        <template v-else>
          <div class=" col-5 z1 flex-center-row" @click="isLogin = !isLogin">
            登录
          </div>
          <div class="ti-after rotate-y-180deg col-2" />
          <div class="ti-right col-5 color-[#Fff] flex-center-row">
            注册
          </div>
        </template>
      </div>

      <div class="cardbox blur-bgc" :style="{ borderTopRightRadius: isLogin ? '16px' : '0px', borderTopLeftRadius: isLogin ? '0px' : '16px' }">
        <div>
          <div class="text-[14px] line-height-[20px] mb-[8px] dark:color-[#fff]">
            手机号
          </div>
          <div class="px-[12px] py-[10px] bg-[#fff] rounded-[8px]">
            <input
              type="text" class="bg-transparent border-0 placeholder-text-[#cbcdd1] text-[14px] w-full outline-none " placeholder="全部"
            >
          </div>
        </div>

        <div class="mt-[32px]">
          <div class="text-[14px] line-height-[20px] mb-[8px] dark:color-[#fff]">
            密码
          </div>
          <div class="px-[12px] py-[10px] bg-[#fff] rounded-[8px] ">
            <input
              type="text" class="bg-transparent border-0 placeholder-text-[#cbcdd1] text-[14px] w-full outline-none" placeholder="密码"
            >
          </div>
        </div>

        <div class="text-size-[16px]  font-semibold offset-5 mt-[32px]">
          <div class="ok ">
            登录
          </div>
        </div>

        <div class="px-[40px] mt-[112px] flex-center-row">
          <div class="h-[1px] w-[58px] color-[#9E9E9E] dark:color-[#fff] bg-gradient-linear-[90deg,#CCCCCC00,#CCCCCC]" />
          <div class=" color-[#9E9E9E] dark:color-[#fff] px-[9px]">
            其他登录方式
          </div>
          <div class="h-[1px] w-[58px]  color-[#9E9E9E] dark:color-[#fff] bg-gradient-linear-[270deg,#CCCCCC00,#CCCCCC] " />
        </div>
        <div class="flex-center-row py-[24px]">
          <div class="wh-[32px] rounded-full bg-blue" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cardbox {
  --uno: 'px-[23px] pb-14px sm:px-[24px] sm:pb-33px pt-0 rounded-b-16px  pt-36px';
  .ok {
    --uno: 'bg-gradient-linear-[180deg,#1A6BEB,#6EA6FF] line-height-[24px] px-[77px] py-[6px] text-center rounded-[36px] color-[#fff] shadow-[0_8px_8px_0px_#3971F33D]';
  }
}
.ti-row {
  .ti-left {
    --uno: 'relative rounded-tl-[16px] h-60px sm:h-60px flex-center-row line-height-[24px] blur-bgc';
  }
  .ti-right {
    --uno: 'relative rounded-tr-[16px] h-60px sm:h-60px flex-center-row line-height-[24px] blur-bgc';
  }
  .ti-after {
    --uno: ' h-full h-60px sm:h-60px  blur-bgc ';

    clip-path: polygon(
      0% 100%,
      100% 100%,
      100% 100%,
      96.281% 99.447%,
      92.842% 98.729%,
      89.684% 97.847%,
      86.807% 96.8%,
      84.211% 95.588%,
      81.895% 94.212%,
      79.86% 92.671%,
      78.105% 90.965%,
      76.632% 89.094%,
      75.439% 87.059%,
      75.439% 87.059%,
      74.114% 84.441%,
      72.246% 80.824%,
      69.833% 76.206%,
      66.877% 70.588%,
      63.377% 63.971%,
      59.333% 56.353%,
      54.746% 47.735%,
      49.614% 38.118%,
      43.939% 27.5%,
      37.719% 15.882%,
      37.719% 15.882%,
      35.605% 12.865%,
      33.123% 10.165%,
      30.272% 7.782%,
      27.053% 5.718%,
      23.465% 3.971%,
      19.509% 2.541%,
      15.184% 1.429%,
      10.491% 0.635%,
      5.43% 0.159%,
      0% -0%,
      0% 100%
    );
  }
}
</style>
