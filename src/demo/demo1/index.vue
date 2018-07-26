<template>
<div>
  <div class="menulist"></div>
</div>
</template>
<script>
import Vue from 'vue'
import Menutree from 'menulist'
import menuData from './menudata.json'
// Vue.use(Menutree, {
//   menuData,
//   arrow: 0,
//   indent: 18,
//   open: ['always', 0, 1],
//   animation: 1,
//   eventArea: 'content'
// })

  let MTree = new Menutree(menuData, {
    arrow: 0,
    indent: 18,
    open: ['always', 0, 1],
    animation: 1,
    eventArea: 'content'
  })

Vue.prototype.$menuClick = function (r) {
  if (typeof r !== 'undefined') {
    console.log(r)
  }
}

export default {
}
</script>
<style>
.ml-branch{
  margin: 14px 0px;
  background: #fff;
}
.ml-branch span{
  color: #7f8c8d;
  cursor: pointer;
  font-size: 15px;
}
.ml-branch_level_1 span{
  margin-left:18px;
  color: #2c3e50;
  font-weight: 600;
  font-size: 20px;
  cursor: auto;
}
.ml-branch_level_0 span{
  color:#34495e;
}
.ml-branch_level_2 span:hover{
  border-bottom:2px solid #42b983; 
}
.ml-branch_level_2 span{
  color: #7f8c8d;
}
.ml-branch_active span{
  color:#42b983;
  font-weight: bold;
}
.ml-branch_level_2_active span{
  color:#42b983;
  font-weight: 600;
}
</style>
