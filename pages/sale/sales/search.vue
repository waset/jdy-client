<script setup lang="ts">
// 搜索会员页
const memberInfo: MemberInfo = {
  nickname: '懒羊羊',
  phone: '19222222222',
  img: 'https://img.yzcdn.cn/vant/cat.jpeg',
  email: '16000000000@qq.com',
  address: '草原地上一层',
  birthday: '0000-01-01',
  gender: '未知',
  remark: '备注信息',
  createTime: '2021-10-10 10:10:10',
  level: 3,
  buyCount: 60,
  isFollow: 1,
}
</script>

<template>
  <div>
    <div class="search-header">
      搜索组件 + 添加组件
    </div>
    <sale-sales-card :member-info="memberInfo" />
  </div>
</template>
