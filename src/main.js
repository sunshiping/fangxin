import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import IndexRoutes from './router/Index'
import { LoadingPlugin } from 'vux'

Vue.use(LoadingPlugin)
Vue.use(VueRouter)

const routes = IndexRoutes

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
