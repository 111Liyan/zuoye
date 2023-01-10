// 封装axios
import axios from 'axios'
import { ElMessage } from 'element-plus'

const instance = axios.create({
  /*路径地址*/
  baseURL: 'http://ihrm-java.itheima.net/api/',
  /*超时时间*/
  timeout: 5000,
  /*请求头*/
  headers: { 'Content-Type': 'application/json;charset=uft-8' }
})

/*请求拦截*/
instance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

/*响应拦截*/
instance.interceptors.response.use(
  (response) => {
    const res = response.data
    if (response.status !== 200) {
      ElMessage({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return response
    }
  },
  (error) => {
    console.log('err' + error)
    ElMessage({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default instance
