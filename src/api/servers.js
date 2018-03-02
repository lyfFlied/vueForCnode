import axios from 'axios'
import qs from 'qs'
import debug from '../../debug.json'
import user from '../store/user'

export class BaseApi {
  host

  constructor (host) {
    this.host = host
  }

  /**
   * fetch
   * @param method
   * @param url
   * @param body
   * @returns {Promise<any>}
   */
  connection (method, url, body) {
    const headers = new Headers()
    const {isLogin, token} = user.state.auth
    if (isLogin) headers.set('token', token)
    headers.set('content-Type', 'application/x-www-form-urlencoded;charset=utf-8')
    if (method === 'GET' || method === 'HEAD') {
      url = url + '?' + qs.stringify(body)
    } else {
      body = qs.stringify(body)
    }
    return new Promise((resolve, reject) => {
      axios({
        method,
        url: `${this.host}${url}`,
        headers: headers,
        data: body
      }).then(res => {
        try {
          switch (res.status) {
            case 401:
              return {success: false, msg: '系统好像不认识你！'}
            case 403:
              return {success: false, msg: '你没有权限访问此功能！'}
            case 400:
              return {success: false, msg: '你没有权限访问此功能！'}
            case 404:
              return {success: false, msg: '网络繁忙，请稍后重试！'}
            default:
              return {success: true, msg: '', data: res.data}
          }
        } catch (err) {
          return {success: false, msg: '网络繁忙，请稍后重试！', error: err}
        }
      }).then(value => {
        if (value.success) {
          resolve(value.data)
        } else {
          reject(value.msg)
        }
      }).catch(err => {
        return '网络繁忙，请稍后重试！' + err
      })
    })
  }
}

export const server = new BaseApi(debug.servers)
