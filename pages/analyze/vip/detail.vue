<!-- 会员详情 -->
<script lang="ts" setup>
const vipbase = ref([
  {
    key: '姓名',
    value: '151',
  },
  {
    key: '昵称',
    value: '0.00%',
  },
  {
    key: '手机号',
    value: 'rgba(71,126,245,0.8)',
  },
  {
    key: '性别',
    value: '性别',
  },
  {
    key: '年龄',
    value: '/images/empty/record.png',
  },
  {
    key: '身份证号',
    value: '人',
  },
  {
    key: '地址',
    value: '0.00%',
  },
  {
    key: '性别',
    value: '性别',
  },
  {
    key: '年龄',
    value: '/images/empty/record.png',
  },
  {
    key: '身份证号',
    value: '人',
  },
  {
    key: '地址',
    value: '0.00%',
  },
])
const vipinfo = ref([
  {
    key: '会员年限 ',
    value: '151',
  },
  {
    key: '昵称',
    value: '0.00%',
  },
  {
    key: '手机号',
    value: 'rgba(71,126,245,0.8)',
  },
  {
    key: '性别',
    value: '性别',
  },
])
</script>

<template>
  <div class="px-[16px]">
    <common-dark />
    <analyze-vip-detail-base :vipbase="vipbase" />
    <analyze-vip-detail-address />
    <analyze-vip-detail-info :vipinfo="vipinfo" />
    <analyze-vip-detail-label />
  </div>
</template>
