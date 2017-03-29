import lazyLoading from './lazyLoading'

export default {
  meta: {
    label: 'Lovegevity',
    icon: 'fa-laptop',
    expanded: false
  },

  children: [
    {
      name: 'Register',
      path: '/lovegevity/register/',
      meta: {
        link: 'lovegevity/register.vue'
      },
      component: lazyLoading('lovegevity/register')
    }
  ]
}
