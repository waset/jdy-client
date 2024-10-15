<template>
  <div>
    <div class="grid-12 px-[16px] py-[12px]">
      <div class="col-4 color-[#fff]">
        <product-manage-company />
      </div>
    </div>
    <div class="blur-bgc rounded-t-[16px] px-[16px] pt-[16px] pb-[120px] h-xl">
      <div class="flex-start">
        <span> 1、开单后 </span>
        <div class="bg-[#fff] py-[10px] px-[12px] rounded-[36px] mx-[8px]">
          <div class="w-[117px]">
            123
          </div>
        </div> <span>天，接受回访</span>
        <div class="wh-[32px] bg-[#fff] rounded-[50%] flex-center-row ml-[8px]">
          <div class="w-[10px] h-[2px]  bg-[#3971F3]" />
        </div>
      </div>
    </div>

    <div class="fixed bottom-0 box-border px-[16px] py-[12px] blur-bgc w-full border-t-solid b-t-[1px] border-color-[#E6E6E8] grid-12 ">
      <div class="col-4">
        <common-button-rounded content="取消" color="#fff" />
      </div>
      <div class="col-7 offset-5">
        <common-button-rounded content="保存" />
      </div>
    </div>
  </div>
</template>
