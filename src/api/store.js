/**
 * sessionStorage 存储
 */
export class Store {
  /** 保存登录状态 */
  static login() {
    sessionStorage.setItem('isLogin', 'true')
  }

  /** 清除登录状态 */
  static logout() {
    sessionStorage.removeItem('isLogin');
    sessionStorage.removeItem('user')
  }

  /** 是否登录 */
  static isLogin() {
    return sessionStorage.getItem('isLogin')
  }

  /** 返回token */
  static getToken() {
    return sessionStorage.getItem('user').token
  }

  /**
   * 保存用户登录信息
   * @param parms
   */
  static saveUser(parms) {
    sessionStorage.setItem('user', JSON.stringify(parms));
    this.login()
  }

  /**
   * 用户记住密码
   * @param parms
   * encodeURIComponent 编码
   * decodeURIComponent 解码
   */
  static saveRemember(parms) {
    /** 把[ 密码 ]进行编码 */
    parms.password = encodeURIComponent(parms.password);
    const pwd = sessionStorage.setItem('pwd', parms)
    // todo 存储用户的账户密码
    // if (this.userList.find(item => item.login === parms.login)) {
    //   const {login, password} = parms
    //   this.userList.push({login, password})
    // }
  }
}
