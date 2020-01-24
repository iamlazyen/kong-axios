import { isObject } from './index'

export function transformRequestData(data: any) {
  if (isObject(data)) {
    return JSON.stringify(data)
  }
  return data
}

export function transformResponseData(data: any) {
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data)
    } catch (e) {
      console.log(`helpers:data.ts happened error`)
    }
  }

  return data
}
