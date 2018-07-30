import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
// import { SSL_OP_CISCO_ANYCONNECT } from 'constants'
// import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)
export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/city',
    name: 'City',
    component: City
  }, {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }]
})
