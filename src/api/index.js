// 这里封装的是具体的接口请求方法,每个方法只负责请求一个url地址
import request from '@/utils/index'

export const registerAPI = ({ username, password, repassword }) => {
  return request({
    url: '/api/reg',
    method: 'POST',
    data: { username, password, repassword }
    // axios传参有params和data，params的对象参数名和值，axios源码会把参数和值拼接在url后面(query参数)
    // data的对象参数名和值，axios源码会把参数和值拼接在请求体里(body参数)
  })
}
