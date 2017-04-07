import Vue from 'vue'
import Router from 'vue-router'
import menuModule from 'vuex-store/modules/menu'
import store from '../store'
import { TOGGLE_SIDEBAR } from 'vuex-store/mutation-types'
Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      name: 'Home',
      path: '/',
      component: require('../views/Home')
    },
    {
      name: 'Login',
      path: '/lovegevity/login',
      component: require('../views/auth/login')
    },
    {
      name: 'Register',
      path: '/lovegevity/register',
      component: require('../views/lovegevity/register')
    },
    {
      name: 'Your personal mockup',
      path: '/lovegevity/mockup/:persona_type/:username/:business_name',
      component: require('../views/lovegevity/mockup'),
      beforeEnter: (route, redirect, next) => {
        store.commit(TOGGLE_SIDEBAR, false)
        next()
      }
    },
    ...generateRoutesFromMenu(menuModule.state.items),
    {
      path: '*',
      redirect: '/lovegevity/login',
      beforeEnter: (route, redirect, next) => {
        store.commit(TOGGLE_SIDEBAR, true)
        next()
      }
    }
  ]
})

// Menu should have 2 levels.
function generateRoutesFromMenu (menu = [], routes = []) {
  for (let i = 0, l = menu.length; i < l; i++) {
    let item = menu[i]
    if (item.path) {
      routes.push(item)
    }
    if (!item.component) {
      generateRoutesFromMenu(item.children, routes)
    }
  }
  return routes
}
