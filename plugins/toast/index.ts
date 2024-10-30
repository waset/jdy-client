import { createVNode, render } from 'vue'
import Dom from './Index.vue'

interface Props {
  /**
   * 文本内容
   */
  msg: string
  /**
   * 提示主题
   * 'error' | 'warning' | 'success' | 'primary'
   */
  type?: types
  /**
   * 显示时长
   */
  duration?: number
  /**
   * icon
   */
  ico?: string
}

type types =
  | 'error'
  | 'warning'
  | 'success'
  | 'primary'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      toast: (props: Props) => {
        const toastNode = document.createElement('div')
        const vm = createVNode(Dom, { ...props })
        render(vm, toastNode)
        document.body.appendChild(toastNode)
        setTimeout(() => {
          document.body.removeChild(toastNode)
        }, props.duration || 2000)
      },
    },
  }
})
