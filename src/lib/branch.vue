<template>
<div>
  <div v-for="(item, index) in listData" :key="index">
    <!-- ========= branch ===========树形结构中每个目录为一个独立的分支（branch），一级branch的index为X，二级branch的index为：X-X，三级branch的index为：X-X-X，以此类推 -->
    <!-- 层的编号（index）设计规则：一级分支用一个数字表示，二级用2个数字中间连一个“-”表示，三级分支用三个数字，每个数字中间连“-”……，比如：A-B-C-D-……，其中A表示所属一级分支编号，B表示所属二级分支编号，C表示所属三级分支编号……； -->
    <!-- id 前缀命名规则：branch的前缀为 lt-branch_ ，图标层的前缀为 lt-branch-arrow_ ，图标基座的前缀为 lt-branch-arrow-bg_ ，animation(动画)层前缀为：lt-branch-animation_，box层的前缀为 lt-branch-box_ 。层的 id 就是：前缀+编号 -->
    <!-- className 规则：所有分支branch都含有 lt-branch，所有的图标都包含：lt-branch-arrow；所有一级分支都包含 lt-branch_level_1，二级分支包含：lt-branch_level_2，三级分支包含：lt-branch_level_3……；所有一级分支图标都包含：lt-branch-arrow_level_1，所有二级分支图标包含：lt-branch-arrow_level_2，所有三级图标包含：lt-branch-arrow_level_3……，如果一个分支下面没有下级分支，那么该分支将包含：lt-branch-arrow_level_0；当前被点击的分支包含：lt-branch_active，当前被点击的分支图标包含：lt-branch-arrow_active，一级分支下级子孙分支被点击后该一级分支将包含：lt-branch_level_1_active，该一级分支的图标将包含： lt-branch-arrow_level_1_active，二级分支下级子孙分支被点击后该二级分支将包含：lt-branch_level_2_active，该二级分支的图标将包含： lt-branch-arrow_level_2_active，三级分支下级子孙分支被点击后该三级分支将包含：lt-branch_level_3_active，该三级分支的图标将包含： lt-branch-arrow_level_3_active……。后面带有active的分支表示正在活动的分支，但只有点击可以打开新路由内容的branch（即在listData中该branch包含parameter属性）才能触发active。 -->
    <div :id="'lt-branch_'+(branchLevel+(index+1))"
         :data-index="branchLevel+(index+1)"
         :class="branchClassName(branchLevel+(index+1))"
         :style="branchStyle(branchLevel+(index+1))"
         @click.prevent="clickBranch(branchLevel+(index+1), item.parameter, 'line')"
         @mouseover.prevent="MouseOverBranch(item.parameter, 'line')">
      <div :id="'lt-branch-arrow-bg_'+(branchLevel+(index+1))"
           class='lt-branch-arrow-bg'
           :style="brancharrowBgStyle"
           v-if="getArrow(branchLevel+(index+1))&&item.children&&item.children.length>0">
        <div :id="'lt-branch-arrow_'+(branchLevel+(index+1))"
              :class='branchArrowClassName(branchLevel+(index+1))'
              :style="branchArrowStyle(branchLevel+(index+1))"
              v-if="(control['lt-branch-arrow_'+(branchLevel+(index+1))]==='show')||(item.arrow!==undefined&&item.arrow.length===2)"></div>
      </div>
      <div :id="'lt-branch-icon_'+(branchLevel+(index+1))"
           v-if="item.icon&&item.icon!==''"
           :class="item.icon+' lt-branch-icon'"
           :style="branchIconStyle"></div>
      <span @click.prevent="clickBranch(branchLevel+(index+1), item.parameter, 'content')"
            @mouseover.prevent="MouseOverBranch(item.parameter, 'content')"
            :style="branchSpanStyle(item.icon)">{{item.name}}</span>
    </div>
    <!--=============== animation ================= 每个branch下都有个animation层，是用来实现伸缩动画的 -->
    <div v-if="item.children&&item.children.length>0"
         :id="'lt-branch-animation_'+(branchLevel+(index+1))"
         :style="branchAnimationStyle(branchLevel+(index+1))">
      <!--=============== box ================= 每个branch下都有个box层，branch所有的下级分支都在box内，branch的展开和闭合就可以用box的显示隐藏来实现。另外box与左边框的距离可以实现上下级branch的缩进 -->
      <div :id="'lt-branch-box_'+(branchLevel+(index+1))"
          :style="branchBoxStyle(branchLevel+(index+1), item.children)">
        <branch :listData="item.children"
                :open="open"
                :openOnly="openOnly"
                :indent="indent"
                :arrow="arrow"
                :arrowLeft="arrowLeft"
                :arrowSize="arrowSize"
                :animation="animation"
                :eventArea="eventArea"
                :clickBranchIndex="clickBranchIndex"
                @sendClickBranchIndex="getClickBranchIndex"
                :branchLevel="branchLevel+(index+1)+'-'"
                :depth="depth+1"
                v-if="item.children&&item.children.length>0"></branch>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import Branch from './branch'
