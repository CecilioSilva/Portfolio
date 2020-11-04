import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About'
import Contact from '../views/Contact'
import Firstwebsite from '../views/Firstwebsite'
import Database from '../views/Database'
import Room from '../views/Room'
import Proceduralgen from '../views/Proceduralgen'
import Mazegen from '../views/Mazegen'
import Conway from '../views/Conway'
import Portfolio from '../views/Portfolio'
import Risingofthefireboi from '../views/Risingofthefireboi'
import Pagenotfound from '../views/Pagenotfound'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/firstwebsite',
    name: 'firstwebsite',
    component: Firstwebsite
  },
  {
    path: '/database',
    name: 'database',
    component: Database
  },
  {
    path: '/room',
    name: 'room',
    component: Room
  },
  {
    path: '/proceduralgen',
    name: 'proceduralgen',
    component: Proceduralgen
  },
  {
    path: '/mazegen',
    name: 'mazegen',
    component: Mazegen
  },
  {
    path: '/conway',
    name: 'conway',
    component: Conway
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio
  },
  {
    path: '/risingofthefireboi',
    name: 'risingofthefireboi',
    component: Risingofthefireboi
  },
  {
    path: '*',
    component: Pagenotfound
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
