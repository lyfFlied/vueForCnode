/**
 * 项目api
 */
import {server} from "./servers";

/**
 * 登陆
 */
export class LoginApi {
  static login(params) {
    return server.connection('POST', '/api/sessions', params);
  }
}

/**
 * 首页
 */
export class Home {

}
