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
