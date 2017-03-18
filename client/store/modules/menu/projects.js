import lazyLoading from './lazyLoading'

export default {
  meta: {
    label: 'Projects',
    icon: 'fa-laptop',
    expanded: false
  },

  children: [
    {
      name: 'New Project',
      path: '/new-project',
      meta: {
        link: 'projects/New-project.vue'
      },
      component: lazyLoading('projects/New-project')
    }
  ]
}
