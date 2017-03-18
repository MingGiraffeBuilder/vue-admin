<template>
    <div>
        <div class="tile is-ancestor">
            <div class="tile is-parent is-5 is-vertical">
                <article class="tile is-child box">
                    <h1 class="title">States</h1>
                    <div class="block">
                        <h2 class="subtitle">Loading</h2>
                        <p class="control is-loading">
                        <input class="input" type="text" placeholder="Project name">
                        </p>
                        <p class="control is-loading">
                            <textarea class="textarea" placeholder="Project description"></textarea>
                        </p>
                    </div>
                    <div class="block">
                        <p class="control">
                        <button class="button is-primary" disabled>Submit</button>
                        <button class="button" disabled>Cancel</button>
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

export default {
  components: {
    Cleave
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
