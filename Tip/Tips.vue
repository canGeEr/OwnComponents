<template>
  <div class="container-tip">
    <transition name="fade">
      <div v-for="item of errorMsg" :key="item.content" class="tip att-flex">
        <span class="icon" :style="{backgroundImage: `url(${ item.type ? trueSvg : falseSvg})`}"></span>
        <span>{{item.content}}</span>
        <span class="close" @click="del(item.content)"></span>
      </div>
    </transition>
  </div>
</template>

<script>
import falseSvg from "@assets/false.svg";
import trueSvg from "@assets/true.svg";
export default {
  /*
      每一次的调用都会让这里产生新值，或者说开始一个新的component
    */
  name: "Tip",
  data() {
    return {
      errorMsg: {},
      falseSvg,
      trueSvg
    };
  },
  methods: {
    del(pro) {
      this.$delete(this.errorMsg, pro);
    },
    add(item) {
      if (!(item.content in this.errorMsg)) {
        this.$set(this.errorMsg, item.content, item);
        setTimeout(this.del.bind(this, item.content), 1000);
      }
    }
  },
  mounted() {}
};
</script>

<style scoped>
.container-tip {
  position: absolute;
  z-index: 99;
  top: 2.5vh;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  flex-direction: column;
}

.tip {
  position: relative;
  padding: 0.5rem 1rem;
  margin: 0.25vw 0;
  font-size: 1.15rem;
  border-radius: 0.5rem;
  border: 1px solid black;
  align-items: center;
  background-color: white;
}

.close {
  position: absolute;
  top: 0.05rem;
  right: 0.05rem;
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
