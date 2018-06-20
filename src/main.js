// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import BoostrapVue from 'bootstrap-vue'

Vue.config.productionTip = false
Vue.use(BoostrapVue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
})

require('bootstrap/dist/css/bootstrap.css')
