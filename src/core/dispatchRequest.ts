import { AxiosConfig, AxiosResponse, AxiosResponsePromise } from '../types/idex'
import { xhr } from './xhr'
import { buildURL } from '../helpers/url'
import { transformRequestData, transformResponseData } from '../helpers/data'
import { transformRequestHeaders } from '../helpers/headers'

export default function dipatchRequest(
  config: AxiosConfig
): AxiosResponsePromise {
  processConfig(config)
  return xhr(config).then(res => {
    return processResponse(res)
  })
}

function processConfig(config: AxiosConfig) {
  config.url = transformURL(config)
  config.headers = transformHeaders(config)
  config.data = transformData(config)

  function transformURL(config: AxiosConfig) {
    const { url, params } = config
    return buildURL(url!, params)
  }

  function transformData(config: AxiosConfig) {
    return transformRequestData(config.data)
  }

  function transformHeaders(config: AxiosConfig) {
    let { data, headers } = config
    return transformRequestHeaders((data = {}), headers)
  }
}

function processResponse(response: AxiosResponse) {
  response.data = transformResponseData(response.data)

  return response
}
