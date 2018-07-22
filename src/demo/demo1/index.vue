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
  arrow: 0,
  indent: 18,
  open:['always', 0, 1],
  animation: 1,
  eventArea:'content'
})

Vue.prototype.$menuClick = (r) => {
  if (typeof r !== 'undefined') {
    console.log(r)
  }
}


export default {
}
</script>
<style>
.lt-branch{
  margin: 14px 0px;
  background: #fff;
}
.lt-branch span{
  color: #7f8c8d;
  cursor: pointer;
  font-size: 15px;
}
.lt-branch_level_1 span{
  margin-left:18px;
  color: #2c3e50;
  font-weight: 600;
  font-size: 20px;
  cursor: auto;
}
.lt-branch_level_0 span{
  color:#34495e;
}
.lt-branch_level_2 span:hover{
  border-bottom:2px solid #42b983; 
}
.lt-branch_level_2 span{
  color: #7f8c8d;
}
.lt-branch_active span{
  color:#42b983;
  font-weight: bold;
}
.lt-branch_level_2_active span{
  color:#42b983;
  font-weight: 600;
}
</style>
