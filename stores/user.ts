export const useDemo = defineStore('demoStore', () => {
  const number = ref(0)
  const username = ref(0)

  const increment = async () => {
    await fetchWithAuth('/hello', { method: 'GET' })
    await post('/submit', { name: 'sun' })
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
