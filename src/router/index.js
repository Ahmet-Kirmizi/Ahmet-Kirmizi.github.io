import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import portfolio from '../views/portfolio.vue'
import about from '../views/about.vue'
import RestApi from  '../views/RestApi.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blog',
    name: 'blog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/blog.vue')
  },
  {
    path: '/portfolio',
    name : portfolio,
    component : portfolio
  },
  {
    path: '/about',
    name : about,
    component : about
  },
  {
    path: '/RestApi',
    name : RestApi,
    component : RestApi
  }
]

const router = new VueRouter({
  routes
})

export default router
