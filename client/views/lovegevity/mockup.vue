<template>
  <div>
    <div class="tile is-ancestor main-content">
      <div class="tile is-parent is-6 is-vertical inner-content">
        <article class="tile is-child">
          <div class="block banner-top">
            <h1 class="title">{{ params.business_name }}</h1>
            <h2 class="subtitle"> Are You Ready For Your Dream <br /> Wedding & Events Business Website?</h2>
            <img src="~assets/center_image.png">
          </div>
        </article>
      </div>
    </div>
    <div class="tile is-ancestor main-content">
      <div class="tile is-parent is-6 is-vertical inner-content">
        <article class="tile is-child">
          <div class="block">
            
          </div>
        </article>
      </div>
    </div>
     <div class="tile is-ancestor main-content">
      <div class="tile is-parent is-6 is-vertical inner-content">
        <article class="tile is-child">
          <div class="block">
            
          </div>
           <div class="block">
            <img width="600" src="~assets/bottom-logos.png">
            <h2 class="subtitle">Interested? Give us a call <strong><a href="tel:800-838-4760">800-838-4760</a></strong></h2>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import Cleave from 'vue-cleave'
import 'cleave.js/dist/addons/cleave-phone.cn'

const api = 'http://localhost:8000/accounts/get_via_email/'

export default {
  components: {
    Cleave
  },
  data () {
    return {
      params: {
        'business_name': '',
        'persona_type': '',
        'email': ''
      }
    }
  },
  beforeMount () {
    this.params.business_name = this.$route.params.business_name
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

.main-content {
  padding: 50px 0;
  background-color: #0594f6;
  .inner-content{
  margin: 0 auto;
  text-align: center;
  
  .banner-top {
    height: 400px;
    
  }
  .title {
    font-weight: 700;
    font-size: 55px;
    line-height: 70px;
    color: #fff;
  }
  .subtitle {
    font-weight: 300;
    font-size: 36px;
    line-height: 42px;
    color:#fff;
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
