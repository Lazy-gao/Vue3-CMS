// axios 封装中定义的类型

import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface LAZYRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface LAZYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: LAZYRequestInterceptors<T>
  showLoading?: boolean
}
