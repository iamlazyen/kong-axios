import { AxiaosConfig, AxiosResponse } from '../types/idex'

export class AxiosError extends Error {
  isAxiosError: boolean
  config: AxiaosConfig
  code?: string | null
  request?: any
  response?: AxiosResponse

  constructor(
    message: string,
    config: AxiaosConfig,
    code?: string | null,
    request?: any,
    response?: AxiosResponse
  ) {
    super(message)

    this.config = config
    this.code = code
    this.isAxiosError = true
    this.request = request
    this.response = response

    Object.setPrototypeOf(this, AxiosError.prototype)
  }
}

export function createError(
  message: string,
  config: AxiaosConfig,
  code?: string | null,
  request?: any,
  response?: AxiosResponse
): AxiosError {
  return new AxiosError(message, config, code, request, response)
}
