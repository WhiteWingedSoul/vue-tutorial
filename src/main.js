// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// import the vue instance
import Vue from 'vue'

// import the App component
import App from './App'

// import the App2 component
import App2 from './App2'

// import the vue router
import VueRouter from 'vue-router'

// tell vue to use the router
Vue.use(VueRouter)
// define your routes
const routes = []

// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes, //short for routes: routes
  mode: 'history' //declare mode to 'history' to prevent # appear in URL
})

// instantiate the vue instance
new Vue({
  //define the selector for the root component
  el: '#app',
  // declare component(s) that the root component can access
  // components: { App2 },
  components: { App },
  // pass the template to the root component
  // right now we're just delegating root template to App component's template
  // but you can insert DOM elements in here as well if you like
  // template: '<App2/>',
  template: '<App/>'
  // pass in the router to the Vue instance
  // router,
})

require('../node_modules/bootstrap/dist/css/bootstrap.min.css')
