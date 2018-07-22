webpackJsonp([1],{

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(364);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_a185ff6e_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(369);
function injectStyle (ssrContext) {
  __webpack_require__(366)
}
var normalizeComponent = __webpack_require__(130)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_a185ff6e_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__branch__ = __webpack_require__(348);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* eslint-disable spaced-comment */
/* harmony default export */ __webpack_exports__["a"] = ({
    components: {
        Branch: __WEBPACK_IMPORTED_MODULE_0__branch__["a" /* default */]
    },
    name: 'mytree',
    data: function data() {
        return {
            clickBranchIndex: '' // -----------被点击的分支index，当用户点击branch时赋值
        };
    },

    props: ['menuData', 'open', 'openOnly', 'indent', 'arrow', 'arrowLeft', 'arrowSize', 'animation', 'eventArea'],
    methods: {
        getClickBranchIndex: function getClickBranchIndex(index) {
            this.clickBranchIndex = index;
        }
        // /* createList 函数把从外部读取的数组转化为树形结构，x为代表目录信息的数组，parent为目录的父元素，t为中介参数，用来传递arr的值，arr的值包含了目录在树状结构中所处级别和位置的信息 */
        // createList (x, parent, t = []) {
        //   let _this = this
        //   if (x.length > 0) {
        //     /* 设定arr的值，使arr的长度和目录在树状结构中所处级别对应，arr内元素的值和目录位置对应。比如arr值为[0,3]时，表示该目录处于第一大类（arr第一个元素值为0）第四个分类（arr第二个元素值为3），目录的级别为第二小分类（arr长度为2）。arr值为[2]时，表示该目录处于第三大类，目录级别为大类。知道目录所处级别就可以为不同级别的目录设定不同的样式 */
        //     let arr = []

        //     /* 通过循环设定arr的值等于t，但不能通过arr=t来设定，这样设定的话就把arr的值和t的值绑定，改变其中一个的值就会改变另一个的值，这不是我们想要的 */
        //     for (let k = 0; k < t.length; k++) {
        //       arr[k] = t[k]
        //     }
        //     /* 每次执行 createList 函数的时候都将arr的长度增加1（创建下一级目录时都要执行 createList 函数），从而达到使arr.length与目录级别一致的目的*/
        //     arr.push(0)

        //     /* ellist收集了所有当前级别目录所在div，当需要改变所有目录样式的时候可以通过循环ellist来设定每个目录的样式 ，allellist则是所有目录所在div的集合，通过循环allellist可获取非本级别的目录*/
        //     let ellist = []

        //     /* 根据x中的各元素创建树状目录及其属性 */
        //     for (let n = 0; n < x.length; n++) {
        //       /* 目录展开或关闭：当目录样式名称中包含openr表示该目录是展开的，当目录样式名称中包含closer表示该目录是关闭的。反过来当要展开目录时则将目录样式添加openr，并删除closer。当要关闭目录时则将目录样式添加closer，并删除openr。 */
        //       let openr = ' titleopen'
        //       let closer = ' titleclose'

        //       /* 创建目录 */
        //       let link
        //       let par = document.createElement('div')
        //       let arrowDiv = document.createElement('div')
        //       par.appendChild(arrowDiv)
        //       let node = document.createTextNode(x[n].name)
        //       if (!x[n].childer || x[n].childer.length === 0) {
        //         link = document.createElement('a')
        //         link.appendChild(node)
        //         link.setAttribute('href', x[n].router)
        //         par.appendChild(link)
        //       } else {
        //         par.appendChild(node)
        //       }
        //       par.style.paddingLeft = this.indentLetter + 10 + 'px'
        //       par.style.marginBottom = this.branchSpace + 'px'

        //       let arrowDivClassName = 'arrowDiv'
        //       /* 当this.ifarrow为true表示目录前要带有图标，则将图标div显示，并且根据customarrow值判断是否使用自定义图标，使用自定义图标则图标div使用className为coutomarrowDivOpen或者coutomarrowDivClose，不使用自定义图标则图标div使用className为arrowDivOpen或者arrowDivClose */
        //       if (this.ifarrow) {
        //         arrowDiv.style.display = ''
        //         if (_this.customarrow.length === 0) {
        //           arrowDivClassName = 'arrowDiv'
        //         } else {
        //           arrowDivClassName = 'coutomarrowDiv'
        //         }
        //       } else { // 否则表示目录前不带有图标则将图标div隐藏
        //         arrowDiv.style.display = 'none'
        //       }

        //       /* 当open等于1时，设定所有目录初始状态都是展开的 */
        //       if (_this.open === 1) {
        //         par.className = 'par' + openr
        //         arrowDiv.className = arrowDivClassName + 'Open'
        //         if (_this.customarrow.length !== 0) {
        //           arrowDiv.style.backgroundImage = 'url(' + _this.customarrow[1] + ')'
        //           arrowDiv.style.backgroundRepeat = 'no-repeat'
        //           arrowDiv.style.backgroundPosition = 'center center'
        //         }
        //       } else { // 当open不等于1时，设定所有目录初始状态都是关闭的
        //         par.className = 'par' + closer
        //         arrowDiv.className = arrowDivClassName + 'Close'
        //         if (_this.customarrow.length !== 0) {
        //           arrowDiv.style.backgroundImage = 'url(' + _this.customarrow[0] + ')'
        //           arrowDiv.style.backgroundRepeat = 'no-repeat'
        //           arrowDiv.style.backgroundPosition = 'center center'
        //         }
        //       }

        //       /* 为每个目录添加一个' treeBranch' + arr.length 样式，即给一级目录添加 treeBranch1 样式，给二级目录添加 treeBranch2 样式，给三级目录添加 treeBranch3 样式……，使得每级目录可以从外观上区别开来，并且 treeBranch 样式可以在插件外自定义*/
        //       par.className = par.className + ' treeBranch' + arr.length

        //       /* 每个目录下都有个box，其所有子目录都在box中 */
        //       let box = document.createElement('div')
        //       parent.appendChild(par)
        //       parent.appendChild(box)

        //       /* 设置子目录左边框相对于父目录左边框的缩进距离 */
        //       box.style.paddingLeft = this.indentarrow + 'px'

        //       /* child等于1的时候表示该目录下还有子目录，child等于0时表示该目录为底目录，下面已经没有子目录了。点击底目录可打开新的页面内容，点击非底目录则显示或隐藏下面的子目录 */
        //       let child
        //       if (x[n].childer && x[n].childer.length > 0) {
        //         child = 1
        //       } else {
        //         child = 0
        //         arrowDiv.style.display = 'none'
        //       }

        //       /* 当open不等于1时隐藏box，即隐藏子目录，换句话说就是关闭所有目录 */
        //       if (_this.open !== 1) {
        //         box.style.display = 'none'
        //       }
        //       /* 当open等于3或4时，展开一级目录（arr.length与目录级别一致）*/
        //       if ((_this.open === 3 || _this.open === 4) && arr.length === 1) {
        //         par.className = par.className.replace(closer, openr)
        //         arrowDiv.className = arrowDivClassName + 'Open'
        //         if (_this.customarrow.length !== 0) {
        //           arrowDiv.style.backgroundImage = 'url(' + _this.customarrow[1] + ')'
        //           arrowDiv.style.backgroundRepeat = 'no-repeat'
        //           arrowDiv.style.backgroundPosition = 'center center'
        //         }
        //         box.style.display = ''
        //         if (_this.open === 4 && arr.length === 1) {
        //           arrowDiv.style.display = 'none'
        //         }
        //       }

        //       /* ------------------------点击事件--------------------------- */
        //       par.onclick = function () {
        //         /* 当open等于2并且当前被点击的目录为关闭状态的时候关闭所有的目录，为展开当前目录做准备（因为open等于2时在同一时间只允许展开一个目录） */
        //         if (_this.open === 2 && par.className.indexOf(closer) !== -1) {
        //           for (let k = 0; k < ellist.length; k++) {
        //             ellist[k].par.className = ellist[k].par.className.replace(openr, closer)
        //             ellist[k].arrowDiv.className = arrowDivClassName + 'Close'
        //             if (_this.customarrow.length !== 0) {
        //               ellist[k].arrowDiv.style.backgroundImage = 'url(' + _this.customarrow[0] + ')'
        //               ellist[k].arrowDiv.style.backgroundRepeat = 'no-repeat'
        //               ellist[k].arrowDiv.style.backgroundPosition = 'center center'
        //             }
        //             ellist[k].box.style.display = 'none'
        //           }
        //         }

        //         /* 当该目录为展开状态时，点击后闭合，当该目录为闭合状态时，点击后展开，但open等于4并且被点击的目录为一级目录时点击无效 */
        //         if (_this.open !== 4 || arr.length > 1) {
        //           box.style.display = box.style.display === 'none' ? '' : 'none'
        //           if (par.className.indexOf(openr) !== -1) {
        //             par.className = par.className.replace(openr, closer)
        //             arrowDiv.className = arrowDivClassName + 'Close'
        //             if (_this.customarrow.length !== 0) {
        //               arrowDiv.style.backgroundImage = 'url(' + _this.customarrow[0] + ')'
        //               arrowDiv.style.backgroundRepeat = 'no-repeat'
        //               arrowDiv.style.backgroundPosition = 'center center'
        //             }
        //           } else if (par.className.indexOf(closer) !== -1) {
        //             par.className = par.className.replace(closer, openr)
        //             arrowDiv.className = arrowDivClassName + 'Open'
        //             if (_this.customarrow.length !== 0) {
        //               arrowDiv.style.backgroundImage = 'url(' + _this.customarrow[1] + ')'
        //               arrowDiv.style.backgroundRepeat = 'no-repeat'
        //               arrowDiv.style.backgroundPosition = 'center center'
        //             }
        //           }
        //         }

        //         /* 当被点击的目录为底层目录时使得该目录及其中的一个祖先目录成选中状态 */
        //         if (!x[n].childer || x[n].childer.length === 0) {
        //           _this.router.push(x[n].router)
        //           /* 通过循环allellist里的所有元素查找被点击目录的所有祖先目录，然后通过checkedparents值来确定一级祖先目录还是二级祖先目录设定为选中状态 */
        //           for (let l = 0; l < _this.allellist.length; l++) {
        //             if (_this.allellist[l].child === 0) {
        //               _this.allellist[l].par.className = _this.allellist[l].par.className.replace(' checkedself', '')
        //             } else if (_this.checkedparents === 1) {
        //               if (_this.allellist[l].arr.length === 1) {
        //                 /* 当allellist[l]为一级目录（即allellist[l].arr.length === 1）时，点击它下面的子孙目录时allellist[l]的样式才会改变。 */
        //                 _this.allellist[l].par.className = _this.allellist[l].par.className.replace(' checkedparents', '')
        //                 if (_this.allellist[l].arr[0] === arr[0]) {
        //                   /* 通过判断allellist[l].arr中第一个元素和当前arr第一个元素是否相等来判断allellist[l]是否当前点击的这个目录的祖先目录，如果是则改变allellist[l]的样式 */
        //                   _this.allellist[l].par.className = _this.allellist[l].par.className + ' checkedparents'
        //                 }
        //               }
        //             } else if (_this.checkedparents === 2) {
        //               if (_this.allellist[l].arr.length === 2) {
        //                 /* 当allellist[l]为二级目录（即allellist[l].arr.length === 2）时，点击它下面的子孙目录时allellist[l]的样式才会改变 */
        //                 _this.allellist[l].par.className = _this.allellist[l].par.className.replace(' checkedparents', '')
        //                 if (_this.allellist[l].arr[0] === arr[0] && _this.allellist[l].arr[1] === arr[1]) {
        //                   /* 通过判断allellist[l].arr中前2个元素和当前arr前2个元素是否相等来判断allellist[l]是否当前点击的这个目录的祖先目录，如果是则改变allellist[l]的样式 */
        //                   _this.allellist[l].par.className = _this.allellist[l].par.className + ' checkedparents'
        //                 }
        //               }
        //             }
        //           }
        //           /* 改变被点击的底层目录自身为选中状态 */
        //           par.className = par.className + ' checkedself'
        //         }
        //       }
        //       /* ----------------------------------------------------------- */

        //       /* 将每个目录所在div信息收集起来，这里arr必须用一个中介（thearr）来转一下，否则后面push的arr值会覆盖前面的arr值 */
        //       /* ellist收集的是本级目录信息，因为创建每级目录时都会执行一次createList，而每次执行createList都会重新定义ellist，所以每个ellist收集的都是本次执行函数createList时push给ellist的值 */
        //       /* allellist收集的是所有目录的信息，因为allellist是函数createList外面的数据，每次push给allellist的值都保存在allellist里面 */
        //       let thearr = []
        //       for (let kk = 0; kk < arr.length; kk++) {
        //         thearr[kk] = arr[kk]
        //       }
        //       let theel = {
        //         par,
        //         arrowDiv,
        //         box,
        //         child,
        //         arr: thearr
        //       }
        //       ellist.push(theel)
        //       _this.allellist.push(theel)

        //       /* 如果当前创建的目录还有子目录则再执行函数createList来创建子目录，*/
        //       if (x[n].childer && x[n].childer.length > 0) {
        //         _this.createList(x[n].childer, box, arr)
        //       } else {
        //         par.className = 'par title' + arr.length
        //       }

        //       /* 进入下次循环前将arr最后一个元素值加1，使得arr每个元素值与对应目录所处位置一致：元素值为0表示对应的目录在同级目录中为第一个目录，元素值为1表示对应的目录在同级目录中为第二个目录 */
        //       /* arr.length则与对应目录所处级别一致：arr.length为1表示该目录为一级目录，arr.length为2表示该目录为二级目录 */
        //       arr[arr.length - 1]++
        //     }
        //   }
        // }

    }
});

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_branch_vue__ = __webpack_require__(350);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_da81eb62_hasScoped_false_buble_transforms_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_branch_vue__ = __webpack_require__(362);
function injectStyle (ssrContext) {
  __webpack_require__(356)
}
var normalizeComponent = __webpack_require__(130)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_branch_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_da81eb62_hasScoped_false_buble_transforms_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_branch_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "iconfont.eot?a5f8db96505701301350ff3d0cd3948d";

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__branch__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__arrow_json__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__arrow_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__arrow_json__);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'branch',
  data: function data() {
    return {
      control: {}, // -----------------控制各个branch,box,arrow的展开或闭合状态
      animationTime: 0 // -----------动画执行时间
    };
  },

  components: {
    Branch: __WEBPACK_IMPORTED_MODULE_0__branch__["a" /* default */]
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
    menuData: { // -----------json格式的数据，每个分支目录有name,parameter,arrow,children四个个字段，name为分支的文字内容（必须有）。parameter为点击分支时跳转的路由地址,如果不跳转可省略parameter字段。arrow为该分支前的图标地址（包括展开时和闭合时的图标，所以arrow是个数组），如果使用默认图标arrow字段可以省略。children为该分支的下级分支，如果没有下级分支children字段也可以省略
      default: function _default() {
        return [];
      }
    },
    open: { // --设置初始状态下各分支展开或闭合情况:0为全部闭合，1为全部展开；2第一个分支展开其他都闭合，且同级分支始终只能有一个展开；3除了一级分支展开，其他分支全都闭合；4除了一级分支展开，其他分支全都闭合，并且一级分支不能闭合，一级分支没有图标
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
    eventArea: { // ----事件区域，eventArea有2个值分别为'line'和'content'，值为'line'时表示鼠标点击或经过菜单分支所在行时触发Vue.prototype.$menuClick和Vue.prototype.$menuMouseOver；值为'content'时表示鼠标点击或经过菜单分支文字内容时触发Vue.prototype.$menuClick和Vue.prototype.$menuMouseOver。
      default: 'line'
    }
  },
  methods: {
    MouseOverBranch: function MouseOverBranch(parameter, eventArea) {
      // -----------------------------鼠标经过 branch-------------------------------
      if (eventArea !== this.eventArea) return false;
      if (typeof this.$menuMouseOver === "function") {
        this.$menuMouseOver(parameter); // ----鼠标经过branch时传递parameter给插件外的组件，插件外的组件通过给Vue的原型添加方法$menuMouseOver 来获取参数parameter，并进行一系列的操作
      }
    },
    clickBranch: function clickBranch(index, parameter, eventArea) {
      // -----------------------------branch 点击事件--------------------------------
      if (eventArea !== this.eventArea) return false;
      if (this.control['lt-branch_' + index][0] === 'always') return false;
      /* 如果没有动画，那么点击branch时直接就修改control值，否则就在执行完动画后在doAnimation中修改control值 */
      if (!isNaN(parseInt(this.animation)) && this.animation > 0) {
        // this.doAnimation(this.getChildBranchIndex(index), index)
        this.doRotate(index);
        if (this.animation === 1) {
          this.doAnimation(this.getChildBranchIndex(index), index);
        } else if (this.animation === 2) {
          this.doAnimation2(this.getChildBranchIndex(index), index);
        }
      } else {
        this.setControl(index);
      }
      if (typeof this.$menuClick === "function") {
        this.$menuClick(parameter); // ----branch被点击时传递parameter给插件外的组件，插件外的组件通过给Vue的原型添加方法$menuClick来获取参数parameter，并进行一系列的操作
      }

      if (parameter && parameter !== '') {
        this.$emit('sendClickBranchIndex', index);
      }
      return false;
    },
    getChildBranchIndex: function getChildBranchIndex(index) {
      // ----- 获取子分支index，用于动画展现（只获取显示的子分支，隐藏状态的不获取）
      var n = 1;
      var arr = [];
      while (document.getElementById('lt-branch_' + index + '-' + n)) {
        arr.push(index + '-' + n);
        var elBox = document.getElementById('lt-branch-animation_' + index + '-' + n);
        if (elBox && elBox.style.display !== 'none') {
          arr.push.apply(arr, _toConsumableArray(this.getChildBranchIndex(index + '-' + n)));
        }
        n++;
      }
      return arr;
    },
    doAnimation: function doAnimation(arr, index) {
      var _this = this;

      // ----------执行动画
      var elBox = document.getElementById('lt-branch-animation_' + index);

      if (elBox) {
        (function () {
          elBox.style.display = '';
          var enterLeave = void 0;
          if (_this.control['lt-branch_' + index][0] === 'open' || _this.control['lt-branch_' + index][0] === 1) {
            // --当前为展开状态则将要执行的是收缩动画
            arr = arr.reverse(); // -----反转数组，即动画从最后一个子分支开始执行
            enterLeave = 'leave';
            setTimeout(function () {
              _this.setControl(index);
              elBox.style.display = 'none';
            }, arr.length * 50 + 200);
          } else if (_this.control['lt-branch_' + index][0] === 'close' || _this.control['lt-branch_' + index][0] === 0) {
            enterLeave = 'enter';
            _this.setControl(index);
            elBox.style.display = '';
          }

          var _loop = function _loop(n) {
            var elBranch = document.getElementById('lt-branch_' + arr[n]);
            if (elBranch) {
              elBranch.className = elBranch.className.replace(' branch-enter-start', '').replace(' branch-leave-start', '').replace(' branch-enter-end', '').replace(' branch-leave-end', '');
              if (enterLeave === 'leave') elBranch.className += ' branch-leave-start'; // ----展开的动画起始样式在这里，为了避免display的干扰收缩的动画样式必须在display改变之后
              elBranch.style.display = enterLeave === 'leave' ? 'block' : 'none';
              if (typeof arr[n] === 'string') {
                setTimeout(function () {
                  // -----相邻的分支之间执行动画相隔80微秒
                  if (enterLeave === 'leave') {
                    elBranch.className += ' branch-leave-end';
                    setTimeout(function () {
                      elBranch.style.display = 'none'; // ---用setTimeout是因为必须在展开动画执行完后才隐藏分支，同时也能避免display的改变对展开动画的干扰
                    }, 300);
                  } else if (enterLeave === 'enter') {
                    elBranch.style.display = 'block';
                    elBranch.className += ' branch-enter-start'; // ----- 收缩的动画放在这里开始是为了避免display的干扰
                    setTimeout(function () {
                      elBranch.className += ' branch-enter-end'; // ----这里如果不用setTimeout的话css3动画不能执行
                    }, 100);
                  }
                }, 50 * n);
              }
            }
          };

          for (var n = 0; n < arr.length; n++) {
            _loop(n);
          }
        })();
      }
    },
    doAnimation2: function doAnimation2(arr, index) {
      var _this2 = this;

      // ----------执行动画
      var elBox = document.getElementById('lt-branch-animation_' + index);

      if (elBox) {
        (function () {
          elBox.style.display = '';
          var branchDisplay = void 0;
          if (_this2.control['lt-branch_' + index][0] === 'open' || _this2.control['lt-branch_' + index][0] === 1) {
            // --当前为展开状态则将要执行的是收缩动画
            setTimeout(function () {
              _this2.setControl(index);
            }, arr.length * 30 + 200);
            branchDisplay = 'none';
          } else if (_this2.control['lt-branch_' + index][0] === 'close' || _this2.control['lt-branch_' + index][0] === 0) {
            arr = arr.reverse();
            branchDisplay = 'block';
            _this2.setControl(index);
          }

          var _loop2 = function _loop2(n) {
            var elBranch = document.getElementById('lt-branch_' + arr[n]);
            elBranch.style.display = branchDisplay === 'none' ? 'block' : 'none';
            if (elBranch) {
              if (typeof arr[n] === 'string') {
                setTimeout(function () {
                  // -----相邻的分支之间执行动画相隔30微秒
                  elBranch.style.display = branchDisplay;
                }, 30 * n);
              }
            }
          };

          for (var n = 0; n < arr.length; n++) {
            _loop2(n);
          }
        })();
      }
    },
    doRotate: function doRotate(index) {
      var _this3 = this;

      // -------图标旋转动画
      var elarrow = document.getElementById('lt-branch-arrow_' + index);
      if (elarrow) {
        elarrow.style.transition = 'all .3s';
        if (this.control['lt-branch_' + index][0] === 'open' || this.control['lt-branch_' + index][0] === 1) {
          // --当前为展开状态则将要执行的是收缩动画
          setTimeout(function () {
            elarrow.style.transform = elarrow.style.transform.replace(/rotate\(\d*deg\)/, '');
            elarrow.style.transform += ' rotate(0deg)';
          }, 0);
        } else if (this.control['lt-branch_' + index][0] === 'close' || this.control['lt-branch_' + index][0] === 0) {
          setTimeout(function () {
            elarrow.style.transform = elarrow.style.transform.replace(/rotate\(\d*deg\)/, '');
            elarrow.style.transform += ' rotate(' + parseInt(_this3.getArrow(index)[1]) + 'deg)';
          }, 0);
        }
      }
    },
    setControl: function setControl(index) {
      // -----设置this.control['lt-branch_' + index][0]的值，该值决定branch是展开还是闭合
      if (this.openOnly === 1) {
        // -------openOnly为1时通过循环将所有同级别的branch都关闭确保同级别只能展开一个分支
        var n = 1;
        var el = void 0;
        do {
          if (this.branchLevel + n !== index) {
            this.control['lt-branch_' + (this.branchLevel + n)][0] = 'close';
            // this.renewStyle([this.branchLevel + n]) // -------------------------这里renewStyle刷新的是所有同级的分支样式，函数结尾的renewStyle刷新的只是被点击的分支的style
          }
          n++;
          el = document.getElementById('lt-branch_' + (this.branchLevel + n));
        } while (el);
      }

      if (this.control['lt-branch_' + index][0] === 'open' || this.control['lt-branch_' + index][0] === 1) {
        this.$set(this.control, 'lt-branch_' + index, ['close']);
      } else if (this.control['lt-branch_' + index][0] === 'close' || this.control['lt-branch_' + index][0] === 0) {
        this.$set(this.control, 'lt-branch_' + index, ['open']);
      }
    },
    getClickBranchIndex: function getClickBranchIndex(index) {
      // ---------------------------------获取当前点击的branch的index，
      this.$emit('sendClickBranchIndex', index); // ---------并把该index值通过自定义事件传给父组件
    },
    branchStyle: function branchStyle(id) {
      // --------branch的样式
      var branchStyle = '';
      var arrowLeft = parseInt(this.arrowLeft);
      if (arrowLeft > 0) branchStyle = 'padding-left: ' + (this.indent * this.depth + arrowLeft + this.arrowSize + 10) + 'px;';
      if (this.control['lt-branch_' + id][0] === 'open' || this.control['lt-branch_' + id][0] === 1 || this.control['lt-branch_' + id][0] === 'always') {
        branchStyle += this.branchOpenStyle;
      } else {
        branchStyle += this.branchCloseStyle;
      }
      return 'position: relative;\n              text-align: left;\n              ' + branchStyle;
    },
    branchIfShow: function branchIfShow(index) {
      if (this.depth > 0) {
        // -------一级分支永远都应该显示且一级分支没有父级分支，所以这里把一级分支排除不进行判断
        var parentIndex = this.branchLevel.toString().split('-').slice(0, -1).join('-');
        if (this.parentControl['lt-branch_' + parentIndex][0] === 'close' || this.parentControl['lt-branch_' + parentIndex][0] === 0) {
          return false;
        } else {
          return true;
        }
      } else {
        return true;
      }
    },
    branchClassName: function branchClassName(id) {
      // ------------branch的className
      var branchClass = '';
      var theId = id.toString();
      var theChildren = '';
      var theData = '';

      if (this.depth === 0) {
        // --获取branch的children值，如果该branch没有children(即没有子分支)，就给它加上lt-branch_level_0样式
        theData = this.menuData[id - 1];
        if (theData.children) theChildren = theData.children;
      } else {
        theData = this.menuData[theId.replace(this.branchLevel, '') - 1];
        if (theData.children) theChildren = theData.children;
      }

      branchClass = 'lt-branch lt-branch_level_' + (this.depth + 1); // --------添加常规分支className和当前级别的className
      if (theChildren.length === 0) {
        // ------如果branch没有子分支，就给branch加上 lt-branch_level_0 样式
        branchClass += ' lt-branch_level_0';
      }
      if (theId.toString() === this.clickBranchIndex.toString().substring(0, theId.length)) {
        // ------判断是否为当前active状态branch的祖先，如果是就加上active状态的className
        branchClass += ' lt-branch_level_' + (this.depth + 1) + '_active';
      }
      /* 用被点击分支index减掉当前分支的index剩余部分包含一个"-"，即表示当前分支仅仅比被点击分支高一级（如果高一级以上，那么replace后剩余部分一定会包含多个"-"），为了消除特殊index带来的buger，在判断的时候clickBranchIndex和theId前都加了一个字母，并且最后得加一个判断："-"在第一个位置 */
      var str = ('a' + this.clickBranchIndex.toString()).replace('a' + theId.toString(), '');
      if (str.split('-').length - 1 === 1 && str.indexOf('-') === 0) {
        branchClass += ' lt-branch_active_parent';
      }
      if (theId.toString() === this.clickBranchIndex.toString()) {
        // ------判断是否为当前active状态branch，如果是就加上active状态的className
        branchClass += ' lt-branch_active';
      }
      return branchClass;
    },
    getArrow: function getArrow(index) {
      // ---------图标来源（权重：menuData > 参数arrow > arrow.json。如果一个branch没有子级，那么这个branch没有图标，但如果menuData中该branch包含arrow属性，那么这个branch哪怕没有子级它也有自己的图标）
      /* 从menuData读取arrow */
      // let arr = index.toString().split('-')
      // let privatearrow = this.menuData[arr[arr.length - 1] - 1].arrow
      // if (privatearrow !== undefined && privatearrow.length === 2) {
      //   return privatearrow
      // }
      /* 从用户输入的参数arrow 和 arrow.json（默认）读取arrow */
      var arrow = this.arrow;
      if (arrow === '' || arrow === 'undefined') arrow = 1;
      if (!isNaN(parseInt(arrow))) {
        if (arrow === 0 || arrow === false) return false; // -----arrow等于0或者false时不显示箭头图标
        arrow = __WEBPACK_IMPORTED_MODULE_1__arrow_json___default.a['arrow' + arrow]; // ----------把arrow.json里的数据赋予arrow
      }

      return arrow; // -----不管用户是使用系统默认图标、自定义图片还是使用第三方图标或者在menuData中定义图标，arrow都为数组，数组第一个元素为展开时的图标，第二个元素为闭合时图标（数组元素可能是图片地址，也可能是代表第三方图标的className）
    },
    arrowCloseStyle: function arrowCloseStyle(index) {
      // -----箭头图标闭合时的样式
      if (this.getArrow(index)[0].indexOf('/') > -1) {
        // -----------this.getArrow中的元素包含“/”说明用户使用自定义图片作为图标
        return 'position: absolute;\n                top: 0;\n                left: 0;\n                bottom: 0;\n                right: 0;\n                font-size:' + this.arrowSize + 'px;\n                background: url(\'' + this.getArrow(index)[0] + '\') center no-repeat;';
      } else {
        // ---------------------------------------------此时用户使用默认图标或第三方图标库来作为图标
        return 'position: absolute;\n                font-size:' + this.arrowSize + 'px;\n                top: 50%;\n                transform: translateY(-50%);';
      }
    },
    arrowOpenStyle: function arrowOpenStyle(index) {
      // -----箭头图标展开时的样式
      if (isNaN(parseInt(this.getArrow(index)[1]))) {
        // ---如果this.getArrow(index)第二个元素不是纯数字，它一定是与第一个元素代表完全不一样的图片或className。
        if (this.getArrow(index)[0].indexOf('/') > -1) {
          // -----------this.getArrow中的元素包含“/”说明用户使用自定义图片作为图标
          return 'position: absolute;\n                  top: 0;\n                  left: 0;\n                  bottom: 0;\n                  right: 0;\n                  font-size: ' + this.arrowSize + 'px;\n                  background: url(\'' + this.getArrow(index)[1] + '\') center no-repeat;';
        } else {
          // ---------------------------------------------此时用户使用默认图标或第三方图标库来作为图标
          return 'position: absolute;\n                  font-size:' + this.arrowSize + 'px;\n                  top: 50%;\n                  transform: translateY(-50%);';
        }
      } else {
        // ---如果this.getArrow(index)第二个元素是纯数字，它表示与第一个元素是一样的图片或className，只是需要顺时针旋转一个角度。
        var transform = void 0;
        if (this.getArrow(index)[0].indexOf('/') > -1) {
          // ----如果不是是图片格式旋转
          transform = 'transform: rotate(' + this.getArrow(index)[1] + 'deg);';
        } else {
          transform = 'transform: translateY(-50%) rotate(' + this.getArrow(index)[1] + 'deg);';
        }
        return this.arrowCloseStyle(index) + '\n                ' + transform;
      }
    },
    arrowCloseClassName: function arrowCloseClassName(index) {
      // ----------闭合时箭头图标层的className
      if (!this.getArrow(index)) return '';
      if (this.getArrow(index)[0].indexOf('/') === -1) {
        // ---如果图标使用的不是图片（图片地址一定含有“/”）
        return this.getArrow(index)[0];
      }
      return '';
    },
    arrowOpenClassName: function arrowOpenClassName(index) {
      // ----------展开时箭头图标层的className
      if (!this.getArrow(index)) return '';
      if (isNaN(parseInt(this.getArrow(index)[1])) && this.getArrow(index)[1].toString().indexOf('/') === -1) {
        // ---如果this.getArrow(index)第二个元素不是纯数字并且图标使用的不是图片（图片地址一定含有“/”）
        return this.getArrow(index)[1];
      } else if (!isNaN(parseInt(this.getArrow(index)[1]))) {
        // ---this.getArrow(index)第二个元素是纯数字，展开时图标层的className和闭合时图标层的className应该一样，只是在设置style时旋转一定的角度就可以了（角度的度数是this.getArrow(index)）
        return this.getArrow(index)[0];
      }
      return '';
    },
    branchArrowStyle: function branchArrowStyle(index) {
      // ---------------------------------箭头图标的样式-------------------------
      var elIndex = document.getElementById('lt-branch-arrow_' + index);
      var arrowStyle = 'display:inline-block;';
      if (this.arrow === 0) return arrowStyle;
      if (elIndex) arrowStyle = elIndex.style.cssText;
      if (this.clickBranchIndex !== index || this.animation === false) {
        // ----禁止当前正处于动画状态的图标改变状态
        if (this.control['lt-branch_' + index][0] === 'open' || this.control['lt-branch_' + index][0] === 'always' || this.control['lt-branch_' + index][0] === 1) {
          // ----------分支展开或闭合的情况
          arrowStyle += this.arrowOpenStyle(index);
        } else {
          arrowStyle += this.arrowCloseStyle(index);
        }
      }
      return arrowStyle;
    },
    branchArrowClassName: function branchArrowClassName(index) {
      // ---------------箭头图标的className(当使用默认图标或第三方图标库时需要设定className)-------------------
      var arrowClass = '';
      if (this.control['lt-branch_' + index][0] === 'open' || this.control['lt-branch_' + index][0] === 'always' || this.control['lt-branch_' + index][0] === 1) {
        arrowClass += this.arrowOpenClassName(index);
      } else {
        arrowClass += this.arrowCloseClassName(index);
      }

      arrowClass += ' lt-branch-arrow lt-branch-arrow_level_' + (this.depth + 1); // --------添加常规分支图标className和当前级别图标的className
      var theId = index.toString();
      var theChildren = '';
      var theData = '';

      if (this.depth === 0) {
        // --获取branch的children值，如果该branch没有children(即没有子分支)，就给它加上lt-branch_level_0样式
        theData = this.menuData[index - 1];
        if (theData.children) theChildren = theData.children;
      } else {
        theData = this.menuData[theId.replace(this.branchLevel, '') - 1];
        if (theData.children) theChildren = theData.children;
      }

      if (theChildren.length === 0) {
        // ------如果branch没有子分支，就给branch加上 lt-branch-arrow_level_0 样式
        arrowClass += ' lt-branch-arrow_level_0';
      }
      if (theId.toString() === this.clickBranchIndex.toString().substring(0, theId.length)) {
        // ------判断是否为当前active状态branch的祖先，如果是就加上active状态的className
        arrowClass += ' lt-branch-arrow_level_' + (this.depth + 1) + '_active';
      }
      if (theId.toString() === this.clickBranchIndex.toString()) {
        // ------判断是否为当前active状态branch，如果是就加上active状态的className
        arrowClass += ' lt-branch-arrow_active';
      }
      /* 用被点击分支index减掉当前分支的index剩余部分包含一个"-"，即表示当前分支仅仅比被点击分支高一级（如果高一级以上，那么replace后剩余部分一定会包含多个"-"），为了消除特殊index带来的buger，在判断的时候clickBranchIndex和theId前都加了一个字母，并且最后得加一个判断："-"在第一个位置 */
      var str = ('a' + this.clickBranchIndex.toString()).replace('a' + index.toString(), '');
      if (str.split('-').length - 1 === 1 && str.indexOf('-') === 0) {
        arrowClass += ' lt-branch-arrow_active_parent';
      }
      return arrowClass;
    },
    branchSpanStyle: function branchSpanStyle(icon) {
      var theStyle = '';
      if (icon && icon !== '') theStyle = 'left:30px;';
      return 'position:relative;\n              ' + theStyle;
    },
    branchAnimationStyle: function branchAnimationStyle(id) {
      // ----animation的样式
      var theStyle = '';
      if (this.control['lt-branch_' + id][0] === 'open' || this.control['lt-branch_' + id][0] === 'always' || this.control['lt-branch_' + id][0] === 1) {
        theStyle += this.animationOpenStyle;
      } else if (this.control['lt-branch_' + id][0] === 'close' || this.control['lt-branch_' + id][0] === 0) {
        theStyle += this.animationCloseStyle;
      }
      return theStyle;
    },
    branchBoxStyle: function branchBoxStyle(id) {
      // -------------------------------------box的样式-----------------------
      return 'margin:0px;\n              padding:0px;\n              border:0px;\n              ' + this.boxStyle;
    }
  },
  computed: {
    brancharrowBgStyle: function brancharrowBgStyle() {
      // ----箭头图标背景层距离左边的距离，控制图标的位置
      var arrowLeft = parseInt(this.arrowLeft);
      if (arrowLeft < 0) return 'right: ' + Math.abs(arrowLeft) + 'px;';
      return 'left: ' + (this.indent * this.depth + arrowLeft) + 'px;';
    },
    branchIconStyle: function branchIconStyle() {
      // ----图标层样式（此图标层非箭头图标层，而是menuData上的icon图标）
      return 'position:absolute;\n              display:inline-block;\n              transform:translateY(-50%);\n              top: 50%;';
    },
    branchOpenStyle: function branchOpenStyle() {
      // ---branch展开时的样式
      return '';
    },
    branchCloseStyle: function branchCloseStyle() {
      // ---branch闭合时的样式
      return '';
    },
    animationOpenStyle: function animationOpenStyle() {
      return 'margin:0px;\n              padding:0px;\n              border:0px;';
    },
    animationCloseStyle: function animationCloseStyle() {
      return 'margin:0px;\n              padding:0px;\n              border:0px;\n              height:0px;\n              display:none;';
    },
    boxStyle: function boxStyle() {
      return '';
    }
  },
  created: function created() {
    /*
    将类似于下面 control 的值赋给data中的control，这样的话，就可通过this.control.branchLevel1[0]的值来控制分支branchLevel1的展开或闭合。其中branchLevel1中的1与每个分支中的data-index相同，这样每个分支在control中都有个对应的值来控制和判断它的状态。
    control: {
      lt-branch_1: ['close'],
      lt-branch_2: ['close'],
      lt-branch_3: ['close'],
    }
     */
    for (var n = 1; n < this.menuData.length + 1; n++) {
      this.$set(this.control, 'lt-branch_' + (this.branchLevel + n), ['close']); // ----------默认情况，所有branch都为闭合状态(数组第一个元素表示branch的展开或闭合状态['open'为展开，'close'为闭合]
      this.$set(this.control, 'lt-branch-arrow_' + (this.branchLevel + n), 'show'); // ----------默认情况，所有arrow都为显示状态('show'为显示，'hidden'为隐藏)

      if (this.open === 1) {
        this.$set(this.control, 'lt-branch_' + (this.branchLevel + n), ['open']); // ----------当open值为1时，所有branch都为展开状态
      } else if (_typeof(this.open) === 'object') {
        /* 当open为数组时，根据当前分支所处级别以及open中与该级别对应的元素来确定当前分支是“open”、“close”还是“always”状态。其中一级分支状态对应open第一个元素值， 二级分支状态对应open第二个元素值，以此类推。如果open长度不够，那当前级别的分支状态对应open最后一个元素的值 */
        if (this.open.length > this.depth + 1 || this.open.length === this.depth + 1) {
          this.$set(this.control, 'lt-branch_' + (this.branchLevel + n), [this.open[this.depth]]);
        } else {
          this.$set(this.control, 'lt-branch_' + (this.branchLevel + n), [this.open[this.open.length - 1]]);
        }
      }
      if (this.openOnly === 1 && this.control['lt-branch_' + (this.branchLevel + n)][0] !== 'always') {
        this.$set(this.control, 'lt-branch_' + (this.branchLevel + n), ['close']);
      }
    }
  }
});

