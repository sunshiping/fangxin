import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import IndexRoutes from './router/Index'
import { LoadingPlugin } from 'vux'
import BaiduMap from 'vue-baidu-map'

Vue.use(LoadingPlugin)
Vue.use(VueRouter)
Vue.use(BaiduMap, {
  ak: 'acVjM68TDK4lG61YpLQhGeCTzuyokf53'
})

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