import iconfont from './arrow.json'

export default {
  name: 'branch',
  data () {
    return {
      control: {}, // -----------------控制各个branch,box,arrow的展开或闭合状态
      animationTime: 0 // -----------动画执行时间
    }
  },
  components: {
    Branch
  },
  props: {
    branchLevel: { // ---------分支级别，顶级分支为x，二级分支为x-x，三级分支为x-x-x，以此类推，系统会自动分别一级一级往下传递
      default: 0
    },
    depth: { // ------------分支级别的深度，一级分支深度为0，二级分支深度为1，三级分支深度为2，以此类推，系统会自动分别一级一级往下传递
      default: 0
    },
    clickBranchIndex: '', // -----------被点击的分支index，用户在分支上点击（处于组件branch.vue中）后会触发sendClickBranchIndex事件，上一级组件（上一级branch.vue）监听到sendClickBranchIndex后再运行gitClickBranchIndex事件，gitClickBranchIndex事件里又触发sendClickBranchIndex事件往上传递，一直到组件tree.vue监听到sendClickBranchIndex事件后更改data中的clickBranchIndex，tree.vue下所有的组件都会接受到clickBranchIndex的更改
    // -------------------------------------------以上props内容用户不能控制，以下props用户可以设置-------------------------------
    listData: { // -----------json格式的数据，每个分支目录有name,parameter,arrow,children四个个字段，name为分支的文字内容（必须有）。parameter为点击分支时跳转的路由地址,如果不跳转可省略parameter字段。arrow为该分支前的图标地址（包括展开时和闭合时的图标，所以arrow是个数组），如果使用默认图标arrow字段可以省略。children为该分支的下级分支，如果没有下级分支children字段也可以省略
      default: function () {
        return []
      }
    },
    open: {// --设置初始状态下各分支展开或闭合情况:0为全部闭合，1为全部展开；2第一个分支展开其他都闭合，且同级分支始终只能有一个展开；3除了一级分支展开，其他分支全都闭合；4除了一级分支展开，其他分支全都闭合，并且一级分支不能闭合，一级分支没有图标
      default: 1
    },
    openOnly: {
      default: 0
    },
    indent: { // -----子级分支相对父级分支的缩进距离
      default: 24
    },
    arrow: {
      default: 1 // ------arrow箭头图标，等于0时表示用户不需要图标，为大于0的整数时为系统自带的图标，为数组时为自定义图标（Font-Awesome和阿里巴巴图标）作为图标，数组第一个元素为闭合时图标，第二个元素为展开时图标或者是闭合图标需要旋转的角度，当数组内元素为图片地址时，用自定义图片做图标
    },
    arrowSize: { // -----设置箭头图标大小，单位为 px
      default: 25
    },
    arrowLeft: { // -----设置箭头图标边距，如果为正整数表示距离左边的距离，如果为负数表示距离右边的距离，单位为 px
      default: 10
    },
    animation: { // ---animation设为false时不使用动画
      default: 1
    },
    eventArea: { // ----事件区域，eventArea有2个值分别为'line'和'content'，值为'line'时表示鼠标点击或经过菜单分支所在行时触发Vue.prototype.$listClick和Vue.prototype.$listMouseOver；值为'content'时表示鼠标点击或经过菜单分支文字内容时触发Vue.prototype.$listClick和Vue.prototype.$listMouseOver。
      default: 'line'
    }
  },
  methods: {
    MouseOverBranch (parameter, eventArea) { // -----------------------------鼠标经过 branch-------------------------------
      if (eventArea !== this.eventArea) return false
      if (typeof(this.$listMouseOver) === "function") {
        this.$listMouseOver(parameter) // ----鼠标经过branch时传递parameter给插件外的组件，插件外的组件通过给Vue的原型添加方法$listMouseOver 来获取参数parameter，并进行一系列的操作
      }
    },
    clickBranch (index, parameter, eventArea) { // -----------------------------branch 点击事件--------------------------------
      if (eventArea !== this.eventArea) return false
      if (this.control['lt-branch_' + index][0] === 'always') return false
      /* 如果没有动画，那么点击branch时直接就修改control值，否则就在执行完动画后在doAnimation中修改control值 */
      if (!isNaN(parseInt(this.animation)) && this.animation > 0) {
        // this.doAnimation(this.getChildBranchIndex(index), index)
        this.doRotate(index)
        if (this.animation === 1) {this.doAnimation(this.getChildBranchIndex(index), index)}
        else if (this.animation === 2) {this.doAnimation2(this.getChildBranchIndex(index), index)}
      } else {
        this.setControl(index)
      }
      if (typeof(this.$listClick) === "function") {
        this.$listClick(parameter) // ----branch被点击时传递parameter给插件外的组件，插件外的组件通过给Vue的原型添加方法$listClick来获取参数parameter，并进行一系列的操作
      }

      if (parameter && parameter !== '') {
        this.$emit('sendClickBranchIndex', index)
      }
      return false
    },
    getChildBranchIndex (index) { // ----- 获取子分支index，用于动画展现（只获取显示的子分支，隐藏状态的不获取）
      let n = 1
      let arr = []
      while (document.getElementById('lt-branch_' + index + '-' + n)) {
        arr.push(index + '-' + n)
        let elBox = document.getElementById('lt-branch-animation_' + index + '-' + n)
        if (elBox && elBox.style.display !== 'none') {
          arr.push(...this.getChildBranchIndex (index + '-' + n))
        }
        n++
      }
      return arr
    },
    doAnimation (arr, index) { // ----------执行动画
      let elBox = document.getElementById('lt-branch-animation_' + index)

      if (elBox) {
        elBox.style.display = ''
        let enterLeave
        if (this.control['lt-branch_' + index][0] === 'open' || this.control['lt-branch_' + index][0] === 1) { // --当前为展开状态则将要执行的是收缩动画
          arr = arr.reverse() // -----反转数组，即动画从最后一个子分支开始执行
          enterLeave = 'leave'
          setTimeout(() => {
            this.setControl(index)
            elBox.style.display = 'none'
          }, arr.length * 50 + 200)
        } else if (this.control['lt-branch_' + index][0] === 'close' || this.control['lt-branch_' + index][0] === 0) {
          enterLeave = 'enter'
          this.setControl(index)
          elBox.style.display = ''
        }
        for (let n = 0; n < arr.length; n++) {
          let elBranch = document.getElementById('lt-branch_' + arr[n])
          if (elBranch) {
            elBranch.className = elBranch.className.replace(' branch-enter-start', '').replace(' branch-leave-start', '').replace(' branch-enter-end', '').replace(' branch-leave-end', '')
            if (enterLeave === 'leave') elBranch.className += ' branch-leave-start' // ----展开的动画起始样式在这里，为了避免display的干扰收缩的动画样式必须在display改变之后
            elBranch.style.display = enterLeave === 'leave' ? 'block' : 'none'
            if (typeof arr[n] === 'string') {
              setTimeout(() => { // -----相邻的分支之间执行动画相隔80微秒
                if (enterLeave === 'leave') {
                  elBranch.className += ' branch-leave-end'
                  setTimeout(() => {
                    elBranch.style.display = 'none' // ---用setTimeout是因为必须在展开动画执行完后才隐藏分支，同时也能避免display的改变对展开动画的干扰
                  }, 300)
                } else if (enterLeave === 'enter') {
                  elBranch.style.display = 'block'
                  elBranch.className += ' branch-enter-start' // ----- 收缩的动画放在这里开始是为了避免display的干扰
                  setTimeout(() => {
                    elBranch.className += ' branch-enter-end' // ----这里如果不用setTimeout的话css3动画不能执行
                  }, 100)
                }
              }, 50 * n)
            }
          }
        }
      }
    },
    doAnimation2 (arr, index) { // ----------执行动画
      let elBox = document.getElementById('lt-branch-animation_' + index)

      if (elBox) {
        elBox.style.display = ''
        let branchDisplay
        if (this.control['lt-branch_' + index][0] === 'open' || this.control['lt-branch_' + index][0] === 1) { // --当前为展开状态则将要执行的是收缩动画
          setTimeout(() => {
            this.setControl(index)
          }, arr.length * 30 + 200)
          branchDisplay = 'none'
        } else if (this.control['lt-branch_' + index][0] === 'close' || this.control['lt-branch_' + index][0] === 0) {
          arr = arr.reverse()
          branchDisplay = 'block'
          this.setControl(index)
        }
        for (let n = 0; n < arr.length; n++) {
          let elBranch = document.getElementById('lt-branch_' + arr[n])
          elBranch.style.display = branchDisplay === 'none' ? 'block' : 'none'
          if (elBranch) {
            if (typeof arr[n] === 'string') {
              setTimeout(() => { // -----相邻的分支之间执行动画相隔30微秒
                elBranch.style.display = branchDisplay
              }, 30 * n)
            }
          }
        }
      }
    },
    doRotate (index) { // -------图标旋转动画
      let elarrow = document.getElementById('lt-branch-arrow_' + index)
      if (elarrow) {
        elarrow.style.transition = 'all .3s'
        if (this.control['lt-branch_' + index][0] === 'open' || this.control['lt-branch_' + index][0] === 1) { // --当前为展开状态则将要执行的是收缩动画
          setTimeout(() => {
            elarrow.style.transform = elarrow.style.transform.replace(/rotate\(\d*deg\)/, '')
            elarrow.style.transform += ' rotate(0deg)'
          }, 0)
        } else if (this.control['lt-branch_' + index][0] === 'close' || this.control['lt-branch_' + index][0] === 0) {
          setTimeout(() => {
            elarrow.style.transform = elarrow.style.transform.replace(/rotate\(\d*deg\)/, '')
            elarrow.style.transform += ` rotate(${parseInt(this.getArrow(index)[1])}deg)`
          }, 0)
        }
      }
    },
    setControl (index) { // -----设置this.control['lt-branch_' + index][0]的值，该值决定branch是展开还是闭合
      if (this.openOnly === 1) { // -------openOnly为1时通过循环将所有同级别的branch都关闭确保同级别只能展开一个分支
        let n = 1
        let el
        do {
          if ((this.branchLevel + n) !== index) {
            this.control['lt-branch_' + (this.branchLevel + n)][0] = 'close'
            // this.renewStyle([this.branchLevel + n]) // -------------------------这里renewStyle刷新的是所有同级的分支样式，函数结尾的renewStyle刷新的只是被点击的分支的style
          }
          n++
          el = document.getElementById('lt-branch_' + (this.branchLevel + n))
        } while (el)
      }

      if (this.control['lt-branch_' + index][0] === 'open' || this.control['lt-branch_' + index][0] === 1) {
        this.$set(this.control, 'lt-branch_' + index, ['close'])
      } else if (this.control['lt-branch_' + index][0] === 'close' || this.control['lt-branch_' + index][0] === 0) {
        this.$set(this.control, 'lt-branch_' + index, ['open'])
      }
    },
    getClickBranchIndex (index) { // ---------------------------------获取当前点击的branch的index，
      this.$emit('sendClickBranchIndex', index) // ---------并把该index值通过自定义事件传给父组件
    },
    branchStyle (id) { // --------branch的样式
      let branchStyle = ''
      let arrowLeft = parseInt(this.arrowLeft)
      if (arrowLeft > 0) branchStyle = `padding-left: ${this.indent * this.depth + arrowLeft + this.arrowSize + 10}px;`
      if (this.control['lt-branch_' + id][0] === 'open' || this.control['lt-branch_' + id][0] === 1 || this.control['lt-branch_' + id][0] === 'always') {
        branchStyle += this.branchOpenStyle
      } else {
        branchStyle += this.branchCloseStyle
      }
      return `position: relative;
              text-align: left;
              ${branchStyle}`
    },
    branchIfShow (index) {
      if (this.depth > 0) { // -------一级分支永远都应该显示且一级分支没有父级分支，所以这里把一级分支排除不进行判断
        let parentIndex = this.branchLevel.toString().split('-').slice(0, -1).join('-')
        if (this.parentControl['lt-branch_' + parentIndex][0] === 'close' || this.parentControl['lt-branch_' + parentIndex][0] === 0) {
          return false
        } else {
          return true
        }
      } else {
        return true
      }
    },
    branchClassName (id) { // ------------branch的className
      let branchClass = ''
      let theId = id.toString()
      let theChildren = ''
      let theData = ''

      if (this.depth === 0) { // --获取branch的children值，如果该branch没有children(即没有子分支)，就给它加上lt-branch_level_0样式
        theData = this.listData[id - 1]
        if (theData.children) theChildren = theData.children
      } else {
        theData = this.listData[theId.replace(this.branchLevel, '') - 1]
        if (theData.children) theChildren = theData.children
      }

      branchClass = 'lt-branch lt-branch_level_' + (this.depth + 1) // --------添加常规分支className和当前级别的className
      if (theChildren.length === 0) { // ------如果branch没有子分支，就给branch加上 lt-branch_level_0 样式
        branchClass += ' lt-branch_level_0'
      }
      if (theId.toString() === this.clickBranchIndex.toString().substring(0, theId.length)) { // ------判断是否为当前active状态branch的祖先，如果是就加上active状态的className
        branchClass += ' lt-branch_level_' + (this.depth + 1) + '_active'
      }
      /* 用被点击分支index减掉当前分支的index剩余部分包含一个"-"，即表示当前分支仅仅比被点击分支高一级（如果高一级以上，那么replace后剩余部分一定会包含多个"-"），为了消除特殊index带来的buger，在判断的时候clickBranchIndex和theId前都加了一个字母，并且最后得加一个判断："-"在第一个位置 */
      let str = ('a' + this.clickBranchIndex.toString()).replace(('a' + theId.toString()), '')
      if ((str.split('-').length - 1 === 1) && str.indexOf('-') === 0) {
        branchClass += ' lt-branch_active_parent'
      }
      if (theId.toString() === this.clickBranchIndex.toString()) { // ------判断是否为当前active状态branch，如果是就加上active状态的className
        branchClass += ' lt-branch_active'
      }
      return branchClass
    },
    getArrow (index) { // ---------图标来源（权重：listData > 参数arrow > arrow.json。如果一个branch没有子级，那么这个branch没有图标，但如果listData中该branch包含arrow属性，那么这个branch哪怕没有子级它也有自己的图标）
      /* 从listData读取arrow */
      // let arr = index.toString().split('-')
      // let privatearrow = this.listData[arr[arr.length - 1] - 1].arrow
      // if (privatearrow !== undefined && privatearrow.length === 2) {
      //   return privatearrow
      // }
      /* 从用户输入的参数arrow 和 arrow.json（默认）读取arrow */
      let arrow = this.arrow
      if (arrow === '' || arrow === 'undefined') arrow = 1
      if (!isNaN(parseInt(arrow))) {
        if (arrow === 0 || arrow === false) return false // -----arrow等于0或者false时不显示箭头图标
        arrow = iconfont['arrow' + arrow] // ----------把arrow.json里的数据赋予arrow
      }

      return arrow // -----不管用户是使用系统默认图标、自定义图片还是使用第三方图标或者在listData中定义图标，arrow都为数组，数组第一个元素为展开时的图标，第二个元素为闭合时图标（数组元素可能是图片地址，也可能是代表第三方图标的className）
    },
    arrowCloseStyle (index) { // -----箭头图标闭合时的样式
      if (this.getArrow(index)[0].indexOf('/') > -1) { // -----------this.getArrow中的元素包含“/”说明用户使用自定义图片作为图标
        return `position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                font-size:${this.arrowSize}px;
                background: url('${this.getArrow(index)[0]}') center no-repeat;`
      } else { // ---------------------------------------------此时用户使用默认图标或第三方图标库来作为图标
        return `position: absolute;
                font-size:${this.arrowSize}px;
                top: 50%;
                transform: translateY(-50%);`
      }
    },
    arrowOpenStyle (index) { // -----箭头图标展开时的样式
      if (isNaN(parseInt(this.getArrow(index)[1]))) { // ---如果this.getArrow(index)第二个元素不是纯数字，它一定是与第一个元素代表完全不一样的图片或className。
        if (this.getArrow(index)[0].indexOf('/') > -1) { // -----------this.getArrow中的元素包含“/”说明用户使用自定义图片作为图标
          return `position: absolute;
                  top: 0;
                  left: 0;
                  bottom: 0;
                  right: 0;
                  font-size: ${this.arrowSize}px;
                  background: url('${this.getArrow(index)[1]}') center no-repeat;`
        } else { // ---------------------------------------------此时用户使用默认图标或第三方图标库来作为图标
          return `position: absolute;
                  font-size:${this.arrowSize}px;
                  top: 50%;
                  transform: translateY(-50%);`
        }
      } else { // ---如果this.getArrow(index)第二个元素是纯数字，它表示与第一个元素是一样的图片或className，只是需要顺时针旋转一个角度。
        let transform
        if (this.getArrow(index)[0].indexOf('/') > -1) { // ----如果不是是图片格式旋转
          transform = `transform: rotate(${this.getArrow(index)[1]}deg);`
        } else {
          transform = `transform: translateY(-50%) rotate(${this.getArrow(index)[1]}deg);`
        }
        return `${this.arrowCloseStyle(index)}
                ${transform}`
      }
    },
    arrowCloseClassName (index) { // ----------闭合时箭头图标层的className
      if (!this.getArrow(index)) return ''
      if (this.getArrow(index)[0].indexOf('/') === -1) { // ---如果图标使用的不是图片（图片地址一定含有“/”）
        return this.getArrow(index)[0]
      }
      return ''
    },
    arrowOpenClassName (index) { // ----------展开时箭头图标层的className
      if (!this.getArrow(index)) return ''
      if (isNaN(parseInt(this.getArrow(index)[1])) && this.getArrow(index)[1].toString().indexOf('/') === -1) { // ---如果this.getArrow(index)第二个元素不是纯数字并且图标使用的不是图片（图片地址一定含有“/”）
        return this.getArrow(index)[1]
      } else if (!isNaN(parseInt(this.getArrow(index)[1]))) { // ---this.getArrow(index)第二个元素是纯数字，展开时图标层的className和闭合时图标层的className应该一样，只是在设置style时旋转一定的角度就可以了（角度的度数是this.getArrow(index)）
        return this.getArrow(index)[0]
      }
      return ''
    },
    branchArrowStyle (index) { // ---------------------------------箭头图标的样式-------------------------
      let elIndex = document.getElementById('lt-branch-arrow_' + index)
      let arrowStyle = 'display:inline-block;'
      if (this.arrow === 0) return arrowStyle
      if (elIndex) arrowStyle = elIndex.style.cssText
      if (this.clickBranchIndex !== index || this.animation === false) { // ----禁止当前正处于动画状态的图标改变状态
        if (this.control['lt-branch_' + index][0] === 'open' || this.control['lt-branch_' + index][0] === 'always' || this.control['lt-branch_' + index][0] === 1) { // ----------分支展开或闭合的情况
          arrowStyle += this.arrowOpenStyle(index)
        } else {
          arrowStyle += this.arrowCloseStyle(index)
        }
      }
      return arrowStyle
    },
    branchArrowClassName (index) { // ---------------箭头图标的className(当使用默认图标或第三方图标库时需要设定className)-------------------
      let arrowClass = ''
      if (this.control['lt-branch_' + index][0] === 'open' || this.control['lt-branch_' + index][0] === 'always' || this.control['lt-branch_' + index][0] === 1) {
        arrowClass += this.arrowOpenClassName(index)
      } else {
        arrowClass += this.arrowCloseClassName(index)
      }

      arrowClass += ' lt-branch-arrow lt-branch-arrow_level_' + (this.depth + 1) // --------添加常规分支图标className和当前级别图标的className
      let theId = index.toString()
      let theChildren = ''
      let theData = ''

      if (this.depth === 0) { // --获取branch的children值，如果该branch没有children(即没有子分支)，就给它加上lt-branch_level_0样式
        theData = this.listData[index - 1]
        if (theData.children) theChildren = theData.children
      } else {
        theData = this.listData[theId.replace(this.branchLevel, '') - 1]
        if (theData.children) theChildren = theData.children
      }

      if (theChildren.length === 0) { // ------如果branch没有子分支，就给branch加上 lt-branch-arrow_level_0 样式
        arrowClass += ' lt-branch-arrow_level_0'
      }
      if (theId.toString() === this.clickBranchIndex.toString().substring(0, theId.length)) { // ------判断是否为当前active状态branch的祖先，如果是就加上active状态的className
        arrowClass += ' lt-branch-arrow_level_' + (this.depth + 1) + '_active'
      }
      if (theId.toString() === this.clickBranchIndex.toString()) { // ------判断是否为当前active状态branch，如果是就加上active状态的className
        arrowClass += ' lt-branch-arrow_active'
      }
      /* 用被点击分支index减掉当前分支的index剩余部分包含一个"-"，即表示当前分支仅仅比被点击分支高一级（如果高一级以上，那么replace后剩余部分一定会包含多个"-"），为了消除特殊index带来的buger，在判断的时候clickBranchIndex和theId前都加了一个字母，并且最后得加一个判断："-"在第一个位置 */
      let str = ('a' + this.clickBranchIndex.toString()).replace(('a' + index.toString()), '')
      if ((str.split('-').length - 1 === 1) && str.indexOf('-') === 0) {
        arrowClass += ' lt-branch-arrow_active_parent'
      }
      return arrowClass
    },
    branchSpanStyle (icon) {
      let theStyle = ''
      if (icon && icon !== '') theStyle = 'left:30px;'
      return `position:relative;
              ${theStyle}`
    },
    branchAnimationStyle (id) { // ----animation的样式
      let theStyle = ''
      if (this.control['lt-branch_' + id][0] === 'open' || this.control['lt-branch_' + id][0] === 'always' || this.control['lt-branch_' + id][0] === 1) {
        theStyle += this.animationOpenStyle
      } else if (this.control['lt-branch_' + id][0] === 'close' || this.control['lt-branch_' + id][0] === 0) {
        theStyle += this.animationCloseStyle
      }
      return theStyle
    },
    branchBoxStyle (id) { // -------------------------------------box的样式-----------------------
      return `margin:0px;
              padding:0px;
              border:0px;
              ${this.boxStyle}`
    },
    // doAnimation (id, parameter) { // --------------------------------展开收缩动画--------------------------------------------
    //   if (this.control['lt-branch_' + id][0] !== 'always') { // --该branch的open值为always时不执行动画，因为该分支不能被闭合
    //     let elAnimation = document.getElementById('lt-branch-animation_' + id)
    //     elAnimation.style.display = 'block'
    //     let elBox = document.getElementById('lt-branch-box_' + id)
    //     let boxH = elBox.offsetHeight
    //     let animationH = elAnimation.offsetHeight
    //     elAnimation.style.overflowY = 'hidden'
    //     /* 发现将overflow设为hidden后，div里的内容和边框的距离会增加， 所以这里暂时将elBox的margin-top设为负值以抵消和边框距离的增加 */
    //     // elBox.style.marginTop = '-15px'

    //     let addHeight = boxH / 10 // -----每次增加或减小的高度
    //     if (this.control['lt-branch_' + id][0] === 'close' || this.control['lt-branch_' + id][0] === 0) { // ---执行展开动画
    //       elAnimation.style.height = (animationH + addHeight) + 'px'
    //       if (animationH > boxH || animationH === boxH) { // -------如果elAnimation的高大于elBox的高，把elAnimation的style设为animationOpenStyle，同时退出循环
    //         // elAnimation.style.cssText = this.animationOpenStyle
    //         if (parameter) {
    //           this.$emit('sendClickBranchIndex', id)
    //         }
    //         elBox.style.marginTop = ''
    //         this.setControl(id)
    //       } else if (this.control['lt-branch_' + id][0] === 'close' || this.control['lt-branch_' + id][0] === 0) { // ---执行闭合动画
    //         elAnimation.style.height = (animationH + addHeight) + 'px'
    //         setTimeout(() => {
    //           this.doAnimation(id, parameter)
    //         }, this.animationTime)
    //       }
    //     } else {
    //       if (animationH < addHeight || animationH === addHeight) { // -------如果elAnimation的高小于等于addHeight，把elAnimation的style设为animationCloseStyle，同时退出循环
    //         // elAnimation.style.cssText = this.animationCloseStyle
    //         if (parameter) {
    //           this.$emit('sendClickBranchIndex', id)
    //         }
    //         elBox.style.marginTop = ''
    //         this.setControl(id)
    //       } else {
    //         elAnimation.style.height = (animationH - addHeight) + 'px'
    //         setTimeout(() => {
    //           this.doAnimation(id, parameter)
    //         }, this.animationTime)
    //       }
    //     }
    //   }
    // },
    // doRotate (index, direction) { // --------------------图标旋转动画，direction等于1表示顺时针旋转，等于-1表示逆时针旋转
    //   let elarrow = document.getElementById('lt-branch-arrow_' + index)
    //   if (elarrow && this.animation !== false && !isNaN(parseInt(this.getArrow(index)[1])) && this.control['lt-branch_' + index][0] !== 'always') {
    //     let transformarrow = elarrow.style.transform
    //     let translateY = ''
    //     let angle = 0
    //     if (transformarrow.indexOf('translateY(-50%)') > -1) translateY = 'translateY(-50%)'
    //     if (transformarrow.indexOf('rotate') > -1) {
    //       angle = parseInt(transformarrow.split('rotate(')[1].split('deg)')[0])
    //     }
    //     if (!direction) {
    //       if (this.control['lt-branch_' + index][0] === 'close' || this.control['lt-branch_' + index][0] === 0) {
    //         direction = 1
    //       } else if (this.control['lt-branch_' + index][0] === 'open' || this.control['lt-branch_' + index][0] === 1) {
    //         direction = -1
    //       }
    //     }

    //     let maxAngle = parseInt(this.getArrow(index)[1]) // -----图标旋转所能达到的最大角度，即展开的时候图标需要旋转的角度
    //     let rotateAngle = maxAngle / 10 // -----图标每次旋转的角度

    //     if (direction === 1) { // ---执行展开动画
    //       elarrow.style.transform = `${translateY} rotate(${angle + rotateAngle}deg)`
    //       if (parseInt(angle + rotateAngle) > maxAngle || parseInt(angle + rotateAngle) === maxAngle) { // -------如果elarrow旋转的角度大于等于maxAngle，把elarrow旋转的角度设为maxAngle，同时退出循环
    //         elarrow.style.transform = `${translateY} rotate(${maxAngle}deg)`
    //         return
    //       }
    //     } else {
    //       elarrow.style.transform = `${translateY} rotate(${angle - rotateAngle}deg)`
    //       if (parseInt(angle - rotateAngle) < 0 || parseInt(angle - rotateAngle) === 0) { // -------如果elarrow旋转的角度小于等于0，把elarrow旋转的角度设为0，同时退出循环（elarrow旋转的角度为0的时候即会到展开时图标的初始状态）
    //         elarrow.style.transform = `${translateY} rotate(0deg)`
    //         return
    //       }
    //     }

    //     setTimeout(() => {
    //       this.doRotate(index, direction)
    //     }, this.animationTime)
    //   }
    // }
  },
  computed: {
    brancharrowBgStyle () { // ----箭头图标背景层距离左边的距离，控制图标的位置
      let arrowLeft = parseInt(this.arrowLeft)
      if (arrowLeft < 0) return `right: ${Math.abs(arrowLeft)}px;`
      return `left: ${this.indent * this.depth + arrowLeft}px;`
    },
    branchIconStyle () { // ----图标层样式（此图标层非箭头图标层，而是listData上的icon图标）
      return `position:absolute;
              display:inline-block;
              transform:translateY(-50%);
              top: 50%;`
    },
    branchOpenStyle () { // ---branch展开时的样式
      return ''
    },
    branchCloseStyle () { // ---branch闭合时的样式
      return ''
    },
    animationOpenStyle () {
      return `margin:0px;
              padding:0px;
              border:0px;`
    },
    animationCloseStyle () {
      return `margin:0px;
              padding:0px;
              border:0px;
              height:0px;
              display:none;`
    },
    boxStyle () {
      return ''
    }
  },
  created () {
    /*
    将类似于下面 control 的值赋给data中的control，这样的话，就可通过this.control.branchLevel1[0]的值来控制分支branchLevel1的展开或闭合。其中branchLevel1中的1与每个分支中的data-index相同，这样每个分支在control中都有个对应的值来控制和判断它的状态。
    control: {
      lt-branch_1: ['close'],
      lt-branch_2: ['close'],
      lt-branch_3: ['close'],
    }
     */
    for (let n = 1; n < this.listData.length + 1; n++) {
      this.$set(this.control, 'lt-branch_' + (this.branchLevel + n), ['close']) // ----------默认情况，所有branch都为闭合状态(数组第一个元素表示branch的展开或闭合状态['open'为展开，'close'为闭合]
      this.$set(this.control, 'lt-branch-arrow_' + (this.branchLevel + n), 'show') // ----------默认情况，所有arrow都为显示状态('show'为显示，'hidden'为隐藏)

      if (this.open === 1) {
        this.$set(this.control, 'lt-branch_' + (this.branchLevel + n), ['open']) // ----------当open值为1时，所有branch都为展开状态
      } else if (typeof this.open === 'object') {
        /* 当open为数组时，根据当前分支所处级别以及open中与该级别对应的元素来确定当前分支是“open”、“close”还是“always”状态。其中一级分支状态对应open第一个元素值， 二级分支状态对应open第二个元素值，以此类推。如果open长度不够，那当前级别的分支状态对应open最后一个元素的值 */
        if (this.open.length > this.depth + 1 || this.open.length === this.depth + 1) {
          this.$set(this.control, 'lt-branch_' + (this.branchLevel + n), [this.open[this.depth]])
        } else {
          this.$set(this.control, 'lt-branch_' + (this.branchLevel + n), [this.open[this.open.length - 1]])
        }
      }
      if (this.openOnly === 1 && this.control['lt-branch_' + (this.branchLevel + n)][0] !== 'always') {
        this.$set(this.control, 'lt-branch_' + (this.branchLevel + n), ['close'])
      }
    }
  }
}
</script>
<style>
@import url("./arrow/iconfont.css");

.iconfont {
    font-family:"iconfont" !important;
    font-style:normal;
    font-weight: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}
.lt-branch-arrow-bg{
  width: 20px;
  height: 20px;
  position: absolute;
  transform:translateY(-50%);
  top: 50%;
}
.branch-enter-start {
  transform:translateX(-25px);
  opacity: 0;
  transition: all .3s;
}
.branch-enter-end {
  transform:translateX(0px);
  opacity: 1;
}
.branch-leave-start {
  transform:translateX(0px);
  opacity: 1;
  transition: all .3s;
}
.branch-leave-end {
  transform:translateX(-25px);
  opacity: 0;
}
</style>
