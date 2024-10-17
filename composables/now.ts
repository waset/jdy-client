/**
 * 获取当前时间
 * “几月几号，星期几”
 */

const currentTime = useNow()
export const nowtime = ref<string>('')
function getWeekdayName(dayIndex: number) {
  const weekdayNames = [
    '星期日',
    '星期一',
    '星期二',
    '星期三',
    '星期四',
    '星期五',
    '星期六',
  ]
  return weekdayNames[dayIndex]
}

nowtime.value = `${currentTime.value.getMonth() + 1}月${currentTime.value.getDate()}日,${getWeekdayName(currentTime.value.getDay())}`
