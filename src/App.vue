<template>
  <div id="app">
    <div class="listtree"></div>
  </div>
</template>

<script>
import Vue from 'vue'
import Listtree from './lib'
import listData from './listdata.json'

Vue.use(Listtree, {
  listData,
  arrowSize: 10,
  // arrowLeft: -8,
  open: 1,
  icon: 4
  // animation: false
})
Vue.prototype.$listClick = (r) => {
  // console.log(r)
}
export default {
}
</script>

<style>
</style>
