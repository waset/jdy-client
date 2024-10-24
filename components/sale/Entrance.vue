<script setup lang="ts">
// 销售管理入口页

// 定义标题文本
enum Title {
  SaleItem = '销售',
  DepositItem = '定金单',
  RepairItem = '维修单',
  OtherItem = '其他收支单',
}

const isFold = defineModel({ type: Boolean, default: false })

const toggleFold = () => {
  isFold.value = !isFold.value
}
</script>

<template>
  <div class="grid-12">
    <div class="px-[16px] py-[16px] col-12" uno-lg="col-8 offset-2" uno-sm="col-12">
      <div class="bg-opacity-80 bg-white rounded-3 dark:bg-[rgba(255,255,255,0.1)]">
        <!-- header -->
        <div>
          <common-header-gradient title="销售管理">
            <div
              class="flex-center-row gap-[2px] text-[12px] color-[#808089] dark:color-[#fff]" @click="toggleFold()">
              <div>点击{{ isFold ? '展开' : '收起' }}</div>
              <icon name="jdy:down" class="w-[12px] h-[12px] dark:color-[#fff]" />
            </div>
          </common-header-gradient>
        </div>
        <!-- 销售列表项 -->
        <template v-if="!isFold">
          <div class="py-[16px]">
            <div class="flex flex-col gap-[16px] px-4">
              <div class="text-[12px] font-semibold color-[#333] dark:color-[#fff]">
                {{ Title.SaleItem }}
              </div>
              <!-- 分割线 -->
              <div class="h-0.4 bg-[#E6E6E8] dark:bg-[rgba(230,230,232,0.3)]" />
              <div class="grid grid-rows-2 grid-flow-col w-full place-items-start gap-[16px]">
                <nuxt-link to="/sale/sales/list">
                  <div class="flex-center-row gap-[4px]">
                    <nuxt-img src="images/sale/sales-list.png" class="w-[32px] h-[32px]" />
                    <div class="title">
                      销售单列表
                    </div>
                  </div>
                </nuxt-link>
                <nuxt-link to="/sale/sales/add">
                  <div class="list flex-center-row gap-[4px]">
                    <nuxt-img src="images/sale/sales-list.png" class="w-[32px] h-[32px]" />
                    <div class="title">
                      新增销售单
                    </div>
                  </div>
                </nuxt-link>
                <nuxt-link to="/sale/sales/details">
                  <div class="list flex-center-row gap-[4px]">
                    <nuxt-img src="images/sale/sales-list.png" class="w-[32px] h-[32px]" />
                    <div class="title">
                      销售明细
                    </div>
                  </div>
                </nuxt-link>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title {
  --uno: 'text-[12px] color-[#333] font-medium dark:color-[#fff]';
}
</style>
