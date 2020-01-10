export function debounce(callback,time){  //去抖
  let timer = null
  return function(...args){
    if(timer) clearTimeout(timer) 
    timer = setTimeout(callback.bind(this,...args),time)
  }
}