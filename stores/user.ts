export const useDemo = defineStore('demoStore', () => {
  interface Result {
    id: string
    name: string
    tags: string
  }

  const number = ref<number>(0)
  const username = ref(0)
  const result = ref<Result>()
  const increment = async () => {
    return await post<Result>('/submit', { username: 'test' }, true).then((res) => {
      result.value = res
      return res
    })
  }

  return {
    number,
    username,
    increment,
  }
}, {
  persist: {
    storage: {
      getItem(key) {
        return window.localStorage.getItem(key)
      },
      setItem(key, value) {
        window.localStorage.setItem(key, value)
      },
    },

  },

})
