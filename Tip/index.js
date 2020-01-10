import Tips from './Tips.vue'

let $vm = null

export default {
  install(Vue,options) {
    if(!$vm){
      let vueTips = Vue.extend(Tips)
      $vm = new vueTips({
        el: document.createElement('div')
      })
      document.body.appendChild($vm.$el)
    }
    Vue.prototype.$msg = $vm.add
  }
}
