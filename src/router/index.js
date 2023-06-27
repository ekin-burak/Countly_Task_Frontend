import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/createReview',
    name: 'Review',
    component: () => import(/* webpackChunkName: "review" */ '../views/createReview.vue')
  },
  {
    path: '/movies/:id',
    name: 'MovieDetails',
    component: () => import(/* webpackChunkName: "movieDetails" */ '../views/MovieDetails.vue'), 
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
