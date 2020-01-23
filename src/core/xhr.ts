import {
  AxiaosConfig,
  AxiosResponse,
  AxiosResponsePromise
} from '../types/idex'
import { parseHeaders } from '../helpers/headers'

export function xhr(config: AxiaosConfig): AxiosResponsePromise {
  return new Promise((resolve, reject) => {
    const { url, method, data, headers, responseType } = config

    const xhr = new XMLHttpRequest()

    if (responseType) {
      xhr.responseType = responseType
    }

    xhr.open(method, url, true)

    xhr.onreadystatechange = function() {
      if (xhr.readyState !== 4) {
        return
      }

      const responseHeaders = parseHeaders(xhr.getAllResponseHeaders())
      const responseData =
        responseType && responseType !== 'text'
          ? xhr.response
          : xhr.responseText
      const response: AxiosResponse = {
        data: responseData,
        status: xhr.status,
        statusText: xhr.statusText,
        headers: responseHeaders,
        config: config,
        request: xhr
      }

      resolve(response)
    }

    Object.keys(headers).forEach(name => {
      if (data === null && name.toLocaleLowerCase() === 'content-type') {
        delete headers[name]
      } else {
        xhr.setRequestHeader(name, headers[name])
      }
    })
    xhr.send(data)
  })
}
