import { AxiaosConfig } from '../types/idex'
import { xhr } from './xhr'
import { transfomURL } from './url'

export function axios(config: AxiaosConfig) {
  transformConfig(config)
  xhr(config)
}

function transformConfig(config: AxiaosConfig) {
  config.url = transfomURL(config)
}
