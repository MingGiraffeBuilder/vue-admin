<template>
  <div>
    <div class="tile is-ancestor">
  
      <div class="tile is-parent is-3 main-form">
        <article class="tile is-child box">
          <h1 class="title">Login</h1>
          <div class="block">
            <p class="control has-icon">
              <input class="input"
                     type="email"
                     v-model="params.email"
                     placeholder="Email">
              <span class="icon is-small">
                        <i class="fa fa-envelope"></i>
                      </span>
            </p>
            <p class="control has-icon">
              <input class="input"
                     type="password"
                     v-model="params.password"
                     placeholder="Password">
              <span class="icon is-small">
                        <i class="fa fa-lock"></i>
                      </span>
            </p>
            <p class="control">
              <button class="button is-success">
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
import store from '../../store'
import { TOGGLE_SIDEBAR } from 'vuex-store/mutation-types'

const API = 'http://127.0.0.1:8000/accounts/'
const LOGIN_API = API + 'login'

export default {
  components: {
  },
  data () {
    return {
      params: {
        email: '',
        password: ''
      }
    }
  },
  beforeRouteEnter: (to, from, next) => {
    store.commit(TOGGLE_SIDEBAR, false)
    next()
  },
  methods: {
    login: () => {
      var jsonData = JSON.stringify(this.params)
      return this.$http.post(LOGIN_API, jsonData).then((response) => {
        window.localStorage.token = response.data.token
      }).catch((error) => {
        console.log(error)
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
