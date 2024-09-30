<script setup lang="ts">
interface Tags {
  type: string
  text: string
  backgroundColor?: string
  color?: string
  isOval?: boolean
}

// 接收一个标签主题色
const props = withDefaults(defineProps<Tags>(), {
  type: 'orange',
  text: '',
  isOval: false,
})

const tagStyle: Tags[] = [
  {
    // 标签关键词
    type: 'orange',
    // 标签背景色
    backgroundColor: '#fff4cd',
    // 标签字体颜色
    color: '#dd9200',
    text: '',
  },
  {
    type: 'red',
    backgroundColor: '#ffd5d8',
    color: '#cc0000',
    text: '',
  },
  {
    type: 'green',
    backgroundColor: '#baffd6',
    color: '#106633',
    text: '',
  },
  {
    type: 'lake',
    backgroundColor: '#a2f5f0',
    color: '#2b6662',
    text: '',
  },
  {
    type: 'pink',
    backgroundColor: '#fbe2ff',
    color: '#cc00b8',
    text: '',
  },
  {
    type: 'greyblue',
    backgroundColor: '#c7daff',
    color: '#4b576d',
    text: '',
  },
  {
    type: 'grey',
    backgroundColor: '#e6e6e8',
    color: '#4b576d',
    text: '',
  },
]

// 设置border-radius
const borderStyle = props.isOval === true ? '100px 10px / 120px' : '8px'

// 根据props.type获取标签主题色
const tagTheme = tagStyle.find(item => item.type === props.type)
</script>

<template>
  <div
    class="tag flex-start px-[8px]"
    :style="{ backgroundColor: tagTheme?.backgroundColor, color: tagTheme?.color, borderRadius: borderStyle }"
  >
    {{ props.text }}
  </div>
</template>

<style scoped lang="scss">
.tag {
  max-width: fit-content;
}
</style>
