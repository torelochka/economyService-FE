import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '../views/Auth.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Auth',
    component: Auth
  },
  {
    path: '/add-group',
    name: '',
    component: () => import(  '../views/AddGroup.vue')
  },
  {
    path: '/add-m8',
    name: '',
    component: () => import(  '../views/AddM8.vue')
  },
  {
    path: '/m8s',
    name: '',
    component: () => import(  '../views/StudentsList.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
