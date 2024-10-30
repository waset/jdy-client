export const BASE_URL = 'http://127.0.0.1:4523/m1/5347033-5018095-default'

const fetchApi = async <T>(url: string, options: RequestInit = {}): Promise<T> => {
  try {
    const response = await fetch(BASE_URL + url, options)
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

const createHeaders = (isToken: boolean): HeadersInit => ({
  'Content-Type': 'application/json',
  ...(isToken ? { Token: window.localStorage.getItem('authToken') || '' } : {}),
})

export const get = async <T>(url: string, options: Record<string, any> = {}, isToken: boolean = false): Promise<T> => {
  return fetchApi<T>(url, {
    method: 'GET',
    headers: createHeaders(isToken),
    ...(options && { query: options }),
  })
}

export const post = async <T>(url: string, body: Record<string, any> = {}, isToken: boolean = false): Promise<T> => {
  return fetchApi<T>(url, {
    method: 'POST',
    headers: createHeaders(isToken),
    body: JSON.stringify(body),
  })
}
