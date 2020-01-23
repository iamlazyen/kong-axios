import { isObject } from './index'

function normalizeHeaders(headers: any, noramlizeNmae: string): void {
  if (!headers) return

  Object.keys(headers).forEach(name => {
    if (
      name !== noramlizeNmae &&
      name.toLocaleLowerCase() === noramlizeNmae.toLocaleLowerCase()
    ) {
      headers[noramlizeNmae] = headers[name]
      delete headers[name]
    }
  })
}

export function transformRequestHeaders(data: any, headers: any) {
  normalizeHeaders(headers, 'Content-Type')

  if (isObject(data)) {
    if (headers && !headers['Content-Type']) {
      headers['Content-type'] = 'application/json;charset=utf-8'
    }
  }

  return headers
}

/**
 * response heders is string, we need object
 * @param headers responseHeaders
 * @return object
 */
export function parseHeaders(headers: string) {
  let parsed = Object.create(null)
  if (!headers) {
    return parsed
  }

  headers.split('\r\n').forEach(line => {
    let [key, value] = line.split(':')
    key = key.trim().toLowerCase()
    if (!key) {
      return
    }
    if (value) {
      value = value.trim()
    }
    parsed[key] = value
  })

  return parsed
}
