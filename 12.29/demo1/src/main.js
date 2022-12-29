import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import jquery from '../src/js/jquery';
Vue.prototype.$ = jquery;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
