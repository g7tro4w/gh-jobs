import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/pages/Search'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Search
    },
    {
      path: '/:id',
      name: 'Vacancy',
      component: () => import('@/pages/Vacancy')
    }
  ]
})