/***/ }),

/***/ 351:
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tree__ = __webpack_require__(353);

const tree = {
  install (Vue, o) {
    if (typeof window !== 'undefined' && window.Vue) {
      Vue = window.Vue
    }
    const LTree = Vue.extend(__WEBPACK_IMPORTED_MODULE_0__tree__["a" /* default */])
    const menutree = new LTree({propsData: {
      menuData: o.menuData,
      open: o.open,
      openOnly: o.openOnly,
      indent: o.indent,
      arrow: o.arrow,
      arrowSize: o.arrowSize,
      arrowLeft: o.arrowLeft,
      animation: o.animation,
      eventArea: o.eventArea
    }})
    console.log('object')
    setTimeout(() => {
      menutree.$mount('.menutree')
    }, 0)
  }
}
/* harmony default export */ __webpack_exports__["a"] = (tree);


/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_tree_vue__ = __webpack_require__(347);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_2b7f6ba0_hasScoped_false_buble_transforms_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_tree_vue__ = __webpack_require__(363);
function injectStyle (ssrContext) {
  __webpack_require__(354)
}
var normalizeComponent = __webpack_require__(130)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_tree_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_2b7f6ba0_hasScoped_false_buble_transforms_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_tree_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(355);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(129)("8ad1bd70", content, true, {});

