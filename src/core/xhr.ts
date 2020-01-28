import { AxiosConfig, AxiosResponse, AxiosResponsePromise } from '../types/idex'
import { parseHeaders } from '../helpers/headers'
import { createError } from '../helpers/error'

export function xhr(config: AxiosConfig): AxiosResponsePromise {
  return new Promise((resolve, reject) => {
    const { url, method, data, headers, responseType, timeout } = config

    const xhr = new XMLHttpRequest()

    if (responseType) {
      xhr.responseType = responseType
    }

    if (timeout) {
      xhr.timeout = timeout
    }

    xhr.open(method, url, true)

    xhr.onreadystatechange = function() {
      if (xhr.readyState !== 4) {
        return
      }
      if (xhr.status === 0) {
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

      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(response)
      } else {
        reject(
          createError(
            `Request failed with satus code ${response.status}`,
            config,
            null,
            xhr,
            response
          )
        )
      }
    }

    xhr.ontimeout = function() {
      reject(
        createError(`Timeout of ${timeout}ms`, config, 'connect time out', xhr)
      )
    }
    xhr.onerror = function() {
      reject(createError('Network Error', config, null, xhr))
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
