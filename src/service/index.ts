// service 统一的出口

import LAZYRequest from './request/request'
import { BASE_URL, TIME_OUT } from './request/config'

// 实例化axios对象，传入响应的配置,传入的这个对象就是config
const lazyRequest = new LAZYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    // 通过 config 给这个实例传入拦截器
    requestInterceptor: (config) => {
      const token = ''
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      console.log('请求成功的拦截')
      return config
    },
    requestInterceptorCatch: (err) => {
      console.log('请求失败的拦截')
      return err
    },
    responseInterceptor: (res) => {
      console.log('响应成功的拦截')
      return res
    },
    responseInterceptorCatch: (err) => {
      console.log('响应失败的拦截')
      return err
    }
  }
})

export default lazyRequest
