class Https {
  BASE_URL: string = 'http://127.0.0.1:4523/m1/5347033-5018095-default'
  authToken: string = ''
  constructor() {}

  setAuthToken(token: string) {
    window.sessionStorage.setItem('authToken', token)
    this.authToken = token
  }

  //   middleware
  fetchApi = async (url: string, opt: any) => {
    try {
      const { data } = await useFetch(this.BASE_URL + url, {
        onRequest({ options }) {
          // Set the request headers
          options.headers = opt.headers || {}
          options.method = opt.method
          if (opt.method === 'POST') {
            options.body = opt.body
          }
        },
        onRequestError() {
          // Handle the request errors
        },
        onResponse() {
          // Process the response data
        //   console.log(response._data, 'response')
        },
        onResponseError() {
          // Handle the response errors
        },
      })

      return data.value
    }
    catch (error) {
      console.error('Fetch failed:', error)
      throw error
    }
  }

  createHeaders = (isToken: boolean): HeadersInit => ({
    'Content-Type': 'application/json',
    ...(isToken ? { Token: window.localStorage.getItem('authToken') || this.authToken } : {}),
  })

  get = async <T>(url: string, options: Record<string, any> = {}, isToken: boolean = false): Promise<T> => {
    return this.fetchApi(url, {
      method: 'GET',
      headers: this.createHeaders(isToken),
      ...(options && { query: options }),
    }) as Promise<T>
  }

  post = async <T>(url: string, body: Record<string, any> = {}, isToken: boolean = false): Promise<T> => {
    return this.fetchApi(url, {
      method: 'POST',
      headers: this.createHeaders(isToken),
      body: JSON.stringify(body),
    }) as Promise<T>
  }
}
export const https = new Https()
