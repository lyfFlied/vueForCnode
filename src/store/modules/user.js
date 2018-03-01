import {LoginApi} from '@/api/api'

const state = {
  // 用户登录状态
  loginStatus: JSON.parse(sessionStorage.getItem('loginStatus')) || false,
  // 用户登录信息
  userInfo: JSON.parse(sessionStorage.getItem('userInfo')) || {},
  // 用户数据信息
  userData: []
}

export default {
  state,
}