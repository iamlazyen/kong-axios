import { AxiaosConfig, AxiosResponsePromise } from '../types/idex'
import { xhr } from './xhr'
import { buildURL } from '../helpers/url'
import { transformRequestData } from '../helpers/data'
import { transformRequestHeaders } from '../helpers/headers'

export function axios(config: AxiaosConfig): AxiosResponsePromise {
  processConfig(config)
  return xhr(config)
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
