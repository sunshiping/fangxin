import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import IndexRoutes from './router/Index'
import { LoadingPlugin } from 'vux'
import BaiduMap from 'vue-baidu-map'
import axios from 'axios'

import AMap from 'vue-amap'
import { lazyAMapApiLoaderInstance } from 'vue-amap'

// 高德地图
Vue.use(AMap)
AMap.initAMapApiLoader({
  key: '9cd18b1302a652d9da36e189f09104ae',
  plugin: [
    'AMap.Autocomplete',
    'AMap.PlaceSearch',
    'AMap.Scale',
    'AMap.OverView',
    'AMap.ToolBar',
    'AMap.MapType',
    'AMap.PolyEditor',
    'AMap.CircleEditor'
  ]
})

lazyAMapApiLoaderInstance.load().then(() => {
  // your code ...
  this.map = new AMap.Map('amapContainer', {
    center: new AMap.LngLat(121.59996, 31.197646)
  })
})

Vue.prototype.$axios = axios

// Vue.use(axios)
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
