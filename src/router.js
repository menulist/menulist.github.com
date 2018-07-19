import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: (resolve) => require(['./App'], resolve),
      // component: require('./App'),
      name: 'app',
      redirect: '/demo1'
    },
    {
      path: '/demo1',
      component: (resolve) => require(['./demo/demo1'], resolve),
      // component: require('./demo/demo1'),
      name: 'demo1'
    },
    {
      path: '/demo2',
      component: (resolve) => require(['./demo/demo2'], resolve),
      // component: require('./demo/demo2'),
      name: 'demo2'
    }
  ]
})