export type Method =
  | 'get'
  | 'GET'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'delete'
  | 'DELETE'
  | 'patch'
  | 'PATCH'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'

export interface AxiosConfig {
  url?: string
  method?: Method
  data?: any
  params?: any
  headers?: any
  responseType?: XMLHttpRequestResponseType
  timeout?: number
}

export interface AxiosResponse {
  data: any
  status: number
  statusText: string
  headers: any
  config: AxiosConfig
  request: any
}

export interface AxiosResponsePromise extends Promise<AxiosResponse> {}

export interface AxiosError extends Error {
  config: AxiosResponse
  code?: string
  request?: any
  response?: AxiosResponse
  isAxiosError: boolean
}

export interface AxiosInterface {
  request(config: AxiosConfig): AxiosResponsePromise
  get(url: string, config?: AxiosConfig): AxiosResponsePromise
  delete(url: string, config?: AxiosConfig): AxiosResponsePromise
  head(url: string, config?: AxiosConfig): AxiosResponsePromise
  options(url: string, config?: AxiosConfig): AxiosResponsePromise
  post(url: string, data?: any, config?: AxiosConfig): AxiosResponsePromise
  put(url: string, data?: any, config?: AxiosConfig): AxiosResponsePromise
  patch(url: string, data?: any, config?: AxiosConfig): AxiosResponsePromise
}

export interface AxiosInstance extends AxiosInterface {
  (config: AxiosConfig): AxiosResponsePromise
  (url: string, config?: AxiosConfig): AxiosResponsePromise
}
