<template>
  <div>
    <div class="tile is-ancestor">
  
      <div class="tile is-parent is-3 main-form">
        <article class="tile is-child box">
          <h1 class="title">Login</h1>
          <div class="block">
            <p class="control has-icon">
              <input class="input"
                     type="text"
                     v-model="params.username"
                     @keyup.enter="login"
                     placeholder="Username"
                     required>
  
              <span class="icon is-small">
                          <i class="fa fa-user"></i>
                        </span>
            </p>
            <p class="control has-icon">
              <input class="input"
                     type="password"
                     v-model="params.password"
                     @keyup.enter="login"
                     placeholder="Password"
                     required>
              <span class="icon is-small">
                          <i class="fa fa-lock"></i>
                        </span>
            </p>
            <p class="control">
              <button class="button is-success"
                      type="submit"
                      @click="login">
                Login
              </button>
            </p>
          </div>
        </article>
      </div>
  
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import store from '../../store'
// import router from '../../router'
import Notification from 'vue-bulma-notification'
import { TOGGLE_SIDEBAR } from 'vuex-store/mutation-types'

const API = 'http://127.0.0.1:8000/accounts/'
const LOGIN_API = API + 'get_auth_token/'

const NotificationComponent = Vue.extend(Notification)

const openNotification = (propsData = {
  title: '',
  message: '',
  type: '',
  direction: '',
  duration: 4500,
  container: '.notifications'
}) => {
  return new NotificationComponent({
    el: document.createElement('div'),
    propsData
  })
}

export default {
  components: {
  },
  data () {
    return {
      params: {
        username: '',
        password: ''
      }
    }
  },
  beforeRouteEnter: (to, from, next) => {
    store.commit(TOGGLE_SIDEBAR, false)
    next()
  },
  updated: function () {
    store.commit(TOGGLE_SIDEBAR, false)
  },
  methods: {
    login () {
      var jsonData = JSON.stringify(this.params)
      this.$http.post(LOGIN_API, jsonData).then((response) => {
        window.localStorage.token = response.data.token
        console.log(response.data.token)
        this.$router.push('/lovegevity/submit-content')
      }).catch((err) => {
        console.log(err)
        let message = 'Please verify your input! Error: '
        for (const key of Object.keys(err.response.data)) {
          message += key + ': ' + err.response.data[key] + ' '
        }
        openNotification({
          message: message,
          type: 'danger',
          duration: 4500
        })
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.main-form {
  margin: 10% auto;
}
</style>