/***/ }),

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(91)(false);
// imports


// module
exports.push([module.i, "a,a:hover{color:#000;text-decoration:none}", ""]);

// exports


/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(357);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(129)("32c253f3", content, true, {});

/***/ }),

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(91)(false);
// imports
exports.i(__webpack_require__(358), "");

// module
exports.push([module.i, ".iconfont{font-family:iconfont!important;font-style:normal;font-weight:400;-webkit-font-smoothing:antialiased;-webkit-text-stroke-width:.2px;-moz-osx-font-smoothing:grayscale}.lt-branch-arrow-bg{width:20px;height:20px;position:absolute;transform:translateY(-50%);top:50%}.branch-enter-start{transform:translateX(-25px);opacity:0;transition:all .3s}.branch-enter-end,.branch-leave-start{transform:translateX(0);opacity:1}.branch-leave-start{transition:all .3s}.branch-leave-end{transform:translateX(-25px);opacity:0}", ""]);

// exports


/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(351);
exports = module.exports = __webpack_require__(91)(false);
// imports


// module
exports.push([module.i, "@font-face{font-family:iconfont;src:url(" + escape(__webpack_require__(349)) + ");src:url(" + escape(__webpack_require__(349)) + "#iefix) format(\"embedded-opentype\"),url(\"data:application/x-font-woff;charset=utf-8;base64,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\") format(\"woff\"),url(" + escape(__webpack_require__(359)) + ") format(\"truetype\"),url(" + escape(__webpack_require__(360)) + "#iconfont) format(\"svg\")}.iconfont{font-family:iconfont!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-sanjiao3:before{content:\"\\E600\"}.icon-shousuojiahao:before{content:\"\\E627\"}.icon-shousuojianhao:before{content:\"\\E628\"}.icon-wenjianjia:before{content:\"\\E663\"}.icon-tongxunguanlizhankai:before{content:\"\\E655\"}.icon-tongxunguanli:before{content:\"\\E656\"}.icon-wenjianjia1:before{content:\"\\E67F\"}.icon-wenjianjiafolder80:before{content:\"\\E743\"}.icon-wenjianjiashouqi:before{content:\"\\E653\"}.icon-wenjianjiazhankai:before{content:\"\\E654\"}.icon-jiantou12:before{content:\"\\E603\"}.icon-jianhao:before{content:\"\\E606\"}.icon-jiahao2:before{content:\"\\E648\"}.icon-yousanjiao:before{content:\"\\E629\"}.icon-jiajianchengchu-:before{content:\"\\E61C\"}.icon-jiajianchengchu-1:before{content:\"\\E61D\"}.icon-jiahao:before{content:\"\\E616\"}.icon-jianhao1:before{content:\"\\E617\"}.icon-sanjiao3-copy:before{content:\"\\E7E1\"}", ""]);

