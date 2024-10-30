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
      https.setAuthToken('1111111111111')
      await https.post('/submit', { username: 'test' }, true).then((res) => {
        console.log(res)
      })
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
