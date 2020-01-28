import { AxiosConfig } from '../types/idex'
import { isDate, isObject } from './index'

function encode(val: string): string {
  return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}

export function buildURL(url: string, params?: any) {
  let result = url

  if (!params) return result

  const partForURL: string[] = []
  Object.keys(params).forEach(key => {
    const val = params[key]
    if (val === null || typeof val === 'undefined') return

    let values: string[] = []
    if (Array.isArray(val)) {
      values = val
      key += '[]'
    } else {
      values = [val]
    }

    values.forEach(value => {
      if (isDate(value)) {
        value = value.toISOString()
      } else if (isObject(value)) {
        value = JSON.stringify(value)
      }

      partForURL.push(`${encode(key)}=${encode(value)}`)
    })
  })

  let serializeURL = partForURL.join('&')

  if (serializeURL) {
    const markIndex = url.indexOf('#')
    if (markIndex !== -1) {
      result = url.slice(0, markIndex)
    }

    result += (url.includes('?') ? `&` : `?`) + serializeURL
  }

  return result
}
