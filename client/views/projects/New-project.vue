<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent is-5 is-vertical">
        <article class="tile is-child box">
          <h1 class="title">Welcome board!</h1>
          <div class="block">
            <h2 class="subtitle">Sign up account with us</h2>
           
            <div class="control is-grouped">
              <p class="control is-expanded">
                <input class="input" type="text" v-model="params.first_name" placeholder="First name">
              </p>
              <p class="control is-expanded">
                <input class="input" type="text" v-model="params.last_name" placeholder="Last name">
              </p>
            </div>
             <p class="control">
              <input class="input" type="text" v-model="params.business_name" placeholder="Business name">
            </p>
            <p class="control">
              <input class="input" type="text" v-model="params.phone" placeholder="Phone">
            </p>
            <p class="control">
              <input class="input" type="email" v-model="params.email" placeholder="Email">
            </p>
            <p class="control">
              <input class="input" type="email" placeholder="Confirm email">
            </p>     
          </div>
          <div class="block">
            <h2 class="subtitle">Your account infomation</h2>
            <p class="control">
              <input class="input" type="text" v-model="params.username" placeholder="Username">
            </p>
            <p class="control">
              <input class="input" type="Password" v-model="params.password" placeholder="Password">
            </p>
            <p class="control">
              <input class="input" type="Password" placeholder="Input your password again">
            </p>
          </div>
          <div class="block">
            <h2 class="subtitle">Persona</h2>
            <p class="control">
              <label class="radio">
                    <input type="radio" v-model="params.persona_type" value="1">
                     1
                    </label>
              <label class="radio">
                      <input type="radio" v-model="params.persona_type" value="2">
                          2
                      </label>
              <label class="radio">
                    <input type="radio" v-model="params.persona_type" value="3">
                     3
                    </label>
              <label class="radio">
                    <input type="radio" v-model="params.persona_type" value="4">
                     4
                    </label>
              <label class="radio">
                    <input type="radio" v-model="params.persona_type" value="5">
                     5
                    </label>
              <label class="radio">
                    <input type="radio" v-model="params.persona_type" value="6">
                     6
                    </label>
            </p>
          </div>
          <div class="block">
            <p class="control">
              <button class="button is-primary" v-on:click="newClientRequest">Submit</button>
              <button class="button">Cancel</button>
            </p>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
  import Cleave from 'vue-cleave'
  import 'cleave.js/dist/addons/cleave-phone.cn'
  const api = 'http://127.0.0.1:8000/accounts/register/'
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
          'business_name': '',
          'phone':''
        }
      }
    },
    methods: {
      newClientRequest: function () {
        var jsonData = JSON.stringify(this.params)
        console.log(jsonData)
        return this.$http.post(api, jsonData).then((response) => {
          console.log(response)
        }, function (err) {
          console.log(err)
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~bulma/sass/utilities/mixins';
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
