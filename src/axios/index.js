
/* 引入资源请求插件 */
import axios from 'axios'
import router from 'router'
axios.defaults.baseURL = 'http://127.0.0.0:8082'
axios.defaults.timeout = 5000
// http request 拦截器
axios.interceptors.request.use(
  config => {
    // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
    config.data = JSON.stringify(config.data)
    config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    // if(token){
    //   config.params = {'token':token}
    // }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// http response 拦截器
axios.interceptors.response.use(
  response => {
    if (response.data.errCode === 2) {
      router.push({
        path: '/login',
        querry: {redirect: router.currentRoute.fullPath}// 从哪个页面跳转
      })
    }
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

/**
 * 封装方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export default {
  doGet: (url, params) => {
    return new Promise((resolve, reject) => {
      axios.get(url, {
        params: params
      }).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  doPost: (url, params) => {
    return new Promise((resolve, reject) => {
      axios.post(url, params).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }
}
