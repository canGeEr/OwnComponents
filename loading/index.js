import Loading from './Load.vue'

let $vm = null

export default {
  install(Vue,options){
    if(!$vm){
      let vueLoad = Vue.extend(Loading)
      $vm = new vueLoad({
        el: document.createElement('div')
      })
      document.body.appendChild($vm.$el)
    }
    //为所有的Vue实例添加一个$load属性 ,其实从这里可以看到，vuex和插件之间的关系吗，
    Vue.prototype.$load = {
      show: $vm.show,
      hidden: $vm.hidden
    }
  }
};
