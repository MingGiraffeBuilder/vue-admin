<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent main-form">
        <article class="tile is-child box is-4">
          <h1 class="title">Horizontal form</h1>
          <div class="block">
            <div class="control is-horizontal">
              <div class="control-label">
                <label class="label">From</label>
              </div>
              <div class="control is-grouped">
                <p class="control is-expanded">
                  <input class="input"
                         type="text"
                         placeholder="Name">
                </p>
                <p class="control is-expanded">
                  <input class="input"
                         type="email"
                         placeholder="Email">
                </p>
              </div>
            </div>
            <div class="control is-horizontal">
              <div class="control-label">
                <label class="label">Subject</label>
              </div>
              <div class="control">
                <div class="select is-fullwidth">
                  <select>
                    <option>General enquiry</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="control is-horizontal">
              <div class="control-label">
                <label class="label">Question</label>
              </div>
              <div class="control">
                <textarea class="textarea"
                          placeholder="Explain how we can help you"></textarea>
              </div>
            </div>
            <div class="control is-horizontal">
              <div class="control-label">
                <label class="label"></label>
              </div>
              <div class="control">
                <button class="button is-primary">Submit</button>
                <button class="button is-link">Cancel</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../../store'
import { TOGGLE_SIDEBAR } from 'vuex-store/mutation-types'

export default {
  components: {
  },
  beforeRouteEnter: (to, from, next) => {
    store.commit(TOGGLE_SIDEBAR, true)
    next()
  }
}
</script>

<style lang="scss" scoped>
@import '~bulma/sass/utilities/mixins';

.main-form {
  margin-left: 200px;
  margin-top: 20px;
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
