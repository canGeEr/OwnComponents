export default function throttle(fun, duration,delay) {
  let startTime = new Date()
  let timer
  return function () {
      let now = new Date()
      let content = this
      let arg = arguments
      if (now - startTime < duration) {
          防抖
          if (timer) clearTimeout(timer)
          timer = setTimeout(function () {
              startTime = now
              fun.apply(content, arg)
          }, delay)
      } else {
          startTime = now
          fun.apply(content, arg)
      }
  }
}

