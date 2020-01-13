<template>
  <div v-if="canShow" class="tip">
    <div>
      <h4>{{title}}</h4>
      <span class="close" @click="destroyMyself"></span>
    </div>
    <p>{{desc}}</p>
  </div>
</template>

<script>
export default {
  name: "Tip",
  data() {
    return {
      canShow: true,
    }
  },
  methods: {  
    destroyMyself() {
      this.canShow = false
    }
  },
  mounted() {
    const duration = this.duration ? this.duration  : 3
    setTimeout(()=>{
      if(this.canShow) this.destroyMyself();
    }, duration*1000)
  }
};
</script>

<style scoped>

.tip {
  position: relative;
  padding: 1rem 1rem;
  margin: 0.25vw 0;
  min-width: 10rem;
  font-size: 1.15rem;
  border-radius: 0.5rem;
  color: black;
  border: 1px solid black;
  align-items: center;
  background-color: white;
}

.close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 1rem;
  height: 1rem;
}

.close::after,
.close::before {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  content: "";
  width: 0.75rem;
  height: 1px;
  background-color: black;
}

.close::after {
  transform: rotate(45deg);
}

.close::before {
  transform: rotate(-45deg);
}

.close:hover {
  cursor: pointer;
}

.icon {
  display: inline-block;
  vertical-align: middle;
  width: 1.5rem;
  height: 1.5rem;
  background-size: cover;
  background-position: center;
}

.tip span:nth-child(2) {
  padding: 0.25rem 0.5rem;
}

.fade-enter-active, .fade-leave-active {
  transition: transform 0.15s linear;
}
.fade-enter, .fade-leave-to {
  transform: translate(0,-2.5vh);
}
</style>



















