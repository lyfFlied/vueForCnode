import axios from 'axios'
import qs from 'qs'
import debug from '../../debug.json'
import user from '../store/user'

export class BaseApi {
  host;

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
  connection (method = 'GET', url, body) {
    if (typeof body !== 'object') body = {}
    const {isLogin, token} = user.state.auth
    const headers = new Headers()
    method = method.toLocaleLowerCase()
    if (isLogin) headers.set('token', token)
    headers.set('content-Type', 'application/x-www-form-urlencoded;charset=utf-8')
    if (method === 'get' || method === 'head') {
      url = url + '?' + qs.stringify(body)
    } else {
      body = qs.stringify(body)
    }
    const _option = {
      method,
      url,
      baseURL: this.host,
      timeout: 30000,
      data: body,
      headers,
    }
    return new Promise((resolve, reject) => {
      axios.request(_option).then(res => {
        try {
          switch (res.status) {
            case 401:
              return {success: false, msg: '系统好像不认识你！', data: ''}
            case 403:
              return {success: false, msg: '你没有权限访问此功能！', data: ''}
            case 400:
              return {success: false, msg: '你没有权限访问此功能！', data: ''}
            case 404:
              return {success: false, msg: '网络繁忙，请稍后重试！', data: ''}
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
