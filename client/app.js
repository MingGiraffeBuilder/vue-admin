import Vue from 'vue'
import axios from 'axios'
import NProgress from 'vue-nprogress'
import VueResource from 'vue-resource'
import VueValidator from 'vue-validator'
import { sync } from 'vuex-router-sync'
import App from './App.vue'
import router from './router'
import store from './store'
import * as filters from './filters'
import { TOGGLE_SIDEBAR } from 'vuex-store/mutation-types'

Vue.prototype.$http = axios
Vue.axios = axios
Vue.use(VueValidator)
Vue.use(NProgress)
Vue.use(VueResource)
Vue.http.headers.common['Content-Type'] = 'application/json'

// Enable devtools
Vue.config.devtools = true

sync(store, router)

const nprogress = new NProgress({ parent: '.nprogress-container' })

const { state } = store

router.beforeEach((route, redirect, next) => {
  if (state.app.device.isMobile && state.app.sidebar.opened) {
    store.commit(TOGGLE_SIDEBAR, false)
  }
  next()
})

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

const app = new Vue({
  router,
  store,
  nprogress,
  ...App
})

export { app, router, store }
