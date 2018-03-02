import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/user/login',
      component: () => import('../components/account/login')
    },
    {
      path: '/user/register',
      component: () => import('../components/account/reg')
    },
    {
      path: '/',
      component: () => import('../components/common/common'),
      children: [
        {
          path: '/',
          component: () => import('../components/article/index')
        },
        {
          path: '/payment',
          component: () => import('../components/other/payment')
        },
        {
          path: '/about',
          component: () => import('../components/other/about')
        }
      ]
    }
  ]
})

export default router
