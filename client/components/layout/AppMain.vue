<template>
  <section class="app-main">
    <div class="container is-fluid is-marginless is-paddingless app-content">
      <!--<levelbar></levelbar>-->
      <transition mode="out-in"
                  enter-active-class="fadeIn"
                  leave-active-class="fadeOut"
                  appear>
        <router-view class="animated"></router-view>
      </transition>
    </div>
  </section>
</template>

<script>
// import Levelbar from './Levelbar'
export default {
  // components: {
  //   Levelbar,
  //   Navbar,
  //   Sidebar
  // }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/variables';
@import '~bulma/sass/utilities/mixins';
.app-main {
  background-color: #fff;
  padding-top: 100px;
  margin: 0 auto;
  transform: translate3d(0, 0, 0);
  @include mobile() {
    margin-left: 0;
  }
}

.app-content {
  padding: 20px;
}
</style>
