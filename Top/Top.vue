<template>
  <transition tag="div">
    <div id="to-top" v-if="showRocket" @click="toTop">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 200 200" xml:space="preserve" fill="transparent">
        <path fill="black" d="M163.8,149.9v3.4l-39.3-7.9c-2.5,8.5-12.7,15-24.6,15c-11.9,0-22.1-6.5-24.6-15.3l-39,7.6v-3.4c0-19.2,5.4-33.1,17.5-44.7
    C49.5,49.8,74.1,15,98.4,0.8L99.9,0l1.4,0.8C125.6,15,149.9,49.8,146,104.7C158.4,116.3,163.8,130.1,163.8,149.9z M112.3,81.5
    c7.4-6.8,7.9-18.4,1.1-25.7c-6.8-7.4-18.4-7.9-25.7-1.1c-7.3,6.8-7.9,18.4-1.1,25.8C93.3,87.7,104.9,88.3,112.3,81.5z M109.1,179.1
    c0,8.2-9.1,20.9-9.1,20.9s-9.1-13.6-9.1-20.9c0-6.2,4-11.3,9.1-11.3S109.1,172.8,109.1,179.1z" />
      </svg>
    </div>
  </transition>
</template>

<script>
  export default {
    named: 'totop',
    data() {
      return {
        showRocket: false
      }
    },
    methods: {
      toTop() {
        let topDis = document.documentElement.scrollTop
        let timer = setInterval(function(){
          topDis -= Math.trunc(topDis / 5)
          if(topDis>5){
            document.documentElement.scrollTop = topDis
          }else{
            clearInterval(timer)
          }
        },10)
      }
    },
    mounted() {
      let vm = this
      window.addEventListener('scroll', function ($event) {
        let topDis = document.documentElement.scrollTop
        if (topDis > document.documentElement.clientHeight/2) {
          vm.showRocket = true
        } else {
          vm.showRocket = false
        }
      })
    }
  }

</script>

<style scoped>
  #to-top {
    position: fixed;
    right: 1rem;
    bottom: 2rem;
    width: 2rem;
    height: 2rem;
  }
  .v-enter-active,.v-leave-active{
    transition: opacity 0.5s,transform 0.5s ease-out;
  }
  .v-enter,.v-leave-to{
    opacity: 0;
  }
  .v-leave-to{
    transform: translate(0,-5vw);
  }

</style>
