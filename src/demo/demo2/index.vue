<template>
<div>
  <div class="menutree"></div>
</div>
</template>
<script>
  import Vue from 'vue'
  import Menutree from '../../lib'
  import menuData from './menudata.json'

  Vue.use(Menutree, {
    menuData,
    open: 0,
    arrowLeft: -8,
    animation:2,
    arrow:["fa fa-angle-down", 180],
    arrowSize:12
  })
  // Vue.prototype.$menuMouseOver = (r) => {
  //   if (typeof r !== 'undefined') {
  //     console.log(r)
  //   }
  // }
  export default {
  }
</script>
<style>
@import url('./font-awesome-4.7.0/css/font-awesome.min.css');
.lt-branch{
  height: 50px;
  font-size: 14px;
  line-height: 50px;
  padding-left:30px;
  background:rgb(48, 65, 86);
  color:rgb(191, 203, 217);
  cursor: pointer;
}
.lt-branch:hover{
  background:rgb(38, 52, 69);
}
.lt-branch span{
  /* margin-left:15px; */
}
.lt-branch-icon{
  color:#ccc;
}
.lt-branch-arrow{
  color:rgb(182, 180, 180);
}
.lt-branch_level_2{
  background:#1f2d3d;
}
.lt-branch_level_2:hover{
  background:#001528;
}
.lt-branch_active, .lt-branch_active .lt-branch-icon{
  color:rgb(64, 158, 255);
}
</style>
