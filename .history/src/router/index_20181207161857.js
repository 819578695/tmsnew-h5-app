import Vue from 'vue'
import Router from 'vue-router'


import order from '@/views/order'
import user from '@/views/user/index'
import reporting from '@/views/reportTable/index'
import login from '@/views/login'
import reporting from '@/components/orderDetails'

// 首页
const Indexs = [
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/',
    name: 'order',
    component: order
  },
  {
    path: '/user',
    name: 'user',
    component: user
  },
  {
    path: '/reporting',
    name: 'reporting',
    component: reporting
  },
]
// 报表中心
import dashBoard from '@/views/reportTable/dashBoard'
import make from '@/views/reportTable/make'
import warranty from '@/views/reportTable/warranty'
const Table = [
  {
    path: '/dashBoard',
    name: 'dashBoard',
    component: dashBoard
  },
  {
    path: '/make',
    name: 'make',
    component: make
  },
  {
    path: '/warranty',
    name: 'warranty',
    component: warranty
  },
]

import updataPsd from '@/views/user/updataPsd'
import record from '@/views/user/record'

const User = [
  {
    path: '/updataPsd',
    name: 'updataPsd',
    component: updataPsd
  },
  {
    path: '/record',
    name: 'record',
    component: record
  },
]

const route = [].concat(
  Indexs,Table,User
)


Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: route
})
