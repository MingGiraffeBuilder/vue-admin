<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent is-4 is-vertical main-form">
        <article class="tile is-child box">
          <div class="block">
            <h2 class="subtitle">Are you sure to logout?</h2>
            <button class="button is-danger"
                      type="submit"
                      @click="logout">Log out</button>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {

    }
  },
  methods: {
    logout: function () {
      window.localStorage.token = ''
      this.$router.push('/lovegevity/login/')
    }
  }
}
</script>

<style lang="scss" scoped>
.main-form {
  margin: 10% auto;
}
</style>
