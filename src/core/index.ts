import {
  AxiaosConfig,
  AxiosResponse,
  AxiosResponsePromise
} from '../types/idex'
import { xhr } from './xhr'
import { buildURL } from '../helpers/url'
import { transformRequestData, transformResponseData } from '../helpers/data'
import { transformRequestHeaders } from '../helpers/headers'

export function axios(config: AxiaosConfig): AxiosResponsePromise {
  processConfig(config)
  return xhr(config).then(res => {
    return processResponse(res)
  })
}

function processConfig(config: AxiaosConfig) {
  config.url = transformURL(config)
  config.headers = transformHeaders(config)
  config.data = transformData(config)

  function transformURL(config: AxiaosConfig) {
    const { url, params } = config
    return buildURL(url, params)
  }

  function transformData(config: AxiaosConfig) {
    return transformRequestData(config.data)
  }

  function transformHeaders(config: AxiaosConfig) {
    let { data, headers } = config
    return transformRequestHeaders((data = {}), headers)
  }
}

function processResponse(response: AxiosResponse) {
  response.data = transformResponseData(response.data)

  return response
}
