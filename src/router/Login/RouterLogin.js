import Login from '../../components/Login/Login.vue'
import Home from '../../components/Home.vue'
import Search from '../../components/Search.vue'

export default [{
  path: '/',
  name: 'login',
  component: Login
}, {
  path: '/home',
  name: 'Home',
  component: Home
}, {
  path: '/search',
  name: 'Search',
  component: Search
}]

