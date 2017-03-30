<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent is-4 is-vertical main-form">
        <article class="tile is-child">
          <div class="block">
            <h2 class="subtitle">1. Select Your Persona</h2>
            <p class="control">
              <div class="persona-options">
                <div class="persona-item" v-on:click="params.persona_type=1"><img src="~assets/persona_types_1.jpg"></div>
                <div class="persona-item" v-on:click="params.persona_type=2"><img src="~assets/persona_types_2.jpg"></div>
                <div class="persona-item" v-on:click="params.persona_type=3"><img src="~assets/persona_types_3.jpg"></div>
                <div class="persona-item" v-on:click="params.persona_type=4"><img src="~assets/persona_types_4.jpg"></div>
                <div class="persona-item" v-on:click="params.persona_type=5"><img src="~assets/persona_types_5.jpg"></div>
                <div class="persona-item" v-on:click="params.persona_type=6"><img src="~assets/persona_types_6.jpg"></div>
              </div>
              
            </p>
            <h2>Your selection: {{ params.persona_type}} </h2>
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
            <img width="600" src="~assets/bottom-logos.png">
            <h2 class="subtitle">Interested? Give us a call <strong><a href="callto:800-838-4760">800-838-4760</a></strong></h2>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import Cleave from 'vue-cleave'
import 'cleave.js/dist/addons/cleave-phone.cn'

const api = 'http://admin.happyrenovate.com/accounts/register/'

export default {
  components: {
    Cleave
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
      isOccupied: true
    }
  },
  methods: {
    newClientRequest: function () {
      var jsonData = JSON.stringify(this.params)
      console.log(jsonData)
      this.$el.querySelector('button.submit-btn').classList.add('is-loading')
      return this.$http.post(api, jsonData).then((response) => {
        console.log(response)
        this.$el.querySelector('button.submit-btn').classList.remove('is-loading')
      }, function (err) {
        console.log(err)
        this.$el.querySelector('button.submit-btn').classList.remove('is-loading')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~bulma/sass/utilities/mixins';

.main-form {
  padding: 50px 0;
  margin: 0 auto;
  text-align: center;
  .submit-block{
    padding-bottom: 5%;
    .button{
      width: 100%
    }
  }

  .persona-options{
    width: 100%;
    display: flex;
    display: -webkit-flex;
    // background-image: url("~assets/persona_types.jpg");
    background-size: contain;
    background-repeat: no-repeat;
    .persona-item {
      cursor: pointer;
      &:hover{
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