// exports


/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "iconfont.ttf?3fd9bbb39ea5fcd2e6e03f30a745e88e";

/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "iconfont.svg?5acc98856fb3b59d18bdd51df00c3819";

/***/ }),

/***/ 361:
/***/ (function(module, exports) {

module.exports = {"arrow1":["iconfont icon-jiantou12",45],"arrow2":["iconfont icon-sanjiao3-copy",90],"arrow3":["iconfont icon-yousanjiao",90],"arrow4":["iconfont icon-yousanjiao","iconfont icon-sanjiao3"],"arrow5":["iconfont icon-wenjianjia","iconfont icon-wenjianjiafolder80"],"arrow6":["iconfont icon-wenjianjiashouqi","iconfont icon-wenjianjiazhankai"],"arrow7":["iconfont icon-tongxunguanli","iconfont icon-tongxunguanlizhankai"],"arrow8":["iconfont icon-jiahao","iconfont icon-jianhao1"],"arrow9":["iconfont icon-shousuojiahao","iconfont icon-shousuojianhao"],"arrow10":["iconfont icon-jiajianchengchu-1","iconfont icon-jiajianchengchu-"]}

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._l((_vm.menuData),function(item,index){return _c('div',{key:index},[_c('div',{class:_vm.branchClassName(_vm.branchLevel+(index+1)),style:(_vm.branchStyle(_vm.branchLevel+(index+1))),attrs:{"id":'lt-branch_'+(_vm.branchLevel+(index+1)),"data-index":_vm.branchLevel+(index+1)},on:{"click":function($event){$event.preventDefault();_vm.clickBranch(_vm.branchLevel+(index+1), item.parameter, 'line')},"mouseover":function($event){$event.preventDefault();_vm.MouseOverBranch(item.parameter, 'line')}}},[(_vm.getArrow(_vm.branchLevel+(index+1))&&item.children&&item.children.length>0)?_c('div',{staticClass:"lt-branch-arrow-bg",style:(_vm.brancharrowBgStyle),attrs:{"id":'lt-branch-arrow-bg_'+(_vm.branchLevel+(index+1))}},[((_vm.control['lt-branch-arrow_'+(_vm.branchLevel+(index+1))]==='show')||(item.arrow!==undefined&&item.arrow.length===2))?_c('div',{class:_vm.branchArrowClassName(_vm.branchLevel+(index+1)),style:(_vm.branchArrowStyle(_vm.branchLevel+(index+1))),attrs:{"id":'lt-branch-arrow_'+(_vm.branchLevel+(index+1))}}):_vm._e()]):_vm._e(),_vm._v(" "),(item.icon&&item.icon!=='')?_c('div',{class:item.icon+' lt-branch-icon',style:(_vm.branchIconStyle),attrs:{"id":'lt-branch-icon_'+(_vm.branchLevel+(index+1))}}):_vm._e(),_vm._v(" "),_c('span',{style:(_vm.branchSpanStyle(item.icon)),on:{"click":function($event){$event.preventDefault();_vm.clickBranch(_vm.branchLevel+(index+1), item.parameter, 'content')},"mouseover":function($event){$event.preventDefault();_vm.MouseOverBranch(item.parameter, 'content')}}},[_vm._v(_vm._s(item.name))])]),_vm._v(" "),(item.children&&item.children.length>0)?_c('div',{style:(_vm.branchAnimationStyle(_vm.branchLevel+(index+1))),attrs:{"id":'lt-branch-animation_'+(_vm.branchLevel+(index+1))}},[_c('div',{style:(_vm.branchBoxStyle(_vm.branchLevel+(index+1), item.children)),attrs:{"id":'lt-branch-box_'+(_vm.branchLevel+(index+1))}},[(item.children&&item.children.length>0)?_c('branch',{attrs:{"menuData":item.children,"open":_vm.open,"openOnly":_vm.openOnly,"indent":_vm.indent,"arrow":_vm.arrow,"arrowLeft":_vm.arrowLeft,"arrowSize":_vm.arrowSize,"animation":_vm.animation,"eventArea":_vm.eventArea,"clickBranchIndex":_vm.clickBranchIndex,"branchLevel":_vm.branchLevel+(index+1)+'-',"depth":_vm.depth+1},on:{"sendClickBranchIndex":_vm.getClickBranchIndex}}):_vm._e()],1)]):_vm._e()])}))}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('branch',{attrs:{"menuData":_vm.menuData,"open":_vm.open,"openOnly":_vm.openOnly,"indent":_vm.indent,"arrow":_vm.arrow,"arrowLeft":_vm.arrowLeft,"arrowSize":_vm.arrowSize,"animation":_vm.animation,"eventArea":_vm.eventArea,"clickBranchIndex":_vm.clickBranchIndex},on:{"sendClickBranchIndex":_vm.getClickBranchIndex}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_v_menutree__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menudata_json__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menudata_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__menudata_json__);
//
//
//
//
//





__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_v_menutree__["a" /* default */], {
  menuData: __WEBPACK_IMPORTED_MODULE_2__menudata_json___default.a,
  arrow: 0,
  indent: 18,
  open: ['always', 0, 1],
  animation: 1,
  eventArea: 'content'
});

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].prototype.$menuClick = function (r) {
  if (typeof r !== 'undefined') {
    console.log(r);
  }
};

