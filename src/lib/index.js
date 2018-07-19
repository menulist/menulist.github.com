import myTree from './tree'
const tree = {
  install (Vue, o) {
    if (typeof window !== 'undefined' && window.Vue) {
      Vue = window.Vue
    }
    const LTree = Vue.extend(myTree)
    const listtree = new LTree({propsData: {
      listData: o.listData,
      open: o.open,
      openOnly: o.openOnly,
      indent: o.indent,
      arrow: o.arrow,
      arrowSize: o.arrowSize,
      arrowLeft: o.arrowLeft,
      animation: o.animation,
      eventArea: o.eventArea
    }})
    setTimeout(() => {
      listtree.$mount('.listtree')
    }, 0)
  }
}
export default tree
