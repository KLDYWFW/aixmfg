import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Supermarket from '@/components/Supermarket'
import Rserve from '@/components/Rserve'
import Car from '@/components/Car'
import Mine from '@/components/Mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/supermarket',
      name: 'Supermarket',
      component: Supermarket
    },
    {
      path: '/rserve',
      name: 'Rserve',
      component: Rserve
    },
    {
      path: '/car',
      name: 'Car',
      component: Car
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
