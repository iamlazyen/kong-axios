import { AxiaosConfig } from '../types/idex'

export function xhr(config: AxiaosConfig) {
  const { url, method, data } = config

  const xhr = new XMLHttpRequest()
  xhr.open(method, url, true)
  xhr.send(data)
}