/* harmony default export */ __webpack_exports__["a"] = ({});

/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(367);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(129)("5af89828", content, true, {});

/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(91)(false);
// imports


// module
exports.push([module.i, ".lt-branch{margin:14px 0;background:#fff}.lt-branch span{color:#7f8c8d;cursor:pointer;font-size:15px}.lt-branch_level_1 span{margin-left:18px;color:#2c3e50;font-weight:600;font-size:20px;cursor:auto}.lt-branch_level_0 span{color:#34495e}.lt-branch_level_2 span:hover{border-bottom:2px solid #42b983}.lt-branch_level_2 span{color:#7f8c8d}.lt-branch_active span{color:#42b983;font-weight:700}.lt-branch_level_2_active span{color:#42b983;font-weight:600}", ""]);

// exports


/***/ }),

/***/ 368:
/***/ (function(module, exports) {

module.exports = [{"name":"基础","children":[{"name":"介绍","parameter":"/abc","children":[{"name":"Vue.js是什么","parameter":"/abc","children":[]},{"name":"起步","parameter":"/abc","children":[]},{"name":"声明式渲染","parameter":"/abc","children":[]},{"name":"条件与循环","parameter":"/abc","children":[]},{"name":"处理用户输入","parameter":"/abc","children":[]},{"name":"组件化应用构建","parameter":"/abc","children":[{"name":"与自定义元素的关系","parameter":"/abc","children":[]}]},{"name":"准备好了吗","parameter":"/abc","children":[]}]},{"name":"Vue实例","parameter":"/abc","children":[{"name":"创建一个Vue实例","parameter":"/abc","children":[]},{"name":"数据与方法","parameter":"/abc","children":[]},{"name":"实例生命周期钩子","parameter":"/abc","children":[]},{"name":"生命周期图示","parameter":"/abc","children":[]}]},{"name":"模板语法","parameter":"/abc","children":[{"name":"插槽","parameter":"/abc","children":[{"name":"文本","parameter":"/abc","children":[]},{"name":"原始HTML","parameter":"/abc","children":[]},{"name":"特性","parameter":"/abc","children":[]},{"name":"使用JavaScript表达式","parameter":"/abc","children":[]}]},{"name":"指令","parameter":"/abc","children":[{"name":"参数","parameter":"/abc","children":[]},{"name":"修饰符","parameter":"/abc","children":[]}]},{"name":"缩写","parameter":"/abc","children":[{"name":"v-bind缩写","parameter":"/abc","children":[]},{"name":"v-on缩写","parameter":"/abc","children":[]}]}]},{"name":"计算属性和侦听器","parameter":"/abc","children":[{"name":"计算属性","parameter":"/abc","children":[{"name":"基础例子","parameter":"/abc","children":[]},{"name":"计算属性缓存vs方法","parameter":"/abc","children":[]},{"name":"计算属性vs侦听属性","parameter":"/abc","children":[]},{"name":"计算属性的setter","parameter":"/abc","children":[]}]},{"name":"侦听器","parameter":"/abc","children":[]}]},{"name":"Class与Style绑定","parameter":"/abc","children":[{"name":"绑定HTML Class","parameter":"/abc","children":[{"name":"对象语法","parameter":"/abc","children":[]},{"name":"数组语法","parameter":"/abc","children":[]},{"name":"用在组件上","parameter":"/abc","children":[]}]},{"name":"绑定内联样式","parameter":"/abc","children":[{"name":"对象语法","parameter":"/abc","children":[]},{"name":"数组语法","parameter":"/abc","children":[]},{"name":"自动添加前缀","parameter":"/abc","children":[]},{"name":"多重值","parameter":"/abc","children":[]}]}]},{"name":"条件渲染","parameter":"/abc","children":[{"name":"v-if","parameter":"/abc","children":[{"name":"在<template>元素上使用v-if条件渲染分组","parameter":"/abc","children":[]},{"name":"v-else","parameter":"/abc","children":[]},{"name":"v-else-if","parameter":"/abc","children":[]},{"name":"用key管理可复用的元素","parameter":"/abc","children":[]}]},{"name":"v-show","parameter":"/abc","children":[]},{"name":"v-if vs v-show","parameter":"/abc","children":[]},{"name":"v-if与v-for一起使用","parameter":"/abc","children":[]}]},{"name":"列表渲染","parameter":"/abc","children":[{"name":"用v-for把一个数组对应为一组元素","parameter":"/abc","children":[]},{"name":"一个对象的v-for","parameter":"/abc","children":[]},{"name":"key","parameter":"/abc","children":[]},{"name":"数组更新检测","parameter":"/abc","children":[{"name":"变异方法","parameter":"/abc","children":[]},{"name":"替换数组","parameter":"/abc","children":[]},{"name":"注意事项","parameter":"/abc","children":[]}]},{"name":"对象更改检测注意事项","parameter":"/abc","children":[]},{"name":"显示过滤/排序结果","parameter":"/abc","children":[]},{"name":"一段取值范围的v-for","parameter":"/abc","children":[]},{"name":"v-for on a <template>","parameter":"/abc","children":[]},{"name":"v-for with v-if","parameter":"/abc","children":[]},{"name":"一个数组的v-for","parameter":"/abc","children":[]}]},{"name":"事件处理","parameter":"/abc","children":[{"name":"监听事件","parameter":"/abc","children":[]},{"name":"事件处理方法","parameter":"/abc","children":[]},{"name":"内联处理器中的方法","parameter":"/abc","children":[]},{"name":"事件修饰符","parameter":"/abc","children":[]},{"name":"按键修饰符","parameter":"/abc","children":[{"name":"自动匹配按键修饰符","parameter":"/abc","children":[]}]},{"name":"系统修饰符","parameter":"/abc","children":[{"name":".exact修饰符","parameter":"/abc","children":[]},{"name":"鼠标按钮修饰符","parameter":"/abc","children":[]}]},{"name":"为什么在HTML中监听事件","parameter":"/abc","children":[]}]},{"name":"表单输入绑定","parameter":"/abc","children":[{"name":"基础用法","parameter":"/abc","children":[{"name":"文本","parameter":"/abc","children":[]},{"name":"多行文本","parameter":"/abc","children":[]},{"name":"复选框","parameter":"/abc","children":[]},{"name":"单选按钮","parameter":"/abc","children":[]},{"name":"选择框","parameter":"/abc","children":[]}]},{"name":"值绑定","parameter":"/abc","children":[{"name":"复选框","parameter":"/abc","children":[]},{"name":"单选按钮","parameter":"/abc","children":[]},{"name":"选择框的选项","parameter":"/abc","children":[]}]},{"name":"修饰符","parameter":"/abc","children":[{"name":".lazy","parameter":"/abc","children":[]},{"name":".number","parameter":"/abc","children":[]},{"name":".trim","parameter":"/abc","children":[]}]},{"name":"在组件上使用v-model","parameter":"/abc","children":[]}]},{"name":"组件基础","parameter":"/abc","children":[{"name":"基本示例","parameter":"/abc","children":[]},{"name":"组件的复用","parameter":"/abc","children":[{"name":"data必须是一个函数","parameter":"/abc","children":[]}]},{"name":"组件的组织","parameter":"/abc","children":[]},{"name":"通过Prop向子组件传递数据","parameter":"/abc","children":[]},{"name":"单个根元素","parameter":"/abc","children":[]},{"name":"通过事件向父级组件发送信息","parameter":"/abc","children":[{"name":"使用事件抛出一个值","parameter":"/abc","children":[]},{"name":"在组件上使用v-model","parameter":"/abc","children":[]}]},{"name":"通过插槽分发内容","parameter":"/abc","children":[]},{"name":"动态组件","parameter":"/abc","children":[]},{"name":"解析DOM模板时的注意事项","parameter":"/abc","children":[]}]}]},{"name":"深入了解组件","children":[{"name":"组件注册","parameter":"/abc","children":[{"name":"组件名","parameter":"/abc","children":[{"name":"组件名大小写","parameter":"/abc","children":[]}]},{"name":"全局组件","parameter":"/abc","children":[]},{"name":"局部组件","parameter":"/abc","children":[]},{"name":"模块系统","parameter":"/abc","children":[{"name":"在模块系统中局部注册","parameter":"/abc","children":[]},{"name":"基础组件的自动化全局注册","parameter":"/abc","children":[]}]}]},{"name":"Prop","parameter":"/abc","children":[{"name":"Prop的大小写","parameter":"/abc","children":[]},{"name":"Prop类型","parameter":"/abc","children":[]},{"name":"传递静态或动态Prop","parameter":"/abc","children":[{"name":"传入一个数字","parameter":"/abc","children":[]},{"name":"传入一个布尔值","parameter":"/abc","children":[]},{"name":"传入一个数组","parameter":"/abc","children":[]},{"name":"传入一个对象","parameter":"/abc","children":[]},{"name":"传入一个对象的所有属性","parameter":"/abc","children":[]}]},{"name":"单项数据流","parameter":"/abc","children":[]},{"name":"Prop验证","parameter":"/abc","children":[{"name":"类型检查","parameter":"/abc","children":[]}]},{"name":"非Prop的特性","parameter":"/abc","children":[{"name":"替换/合并已有的特性","parameter":"/abc","children":[]},{"name":"禁用特性继承","parameter":"/abc","children":[]}]}]},{"name":"自定义事件","parameter":"/abc","children":[{"name":"事件名","parameter":"/abc","children":[]},{"name":"自定义组件的v-model","parameter":"/abc","children":[]},{"name":"将原生事件绑定到组件","parameter":"/abc","children":[]},{"name":".sync修饰符","parameter":"/abc","children":[]}]},{"name":"插槽","parameter":"/abc","children":[{"name":"插槽内容","parameter":"/abc","children":[]},{"name":"具名插槽","parameter":"/abc","children":[]},{"name":"插槽的默认内容","parameter":"/abc","children":[]},{"name":"编译作用域","parameter":"/abc","children":[]},{"name":"作用域插槽","parameter":"/abc","children":[{"name":"结构slot-scope","parameter":"/abc","children":[]}]}]},{"name":"动态组件&异步组件","parameter":"/abc","children":[{"name":"在动态组件上使用keep-alive","parameter":"/abc","children":[{"name":"处理加载状态","parameter":"/abc","children":[]}]},{"name":"异步组件","parameter":"/abc","children":[]}]},{"name":"处理边界情况","parameter":"/abc","children":[{"name":"访问元素&组件","parameter":"/abc","children":[{"name":"访问根实例","parameter":"/abc","children":[]},{"name":"访问父级组件实例","parameter":"/abc","children":[]},{"name":"访问子组件实例或子元素","parameter":"/abc","children":[]},{"name":"依赖注入","parameter":"/abc","children":[]}]},{"name":"程序化的事件侦听器","parameter":"/abc","children":[]},{"name":"循环引用","parameter":"/abc","children":[{"name":"递归组件","parameter":"/abc","children":[]},{"name":"组件之间的循环引用","parameter":"/abc","children":[]}]},{"name":"模板定义的替代品","parameter":"/abc","children":[{"name":"内联模板","parameter":"/abc","children":[]},{"name":"X-Templates","parameter":"/abc","children":[]}]},{"name":"控制更新","parameter":"/abc","children":[{"name":"强制更新","parameter":"/abc","children":[]},{"name":"通过v-once创建低开销的静态组件","parameter":"/abc","children":[]}]}]}]},{"name":"过渡&动画","children":[{"name":"进入/离开&列表过渡","parameter":"/abc","children":[{"name":"概述","parameter":"/abc","children":[]},{"name":"单元素/组件的过渡","parameter":"/abc","children":[{"name":"过渡的类名","parameter":"/abc","children":[]},{"name":"CSS过渡","parameter":"/abc","children":[]},{"name":"CSS动画","parameter":"/abc","children":[]},{"name":"自定义过渡的类名","parameter":"/abc","children":[]},{"name":"同时使用过渡和动画","parameter":"/abc","children":[]},{"name":"显性的过渡持续时间","parameter":"/abc","children":[]},{"name":"JavaScript钩子","parameter":"/abc","children":[]}]},{"name":"初始渲染的过渡","parameter":"/abc","children":[]},{"name":"多个元素的过渡","parameter":"/abc","children":[{"name":"过渡模式","parameter":"/abc","children":[]}]},{"name":"多个组件的过渡","parameter":"/abc","children":[]},{"name":"列表过渡","parameter":"/abc","children":[{"name":"列表的进入/离开过渡","parameter":"/abc","children":[]},{"name":"列表的排序过渡","parameter":"/abc","children":[]},{"name":"列表的交错过渡","parameter":"/abc","children":[]}]},{"name":"可复用的过渡","parameter":"/abc","children":[]},{"name":"动态过渡","parameter":"/abc","children":[]}]},{"name":"状态过渡","parameter":"/abc","children":[{"name":"状态动画与侦听器","parameter":"/abc","children":[]},{"name":"动态状态过渡","parameter":"/abc","children":[]},{"name":"把过渡放的组件里","parameter":"/abc","children":[]},{"name":"赋予设计以生命","parameter":"/abc","children":[]}]}]},{"name":"可复用性&组合","children":[{"name":"混入","parameter":"/abc","children":[{"name":"基础","parameter":"/abc","children":[]},{"name":"选项合并","parameter":"/abc","children":[]},{"name":"全局混入","parameter":"/abc","children":[]},{"name":"自定义选项合并策略","parameter":"/abc","children":[]}]},{"name":"自定义指令","parameter":"/abc","children":[{"name":"简介","parameter":"/abc","children":[]},{"name":"钩子函数","parameter":"/abc","children":[]},{"name":"钩子函数参数","parameter":"/abc","children":[]},{"name":"函数简写","parameter":"/abc","children":[]},{"name":"对象字面量","parameter":"/abc","children":[]}]},{"name":"渲染函数&JSX","parameter":"/abc","children":[{"name":"基础","parameter":"/abc","children":[]},{"name":"节点、树以及虚拟DOM","parameter":"/abc","children":[{"name":"虚拟DOM","parameter":"/abc","children":[]}]},{"name":"createElement参数","parameter":"/abc","children":[{"name":"深入data对象","parameter":"/abc","children":[]},{"name":"完整示例","parameter":"/abc","children":[]},{"name":"约束","parameter":"/abc","children":[]}]},{"name":"使用JavaScript代替模板功能","parameter":"/abc","children":[{"name":"v-if和v-for","parameter":"/abc","children":[]},{"name":"v-model","parameter":"/abc","children":[]},{"name":"事件&按键修饰符","parameter":"/abc","children":[]},{"name":"插槽","parameter":"/abc","children":[]}]},{"name":"JSX","parameter":"/abc","children":[]},{"name":"函数式组件","parameter":"/abc","children":[{"name":"向子元素或子组件传递特性和事件","parameter":"/abc","children":[]},{"name":"slots()和children对比","parameter":"/abc","children":[]}]},{"name":"模板编译","parameter":"/abc","children":[]}]},{"name":"插件","parameter":"/abc","children":[{"name":"开发插件","parameter":"/abc","children":[]},{"name":"使用插件","parameter":"/abc","children":[]}]},{"name":"过滤器","parameter":"/abc","children":[]}]},{"name":"工具","children":[{"name":"生产环境部署","parameter":"/abc","children":[{"name":"开启生产环境模式","parameter":"/abc","children":[]},{"name":"模板预编译","parameter":"/abc","children":[]},{"name":"提取组件的CSS","parameter":"/abc","children":[]},{"name":"跟踪运行时错误","parameter":"/abc","children":[]}]},{"name":"单文件组件","parameter":"/abc","children":[{"name":"介绍","parameter":"/abc","children":[{"name":"怎么看待关注点分离","parameter":"/abc","children":[]}]},{"name":"起步","parameter":"/abc","children":[{"name":"例子沙箱","parameter":"/abc","children":[]},{"name":"针对刚接触JavaScript模块开发系统的用户","parameter":"/abc","children":[]},{"name":"针对高级用户","parameter":"/abc","children":[]}]}]},{"name":"单元测试","parameter":"/abc","children":[{"name":"配置和工具","parameter":"/abc","children":[]},{"name":"简单的断言","parameter":"/abc","children":[]},{"name":"编写可被测试的组件","parameter":"/abc","children":[]},{"name":"断言异步更新","parameter":"/abc","children":[]}]},{"name":"TypeScript支持","parameter":"/abc","children":[{"name":"发布为NPM包的官方声明文件","parameter":"/abc","children":[]},{"name":"推荐配置","parameter":"/abc","children":[]},{"name":"开发工具链","parameter":"/abc","children":[]},{"name":"工程创建","parameter":"/abc","children":[]},{"name":"编辑器支持","parameter":"/abc","children":[]},{"name":"基本用法","parameter":"/abc","children":[]},{"name":"基于类的Vue组件","parameter":"/abc","children":[]},{"name":"增强类型以配合插件使用","parameter":"/abc","children":[]},{"name":"标注返回值","parameter":"/abc","children":[]}]}]},{"name":"模块化","children":[{"name":"路由","parameter":"/abc","children":[{"name":"官方路由","parameter":"/abc","children":[]},{"name":"从零开始简单的路由","parameter":"/abc","children":[]},{"name":"整合第三方路由","parameter":"/abc","children":[]}]},{"name":"状态管理","parameter":"/abc","children":[{"name":"类Flux状态管理的官方实现","parameter":"/abc","children":[{"name":"React的开发者请参考以下信息","parameter":"/abc","children":[]}]},{"name":"简单状态管理起步使用","parameter":"/abc","children":[]}]},{"name":"服务端渲染","parameter":"/abc","children":[{"name":"SSR完全指南","parameter":"/abc","children":[]},{"name":"Nuxt.js","parameter":"/abc","children":[]}]}]},{"name":"内在","children":[{"name":"深入响应式原理","parameter":"/abc","children":[{"name":"如何追踪变化","parameter":"/abc","children":[]},{"name":"监测变化的注意事项","parameter":"/abc","children":[]},{"name":"声明响应式属性","parameter":"/abc","children":[]},{"name":"异步更新队列","parameter":"/abc","children":[]}]}]}]

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"menutree"})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});
//# sourceMappingURL=1.build.js.map