import Top from './Top.vue'

let $vm = null

export default {
  install(Vue,options){
    //挂载$vm ,   
    if(!$vm){
      //Vue extend() 现在它就是一个类,
      let vueTop = Vue.extend(Top)  
      $vm = new vueTop({
        el: document.createElement('div')
        //这里是在挂载的时候会去判断如果是字符串怎么办,或者是个ele
      })
      document.body.appendChild($vm.$el)
    }
  }
};
