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
var html='<div hidden id="showLoading" align="center" style="margin: auto;position: fixed;top: 0;right:0;bottom: 0;left: 0;z-index: 9999;width: 100%;height: 100%;overflow: hidden;outline: 0; -webkit-overflow-scrolling: touch;background-color: rgb(0, 0, 0);filter: alpha(opacity=60); background-color: rgba(0, 0, 0, 0.6); "><img src="/static/images/loading.gif" style="width:80px;height: 80px;position: absolute;top: 50%;left: 50%;"></div>';
document.getElementById('app').appendChild(html);
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
