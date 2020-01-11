import { AxiaosConfig } from '../types/idex'
import { xhr } from './xhr'
import { buildURL } from '../helpers/url'
import { transformRequestData } from '../helpers/data'

export function axios(config: AxiaosConfig) {
  processConfig(config)
  xhr(config)
}

function processConfig(config: AxiaosConfig) {
  config.url = transformURL(config)
  config.data = transformData(config)

  function transformURL(config: AxiaosConfig) {
    const { url, params } = config
    return buildURL(url, params)
  }

  function transformData(config: AxiaosConfig) {
    return transformRequestData(config.data)
  }
}
