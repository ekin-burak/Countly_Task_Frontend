import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/movieDetails',
    name: 'Movie',
    component: () => import(/* webpackChunkName: "movie" */ '../views/MovieDetails.vue')
  },
  {
    path: '/createReview',
    name: 'Review',
    component: () => import(/* webpackChunkName: "review" */ '../views/createReview.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
