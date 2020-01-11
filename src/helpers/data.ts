import { isObject } from './index'

export function transformRequestData(data: any) {
  if (isObject(data)) {
    return JSON.stringify(data)
  }
  return data
}
