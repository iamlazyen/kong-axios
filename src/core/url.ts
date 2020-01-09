import { AxiaosConfig } from '../types/idex'
import { isDate, isObject } from '../helpers'

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

export function transfomURL(config: AxiaosConfig) {
  let { url, params } = config

  if (!params) return url

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
    const markIndex = serializeURL.indexOf('#')
    if (markIndex !== -1) {
      serializeURL = serializeURL.slice(0, markIndex)
    }

    url += (url.includes('?') ? `&` : `?`) + serializeURL
  }

  return url
}
