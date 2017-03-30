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
    <div class="tile is-ancestor middle-content">
      <div class="tile is-parent is-6 is-vertical inner-content">
        <article class="tile is-child">
          <div class="block left-content">
            <p><strong> See the website we designed for you!</strong></p>
            <p>{{ params.business_name }}</p>
          </div>
          <div class="block">
            <p class="control">
              <a class="button is-primary signup-btn" href="https://giraffebuilder.com">See the website!</a>
            </p>
          </div>
        </article>
      </div>
    </div>
    <div class="tile is-ancestor third-content">
      <div class="tile is-parent is-6 inner-content">
        <article class="tile is-child">
          <div class="columns">
            <div class="column">
              <div class="row">
                <h2 class="subtitle"><i class="fa fa-cogs" aria-hidden="true"></i> Fully Customizable</h2>
                <p>Work with our design team to create the custom look that you want. Personalize fonts, colors, and images.</p>
              </div>
              <div class="row">
                <h2 class="subtitle"><i class="fa fa-expand" aria-hidden="true"></i> Responsive Design</h2>
                <p>Your website will be optimized and will look great on every display. Whether it be a desktop monitor, tablet, or mobile phone.</p>
              </div>
              <div class="row">
                <h2 class="subtitle"><i class="fa fa-twitter" aria-hidden="true"></i> Social Media Plugins</h2>
                <p>Easily connect your blog, facebook, Instagram, Twitter, and linkedin pages to stay in contact with your customers.</p>
              </div>
            </div>
            <div class="column">
             <div class="row">
                <div class="row">
                <h2 class="subtitle"><i class="fa fa-search" aria-hidden="true"></i> SEO Optimized</h2>
                <p>We’ll make sure your company is found in search results of popular sites like Google, Yahoo, and Bing.</p>
              </div>
              <div class="row">
                <h2 class="subtitle"><i class="fa fa-thumbs-up" aria-hidden="true"></i> Superior Customer Service</h2>
                <p>Our team of customer service reps are always on hand if you need us. Call anytime and speak with a real person not a machine.</p>
              </div>
              <div class="row">
                <h2 class="subtitle"><i class="fa fa-bar-chart" aria-hidden="true"></i> Powerful Analytics</h2>
                <p>View the traffic coming to your site, see who your customers are and how they found your website.</p>
              </div>
              </div>
            </div>
          </div>
          <div class="block footer-logos">
            <img width="600"
                 src="~assets/bottom-logos.png">
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
    this.params.business_name = this.$route.params.business_name.replace(/_/g, ' ')
    this.params.persona_type = this.$route.params.persona_type
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
  .inner-content {
    margin: 0 auto;
    text-align: center;
    
    .banner-top {
      max-height: 500px;
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
      color: #fff;
    }
  }
}

.middle-content {
  padding-top: 70px;
  padding-bottom: 30px;
  background-color: #f2f2f2;
  .inner-content {
    margin: 0 auto;
    font-size: 18px;

    .left-content {
      float: left;
    }
    
    .signup-btn {
      padding: 5px 50px;
      float: right;
      font-size: 18px;
      background-color: #ffbf00;
    }
  }
}

.third-content {
  background-color: #ffffff;
  padding-top: 50px;
  padding-bottom: 50px;
  .inner-content {
    margin: 0 auto;
    .row{
      margin-bottom: 50px;
    }

    .row .subtitle{
      font-weight: 700;
      .fa{
        font-size: 25px;
        color: #0594f6;
      }
    }
      .footer-logos{
      text-align: center;
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
