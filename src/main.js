// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import './css/comment.css'
import 'element-ui/lib/theme-chalk/index.css'
import axios from './axios'// 通过import引入
import Vuex from 'vuex'
Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'small' })
Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  axios, // 通过import引入，然后在这里调用
  components: { App },
  template: '<App/>'
})
