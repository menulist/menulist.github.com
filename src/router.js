import Vue from 'vue'
import Router from 'vue-router'
// const demo1 = function () { return import('./demo/demo1') }
// const demo2 = function () { return import('./demo/demo2') }

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      // component: demo1
      component: function (resolve) {
        return require(['./demo/demo1'], resolve)
      }
    },
    {
      path: '/demo2',
      // component: demo2
      component: function (resolve) {
        return require(['./demo/demo2'], resolve)
      }
    }
  ]
})