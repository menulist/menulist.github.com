import myTree from './tree'
const tree = {
  install (Vue, o) {
    if (typeof window !== 'undefined' && window.Vue) {
      Vue = window.Vue
    }
    const LTree = Vue.extend(myTree)
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
export default tree
