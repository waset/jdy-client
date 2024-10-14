<script setup lang="ts">
interface Props {
  title?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
})

const show = defineModel({ type: Boolean, default: false })

function close() {
  show.value = false
}

const funlist = ref([
  {
    icon: '',
    name: '导出数据',
    color: 'linear-gradient(#1a6beb, #6ea6ff)',
  },
  {
    icon: '',
    name: '导出无图货品',
    color: 'linear-gradient(#0BC196, #1CE885)',
  },
  {
    icon: '',
    name: '批量查条码',
    color: 'linear-gradient(#FFA78F, #F23E2C)',
  },
  {
    icon: '',
    name: '批量报损',
    color: 'linear-gradient(#1a6beb, #6ea6ff)',
  },
  {
    icon: '',
    name: '货品更新',
    color: 'linear-gradient(#0BC196, #1CE885)',
  },
])
</script>

<template>
  <div v-if="show" class="popup">
    <div class="content">
      <div class="top">
        <div class="close" @click="close">
          <van-icon name="cross" color="#fff" size="16" />
        </div>
        <div class="title">
          <NuxtImg class="title-img1" src="/model/title1.png" width="80" />
          <NuxtImg class="title-img2" src="/model/title2.png" width="170" />
          <div class="title-content">
            {{ props.title }}
          </div>
        </div>
      </div>

      <div class="box">
        <van-row>
          <template v-for="(item, i) in funlist" :key="i">
            <van-col span="8">
              <div class="fun">
                <div class="fun-icon" :style="{ background: item.color }" />
                <div class="text-[14px]">
                  {{ item.name }}
                </div>
              </div>
            </van-col>
          </template>
        </van-row>
        <div class="cancel-btn">
          取消
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.popup {
  --uno: 'fixed left-0 right-0 top-0 bottom-0 w-[100vw] h-[100vh] z-999 overflow-hidden';
  background: rgba($color: #000, $alpha: 0.3);

  .content {
    --uno: 'fixed left-0 right-0 bottom-0 sm:w-426px sm:translate-x-[-50%] sm:translate-y-[50%] sm:bottom-[50%] sm:left-[50%]';
    .top {
      --uno: 'relative h-50px border-rd-[20px_20px_0_0]';
      background: linear-gradient(to right, rgba(147, 211, 245, 1), rgba(56, 101, 252, 1));
      .close {
        --uno: 'absolute top-[10px] right-[20px]';
      }
      .title {
        --uno: 'absolute top-[-24px]';
        &-img1 {
          --uno: 'absolute z-[3]';
        }
        &-img2 {
          --uno: 'z-[2] pl-[58px] relative';
        }
        &-content {
          --uno: 'absolute left-[80px] top-[16px] z-9 text-[rgba(255,255,255,1)] font-bold';
          transform: skewy(-4deg);
          transform-origin: bottom left;
        }
      }
    }
    .box {
      --uno: 'border-rd-[16px_0_0_0] mt-[-16px] bg-[rgb(236,239,246)] dark:bg-[rgba(0,0,0,0.8)] sm:border-rd-[16px_0_16px_16px] px-[30px] py[42px]';
      .fun {
        --uno: 'px-[8px] py-[10px] flex flex-col items-center blur-bga border-rd-[16px] mb-[16px] mx-[8px]';
        .fun-icon {
          --uno: 'w-36px h-36px border-rd-[50%] mb-[10px]';
        }
      }
      .cancel-btn {
        --uno: 'mt-[24px] py-[6px] text-center border-rd-[36px] text-[16px] text-[#fff] font-bold';
        background: linear-gradient(to bottom, #1a6beb, #6ea6ff);
        box-shadow: rgba(57, 113, 243, 0.24) 0px 8px 8px 0;
      }
    }
  }
}
</style>
