// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Show from './components/Show'
import Index from './components/Index'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/show/:id', component: Show },
  { path: '/', component: Index }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
