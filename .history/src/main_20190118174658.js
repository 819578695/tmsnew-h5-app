// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import axios from 'axios'
import qs from 'qs'
import 'vant/lib/vant-css/index.css'

import utils from './assets/js/utils'
import store from './store/index';

Vue.prototype.$axios = axios
Vue.prototype.$qs = qs
Vue.use(Vant);
Vue.config.productionTip = false
Vue.prototype.utils = utils
// 请求拦截（配置发送请求的信息）
axios.interceptors.request.use(function (config){
  // 处理请求之前的配置
  alert('加载中');
  return config;
  }, function (error){
  // 请求失败的处理
  return Promise.reject(error);
  });
  
 // 响应拦截（配置请求回来的信息）
 axios.interceptors.response.use(function (response){
  // 处理响应数据
  return response;
  }, function (error){
  // 处理响应失败
  return Promise.reject(error);
  });
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
