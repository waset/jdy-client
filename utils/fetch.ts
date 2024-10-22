const BASE_URL = 'http://127.0.0.1:5000'

async function fetchApi<T>(url: string, options?: RequestInit): Promise<T> {
  try {
    const response = await fetch(BASE_URL + url, options)
    if (!response.ok) {
      const error = new Error(`Fetch error! status: ${response.status}`)
      throw error
    }
    return response.json() as Promise<T>
  }
  catch (error) {
    console.error('Fetch failed:', error)
    throw error
  }
}

export async function get<T>(url: string): Promise<T> {
  return fetchApi<T>(url, { method: 'GET' })
}

export async function post<T>(url: string, body: any, options?: RequestInit): Promise<T> {
  return fetchApi<T>(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body), ...options })
}

async function setAuthToken(requestInit: RequestInit): Promise<RequestInit> {
  const token = localStorage.getItem('authToken')
  if (token) {
    requestInit.headers = {
      ...requestInit.headers,
      Authorization: `Bearer ${token}`,
    }
  }
  return requestInit
}

export async function fetchWithAuth<T>(url: string, options: RequestInit): Promise<T> {
  const modifiedOptions = await setAuthToken(options)
  return fetchApi<T>(url, modifiedOptions)
}
