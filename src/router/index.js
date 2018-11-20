import Vue from 'vue'
import Router from 'vue-router'
import Logion from '@/page/login'
import Home from '@/components/front/Home'
import managmentHome from '../components/management/home'
import test1 from '../components/management/user/test1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Logion
    }, {
      path: '/front/home',
      name: 'Home',
      component: Home
    }, {
      path: '/managment/home',
      name: 'managmentHome',
      component: managmentHome,
      children: [{
        path: '/managment/test1/:id',
        name: 'test1',
        component: test1
      }]
    }, {
      path: '/managment/home',
      name: 'managmentHome',
      component: managmentHome,
      children: [{
        path: '/managment/test1/:id',
        name: 'test1',
        component: test1
      }]
    }
  ]
})
