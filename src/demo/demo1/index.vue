<template>
<div>
  <div class="listtree"></div>
</div>
</template>
<script>
import Vue from 'vue'
import Listtree from '../../lib'
import listData from './listdata.json'

(function () {
  /* 当多次使用Vue.use调用同一个插件时，后面的调用不起作用，这里为了调用不同的示例所以通过强制刷新页面来达到调用的目的，实际项目中一般不会重复调用同一个插件 */
  if(sessionStorage.demo !== 'demo1'){
    sessionStorage.demo = 'demo1'
    location.reload()
    return
  }
  sessionStorage.demo = ''
})()

Vue.use(Listtree, {
  listData,
  arrow: 0,
  indent: 18,
  open:['always', 0, 1],
  animation: 1,
  eventArea:'content'
})

Vue.prototype.$listClick = (r) => {
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
