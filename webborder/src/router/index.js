import Vue from 'vue'
import VueRouter from 'vue-router'

import Rundvandring from'../components/Rundvandring.vue'
import Hem from '../views/Hem.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Hem',
    component: Hem
  },
  {
    path: '/Rundvandring',
    name: 'Rundvandring',
    component: Rundvandring
  },

  {
    path: '/KontaktaOss',
    name: 'KontaktaOss',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/KontaktaOss.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
