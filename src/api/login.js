/**
 * 登录
 */

import { LoginApi } from './api'
import { Store } from './store'

export class Login {
  static login = (parms) => {
    return LoginApi.login(parms).then(res => {
      /** 保存token 登陆信息 */
      Store.saveUser(res)
      if (parms.remember) Store.saveRemember(parms)
      console.log('%c 身份被服务器接受[%s]', 'color:#52c41a', res.name)
      return res
    }).catch(err => {
      console.log('%c 身份被服务器拒绝[%s]', 'color:#52c41a', err)
      Store.logout()
      return err
    })
  }

  static logout = () => {
    return LoginApi.logout(res => {
      Store.logout()
      return res
    }).cache(err => {
      return err
    })
  }
}
