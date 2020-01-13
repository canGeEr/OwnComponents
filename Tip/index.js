// import TipsBox from './TipsBox.vue'
import Tip from './Tip'

const Tips = {
  install(Vue,options) {
    //创建容器, 将其挂载到本对象上
    const TipsBoxDiv = document.createElement('div');
    TipsBoxDiv.id = 'notice';
    TipsBoxDiv.style.cssText = `
      position: absolute;
      z-index: 99;
      top: 1rem;
      right: 1rem;
      display: flex;
      flex-direction: column;
    `;
    //不知道为什么无法直接到this.TipsBoxDiv.id = '''之类
    this.tipsBoxDiv = TipsBoxDiv;
    //先挂载到DOM,提供的容器
    document.body.appendChild(this.tipsBoxDiv)
    //将Tip类挂载到该对象上
    this.TipVue = Vue.extend(Tip);
  },
  success(option) {
    const tip = new this.TipVue({
      data: {
        title: option.title,
        desc: option.desc,
        duration: option.duration
      }
    });
    const TipDiv  = document.createElement('div');
    this.tipsBoxDiv.appendChild(TipDiv);
    tip.$mount(TipDiv);
  }
  
}

//被导出后

export default Tips;