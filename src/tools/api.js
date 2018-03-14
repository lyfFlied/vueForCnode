/**
 * 项目api
 */
import { server } from './servers'

/**
 * 登陆
 */
export class LoginApi {
  static login (params) {
    return server.connection('POST', '/api/sessions', params)
  }

  static logout () {
    return server.connection('POST', '/api/logout')
  }
}

/**
 * 首页
 */
export class Home {
  static getArticles(params) {
    return server.connection('GET', 'https://cnodejs.org/api/v1/topics', params)
  }

  static publicArticles(params) {
    return server.connection('POST', 'https://cnodejs.org/api/v1/topics', params)
  }
}
