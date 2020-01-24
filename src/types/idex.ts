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

export interface AxiaosConfig {
  url: string
  method: Method
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
  config: AxiaosConfig
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
