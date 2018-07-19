<template>
<div>
  <div class="right">
    <router-view></router-view>
  </div>
  <div class="left">
    <h1>listtree插件使用示例</h1>
    <router-link to="/demo1"><h2>一、仿vue官网左侧菜单</h2>
      <div class="content">
        <p>注意观察vue官网左侧菜单可以发现它有下面几个特性：</p>
        <h3>1. 菜单分支前面没有箭头图标</h3>
        <span>  实现方法：设置 arrow 参数为 0。</span>
        <h3>2. 除了一级菜单和二级菜单之间没有缩进，其他菜单都缩进了大约18px</h3>
        <span>  实现方法：设置 indent 参数为 18，定义样式 .lt-branch_level_1 span 的 margin-left 为 18px 。</span>
        <h3>3. 除了一级分支和底层分支（没有子级的分支）所有分支样式都一致</h3>
        <span>  实现方法：先设置 .lt-branch span 统一所有分支样式，再单独设置 lt-branch_level_1 span 和 lt-branch_level_0 span 样式（分别为一级分支和底层分支的样式）。</span>
        <h3>4. 鼠标经过二级分支时会出现绿色下划线</h3>
        <span>  实现方法：设置 .lt-branch_level_2 span:hover 样式。</span>
        <h3>5. 在初始状态下除了二级分支是闭合的其他分支都是展开的，而且一级分支永远也不能被闭合</h3>
        <span>  实现方法：设置 open 参数为 ["always", 0, 1]。</span>
        <h3>6. 当某一分支被点击时，该分支样式会发生变化，同时该分支祖先分支中的二级分支样式也会发生变化</h3>
        <span>  实现方法：设置样式 .lt-branch_active span 和 .lt-branch_level_2_active span 。</span>
        <h3>7. 鼠标点击文字时才会触发事件，点击文字后面的空白处没有反应</h3>
        <span>  实现方法：设置参数 eventArea 的值为 "content" 。</span>
      </div>
    </router-link>
    <router-link to="/demo2"><h2>二、仿vue-element-admin左侧菜单</h2>
        <div class="content">
          <p>vue-element-admin左侧菜单有下面几个特性：</p>
          <h3>1. 每个一级菜单分支前面都包含特有的图标（此图标非箭头图标）</h3>
          <span>  实现方法：在listData中为每个一级菜单添加icon属性，下载最新版Font Awesome图标库，并在组件中引入Font Awesome的css文件（如果使用sass或less也可引入Font Awesome的sass或less文件）。</span>
          <h3>2. 菜单的箭头图标在整个菜单的右侧</h3>
          <span>  实现方法：设置 arrow 为Font Awesome图标库中相应的样式，并设置 arrowLeft 的值为负数 。</span>
          <h3>3. 每个菜单分支高与背景色一致</h3>
          <span>  实现方法：在 .lt-branch 里设置所有分支的高与背景色。</span>
          <h3>4. 二级分支有不一样的背景色</h3>
          <span>  实现方法：在 .lt-branch_level_2 样式中设置 background-color 属性。</span>
          <h3>5. 鼠标经过一级分支和二级分支时样式会发生变化</h3>
          <span>  实现方法：设置样式 .lt-branch:hover 和 .lt-branch_level_2:hover。</span>
          <h3>6. 菜单展开和闭合动画非渐隐渐现（默认的动画效果在这里体验明显不好）</h3>
          <span>  实现方法：设置参数 animation 值为2。</span>
          <h3>7. 调整图标与文字之间的距离</h3>
          <span>  实现方法：在样式 .lt-branch span 中设置 margin-left 属性。</span>
        </div>
      </router-link>
  </div>
</div>
</template>
<script>
  export default {
  }
</script>
<style scoped>
@import url('./reset.css');
.left{
  position: fixed;
  padding:0 20px;
  width:540px;
  top:0;
  bottom:0;
  left:0;
  background:rgb(231, 230, 230);
  font-size: 14px;
  line-height: 22px;
  border-right:5px solid rgb(104, 102, 6);
  overflow-Y: auto;
}
.right{
  margin-left:580px;
  padding-top:12px;
}
.content{
  display:none;
  margin-left:12px;
  border:2px solid rgb(3, 67, 119);
  background:white;
  color:rgb(58, 58, 58);
  padding:8px;
  cursor: text;
}
.router-link-active .content{
  display:block;
}
.content span{
  margin-left: 20px;
}
</style>
