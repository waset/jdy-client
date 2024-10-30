class Https {
  static BASE_URL: string = 'http://127.0.0.1:4523/m1/5347033-5018095-default'
  static authToken: string = ''
  constructor() {}

  setAuthToken(token: string) {
    window.localStorage.setItem('authToken', token)
    Https.authToken = token
  }

  //   middleware
  fetchApi = async <T>(url: string, options: RequestInit = {}): Promise<T> => {
    try {
      const response = await fetch(Https.BASE_URL + url, options)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      return await response.json()
    }
    catch (error) {
      console.error('Fetch failed:', error)
      throw error
    }
  }

  createHeaders = (isToken: boolean): HeadersInit => ({
    'Content-Type': 'application/json',
    ...(isToken ? { Token: window.localStorage.getItem('authToken') || Https.authToken } : {}),
  })

  get = async <T>(url: string, options: Record<string, any> = {}, isToken: boolean = false): Promise<T> => {
    return this.fetchApi<T>(url, {
      method: 'GET',
      headers: this.createHeaders(isToken),
      ...(options && { query: options }),
    })
  }

  post = async <T>(url: string, body: Record<string, any> = {}, isToken: boolean = false): Promise<T> => {
    return this.fetchApi<T>(url, {
      method: 'POST',
      headers: this.createHeaders(isToken),
      body: JSON.stringify(body),
    })
  }
}
export const https = new Https()
