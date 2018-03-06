/**
 * user
 */

import Vue from 'vue'
import {LoginApi} from '@/tools/api'
import * as types from './user-types'

const AUTH_TOKEN = 'auth.token'
const AUTH_USER = 'auth.user'
const ACCOUNT_PWD = 'auth.accountPwd'
const IS_LOGIN = 'auth.isLogin'

export default {
  state: {
    auth: {
      /** token */
      token: sessionStorage.getItem(AUTH_TOKEN),
      /** 用户登陆角色信息 */
      user: JSON.parse(sessionStorage.getItem(AUTH_USER)),
      /** 用户登陆账户密码 */
      accountPwd: JSON.parse(sessionStorage.getItem(ACCOUNT_PWD)),
      /** 是否登陆 */
      isLogin: sessionStorage.getItem(IS_LOGIN),
    }
  },
  /** 计算属性 */
  getters: {
    // doneTodos: state => {
    //   return state.todos.filter(value => value.done)
    // }
  },
  /** 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation */
  mutations: {
    ACCOUNT_AUTH_STATUS_CHANGED(state, data) {
      if (data.params.remember) {
        Vue.set(state.auth, 'accountPwd', data.params)
        window.sessionStorage.setItem(ACCOUNT_PWD, JSON.stringify(data.params))
      }
      Vue.set(state.auth, 'token', data.token)
      Vue.set(state.auth, 'user', data.staffs[0])
      Vue.set(state.auth, 'isLogin', true)
      window.sessionStorage.setItem(AUTH_TOKEN, data.token)
      window.sessionStorage.setItem(AUTH_USER, JSON.stringify(data.staffs[0]))
      window.sessionStorage.setItem(IS_LOGIN, true)
    },
    ACCOUNT_LOGOUT_FAILURE(state) {
      Vue.set(state.auth, 'accountPwd', null)
      Vue.set(state.auth, 'token', null)
      Vue.set(state.auth, 'user', null)
      Vue.set(state.auth, 'isLogin', false)
      window.sessionStorage.removeItem(AUTH_TOKEN)
      window.sessionStorage.removeItem(AUTH_USER)
      window.sessionStorage.removeItem(IS_LOGIN)
      window.sessionStorage.removeItem(ACCOUNT_PWD)
    },
  },
  /** Action 提交的是 mutation，而不是直接变更状态。Action 可以包含任意异步操作。 */
  actions: {
    accountLoginSubmit({commit}, params) {
      return LoginApi.login(params).then((res) => {
        commit(types.ACCOUNT_AUTH_STATUS_CHANGED, {...res, params})
      }).catch(() => {
        commit(types.ACCOUNT_LOGOUT_FAILURE)
      })
    },
    accountLogoutSubmit({commit}) {
      LoginApi.logout().then(res => {
        commit(types.ACCOUNT_LOGOUT_FAILURE)
      })
    }
  }
}
