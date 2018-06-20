// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import App2 from './App2'

Vue.config.productionTip = false
new Vue({
  el: '#app',
  components: { App2 },
  template: '<App2/>',
})

require('../node_modules/bootstrap/dist/css/bootstrap.min.css')
