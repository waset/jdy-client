/**
 * 根据index生成颜色
 * @param index
 * @return color
 */
export default function (index: number) {
  const hueStart = (index * 50) % 360 // 起始色调 (Hue)
  const hueEnd = (hueStart + 60) % 360 // 结束色调 (Hue)，根据起始色调偏移一定角度
  return `linear-gradient(to bottom, hsl(${hueStart}, 100%, 80%), hsl(${hueEnd}, 100%, 80%))`
}
