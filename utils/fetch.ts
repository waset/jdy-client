export const BASE_URL = 'http://127.0.0.1:5000'

const fetchApi = async (url: string, options = {}) => {
  try {
    const response = await $fetch(BASE_URL + url, options)
    return response
  }
  catch (error) {
    console.error('Fetch failed:', error)
    throw error
  }
}

export const get = async (url: string, options = {}) => {
  return fetchApi(url, { ...options, method: 'GET' })
}

export const post = async (url: string, body: any, options = {}) => {
  return fetchApi(url, {
    ...options,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
}

const setAuthToken = async (requestOptions: RequestInit) => {
  const token = useCookie('authToken').value
  if (token) {
    requestOptions.headers = {
      ...requestOptions.headers,
      Authorization: `Bearer ${token}`,
    }
  }
  return requestOptions
}

export const fetchWithAuth = async (url: string, options = {}) => {
  const modifiedOptions = await setAuthToken(options)
  return fetchApi(url, modifiedOptions)
}
