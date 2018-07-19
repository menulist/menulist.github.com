import Vue from 'vue'
import Demo from './demo/index.vue'
import router from './router.js'
import 'babel-polyfill'

new Vue({
  el: '#app',
  router,
  components: { Demo },
  template: '<Demo/>'
})
