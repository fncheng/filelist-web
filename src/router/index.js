import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index'
import Test from '../views/Test.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/index', redirect: '/' },
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/test',
    name: 'test',
    component: Test
  }
]

// 关于hash模式与history模式的选择
// https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90%8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
