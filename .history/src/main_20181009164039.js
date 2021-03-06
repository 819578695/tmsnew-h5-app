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
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
