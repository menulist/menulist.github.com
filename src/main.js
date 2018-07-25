import Vue from 'vue'
import Demo from './demo/index.vue'
import router from './router.js'

new Vue({
  el: '#app',
  router: router,
  components: { Demo },
  template: '<Demo/>'
})
