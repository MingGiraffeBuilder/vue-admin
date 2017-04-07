<template>
  <div class="content has-text-centered">
    <p>
      <img width="200" src="~assets/logo-long.png" :alt="description">
    </p>

    <h1 class="is-title is-bold">{{ name.replace('-', ' ') }}</h1>
    
    <p>
      <strong>{{ description }}</strong>,
      <a :href="homepage">Live Demo</a>
    </p>
  </div>
</template>

<script>
import store from '../store'
import { TOGGLE_SIDEBAR } from 'vuex-store/mutation-types'
export default {
  data () {
    return this.$store.state.pkg
  },
  beforeRouteEnter: (to, from, next) => {
    store.commit(TOGGLE_SIDEBAR, true)
    next()
  }
}
</script>

<style lang="scss" scoped>
.content{
  margin-top: 200px;
}
.is-title {
  text-transform: capitalize;
}
</style>
