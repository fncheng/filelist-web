import axios from 'axios'
import Vue from 'vue'
const service = axios.create()
// 添加响应拦截器
service.interceptors.request.use(
  function(response) {
    const res = response.data
    console.log(res)
    return res
  },
  function(error) {
    // 对响应错误做点什么
    Vue.prototype.$Message.error('请求失败')
    console.log('error: ' + error)
  }
)
export default service
