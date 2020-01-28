import {
  AxiosConfig,
  AxiosInterface,
  AxiosResponsePromise,
  Method
} from '../index'
import dispatchRequest from '../core/dispatchRequest'

export default class Axios implements AxiosInterface {
  request(config: AxiosConfig): AxiosResponsePromise {
    return dispatchRequest(config)
  }

  get(url: string, config?: AxiosConfig): AxiosResponsePromise {
    return this._responseWithNoData('get', url, config)
  }

  delete(url: string, config?: AxiosConfig): AxiosResponsePromise {
    return this._responseWithNoData('delete', url, config)
  }

  head(url: string, config?: AxiosConfig): AxiosResponsePromise {
    return this._responseWithNoData('head', url, config)
  }

  options(url: string, config?: AxiosConfig): AxiosResponsePromise {
    return this._responseWithNoData('options', url, config)
  }

  post(url: string, data?: any, config?: AxiosConfig): AxiosResponsePromise {
    return this._responseWithData('post', url, data, config)
  }

  put(url: string, data?: any, config?: AxiosConfig): AxiosResponsePromise {
    return this._responseWithData('post', url, data, config)
  }

  patch(url: string, data?: any, config?: AxiosConfig): AxiosResponsePromise {
    return this._responseWithData('post', url, data, config)
  }

  private _responseWithNoData(
    method: Method,
    url: string,
    config?: AxiosConfig
  ) {
    return this.request(
      Object.assign(config || {}, {
        method,
        url
      })
    )
  }

  private _responseWithData(
    method: Method,
    url: string,
    data?: any,
    config?: AxiosConfig
  ) {
    return this.request(
      Object.assign(config || {}, {
        method,
        url,
        data
      })
    )
  }
}
