<template>
  <div>
  
    <div class="tile is-ancestor">
      <div class="tile is-parent is-4 is-vertical main-form">
        <article class="tile is-child">
          <div class="block">
            <h2 class="subtitle">1. Select Your Persona</h2>
            <p class="control">
              <div class="persona-options"
                   v-on:mouseout="hidePopupBox">
                <div id="popup-box">
                  <p>Select persona {{ persona_type_ready }}</p>
                </div>
                <div class="persona-item"
                     v-on:click="params.persona_type=1"
                     v-on:mouseover="showPopupBox(1)"><img src="~assets/persona_types_1.jpg"></div>
                <div class="persona-item"
                     v-on:click="params.persona_type=2"
                     v-on:mouseover="showPopupBox(2)"><img src="~assets/persona_types_2.jpg"></div>
                <div class="persona-item"
                     v-on:click="params.persona_type=3"
                     v-on:mouseover="showPopupBox(3)"><img src="~assets/persona_types_3.jpg"></div>
                <div class="persona-item"
                     v-on:click="params.persona_type=4"
                     v-on:mouseover="showPopupBox(4)"><img src="~assets/persona_types_4.jpg"></div>
                <div class="persona-item"
                     v-on:click="params.persona_type=5"
                     v-on:mouseover="showPopupBox(5)"><img src="~assets/persona_types_5.jpg"></div>
                <div class="persona-item"
                     v-on:click="params.persona_type=6"
                     v-on:mouseover="showPopupBox(6)"><img src="~assets/persona_types_6.jpg"></div>
              </div>
  
            </p>
            <h2>Your selection: {{ params.persona_type }} </h2>
          </div>
          <div class="block">
            <h2 class="subtitle">
                        2.Tell Us About Yourself</h2>
  
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input"
                       type="text"
                       v-model="params.first_name"
                       placeholder="First name"
                       required>
              </p>
              <p class="control is-expanded">
                <input class="input"
                       type="text"
                       v-model="params.last_name"
                       placeholder="Last name"
                       required>
              </p>
            </div>
            <p class="control">
              <input class="input"
                     type="text"
                     v-model="params.business_name"
                     placeholder="Business name"
                     required>
            </p>
            <p class="control">
              <input class="input"
                     type="text"
                     v-model="params.phone"
                     placeholder="Phone"
                     required>
            </p>
            <p class="control">
              <input class="input"
                     type="email"
                     v-model="params.email"
                     placeholder="Email"
                     required>
            </p>
            <p class="control has-icon has-icon-right">
              <input class="input"
                     type="email"
                     v-model="confirmEmail"
                     placeholder="Confirm email"
                     required>
              <span class="icon is-small"
                    v-if="params.email !== confirmEmail">
                              <i class="fa fa-warning"></i>
                            </span>
              <span class="help is-danger"
                    v-if="params.email !== confirmEmail">Email doesn't match.</span>
            </p>
          </div>
          <div class="block">
            <h2 class="subtitle">3. Register</h2>
            <p class="control">
              <input class="input"
                     type="text"
                     v-model="params.username"
                     placeholder="Username"
                     required>
            </p>
            <p class="control">
              <input class="input"
                     type="Password"
                     v-model="params.password"
                     placeholder="Password"
                     required>
            </p>
            <p class="control has-icon has-icon-right">
              <input class="input"
                     type="Password"
                     v-model="confirmPassword"
                     placeholder="Input your password again"
                     required>
              <span class="icon is-small"
                    v-if="params.password !== confirmPassword">
                                                                        <i class="fa fa-warning"></i>
                                                                      </span>
              <span class="help is-danger"
                    v-if="params.password !== confirmPassword">Password doesn't match.</span>
            </p>
          </div>
  
          <div class="block submit-block">
            <p class="control">
              <button class="button is-primary submit-btn"
                      type="submit"
                      v-on:click="newClientRequest">Sign Up</button>
            </p>
          </div>
          <div class="block">
            <img width="600"
                 src="~assets/bottom-logos.png">
            <h2 class="subtitle">Interested? Give us a call <strong><a href="callto:800-838-4760">800-838-4760</a></strong></h2>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import store from '../../store'
import Notification from 'vue-bulma-notification'
import { TOGGLE_SIDEBAR } from 'vuex-store/mutation-types'

const api = 'http://admin.happyrenovate.com/accounts/register/'

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
    Notification
  },
  data () {
    return {
      params: {
        'first_name': '',
        'last_name': '',
        'email': '',
        'phone': '',
        'password': '',
        'username': '',
        'persona_type': '',
        'business_name': ''
      },
      confirmEmail: '',
      confirmPassword: '',
      isOccupied: true,
      persona_type_ready: 12
    }
  },
  beforeRouteEnter: (to, from, next) => {
    store.commit(TOGGLE_SIDEBAR, false)
    next()
  },
  methods: {
    newClientRequest: function () {
      var jsonData = JSON.stringify(this.params)
      console.log(jsonData)
      if (this.params.persona_type === '') {
        openNotification({
          message: 'Please select 1 persona.',
          type: 'warning',
          duration: 4500
        })
      } else {
        return this.$http.post(api, jsonData).then((response) => {
          openNotification({
            message: 'You submitted successfully!',
            type: 'success',
            duration: 4500
          })
          console.log(response)
        }, err => {
          console.log(err.response.data)
          let message = 'You submitted unsuccessfully! Error: '
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
    },

    showPopupBox: function (selection) {
      document.getElementById('popup-box').style.visibility = 'visible'
      this.persona_type_ready = selection
      document.getElementById('popup-box').style.transform = 'translateX(' + (selection * 70 - 114) + 'px)'
    },

    hidePopupBox: function () {
      document.getElementById('popup-box').style.visibility = 'hidden'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~bulma/sass/utilities/mixins';
#popup-box {
  background-image: url("~assets/popup-box.png");
  height: 64px;
  width: 136px;
  z-index: 1;
  position: absolute;
  padding-top: 14px;
  visibility: hidden;
}

.main-form {
  padding: 50px 0;
  margin: 0 auto;
  text-align: center;
  .submit-block {
    padding-bottom: 5%;
    .button {
      width: 100%
    }
  }
  .persona-options {
    width: 100%;
    display: flex;
    display: -webkit-flex; // background-image: url("~assets/persona_types.jpg");
    background-size: contain;
    background-repeat: no-repeat;
    .persona-item {
      cursor: pointer;
      &:hover {
        background-color: rgba(0, 0, 0, 0.2)
      }
    }
  }
}

.button {
  margin: 5px 0 0;
}

.control .button {
  margin: inherit;
}

.control.has-addons {
  @include mobile() {
    input {
      width: 100%;
    }
    input.is-expanded {
      flex-shrink: 1;
    }
  }
}
</style>
