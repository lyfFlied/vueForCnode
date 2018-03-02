import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/user/login',
      component: () => import('../view/login/login')
    },
    {
      path: '/user/register',
      component: () => import('../view/login/reg')
    },
    {
      path: '/',
      component: () => import('../view/home/index'),
      children: [
        {
          path: '/',
          component: () => import('../view/home/home')
        },
        {
          path: '/payment',
          component: () => import('../view/home/payment')
        },
        {
          path: '/about',
          component: () => import('../view/home/about')
        }
      ]
    }
  ]
})

export default router
