import lazyLoading from './lazyLoading'

export default {
  meta: {
    label: 'Lovegevity',
    icon: 'fa-laptop',
    expanded: false
  },

  children: [
    {
      name: 'Submit content',
      path: '/lovegevity/submit-content/',
      meta: {
        link: 'lovegevity/submitContent.vue'
      },
      component: lazyLoading('lovegevity/submitContent')
    }
  ]
}
