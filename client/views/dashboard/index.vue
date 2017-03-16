<template>
  <div>
    <div class='tile is-ancestor'>
      <div class='tile is-parent'>
        <article class='tile is-child box'>
          <p class='title'>Project Table</p>
          <table class='table is-bordered is-striped is-narrow' v-model='projects'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Dev Site Url</th>
                <th>Create Time</th>
              </tr>
            </thead>
              <tr v-for='project in projects' >
                <td>{{project.name}}</td>
                <td>{{project.dev_url}}</td>
                <td>{{project.create_time}}</td>
              </tr>
            <tbody>
            </tbody>
            </table>
        </article>
      </div>
      
    </div>
  </div>
</template>

<script>
import Chart from 'vue-bulma-chartjs'

const api = 'http://127.0.0.1:8000/api/project/'

export default {
  components: {
    Chart
  },

  data () {
    return {
      projects: []
    }
  },
  methods: {
    getProjects: function () {
      return this.$http.get(api).then((response) => {
        console.log(response.data)
        this.$set('projects', response.data)
      }, function (err) {
        console.log(err)
      })
    }
  },
  created: function () {
    console.log('starting')
    this.getProjects()
  },
  computed: {
    // projectData(){
    //   return {
    //     projects: this.projects
    //   }
    // }
  }
}
</script>

<style lang='scss' scoped>
</style>
