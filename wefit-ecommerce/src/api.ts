export function api(path: string, req?: RequestInit) {
  const baseUrl = 'http://localhost:3000'
  const url = new URL(path, baseUrl)
  return fetch(url, req)
}
