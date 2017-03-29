<template>
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
         <p>
          <img width="50" src="~assets/logo-short.png" :alt="description">
        </p>
        <p>© 2017 <a :href="'https://giraffebuilder.com'">GiraffeBuilder</a>. All Rights Reserved
          <p>515 S. Flower St. Ste. 3600</p>
          <p>Los Angeles, CA 90071</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {

  data () {
    return this.$store.state.pkg
  }

}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/mixins';

.footer {
  // margin-left: 180px;
  padding: 1.5rem;
  border-top: 3px solid #cccccc;
  background-color: #efefef;
  @include mobile() {
    margin-left: 0;
  }
  
  .social a {
    border-bottom: none !important;
  }

  .fa.fa-heart {
    color: red;
  }
}
</style>
