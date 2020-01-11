import { AxiaosConfig } from '../types/idex'

export function xhr(config: AxiaosConfig) {
  const { url, method, data, headers } = config

  const xhr = new XMLHttpRequest()
  xhr.open(method, url, true)
  Object.keys(headers).forEach(name => {
    if (data === null && name.toLocaleLowerCase() === 'content-type') {
      delete headers[name]
    } else {
      xhr.setRequestHeader(name, headers[name])
    }
  })
  xhr.send(data)
}
