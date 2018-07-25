import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import release from '@/views/release'
import details from '@/views/details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
      {
          path: '/release',
          name: 'release',
          component: release
      },
      {
          path: '/details',
          name: 'details',
          component: details
      }
  ]
})
