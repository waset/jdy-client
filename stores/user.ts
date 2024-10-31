export const useUser = defineStore('userStore', {
  state: () => {
    return {
      num: 1,
    }
  },
  getters: {

  },
  actions: {
    async increment() {
      const data = await https.post<Users>('/submit', { username: 'test' })
    },
  },
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
