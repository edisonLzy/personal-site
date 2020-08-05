<template>
  <transition name="fadeIn">
    <div class="l-loading" v-show="visible">
      <section class="l-loading-box">
        <span>K</span>
        <span>O</span>
        <span>B</span>
        <span>E</span>
      </section>
    </div>
  </transition>
</template>

<script lang="ts">
import { scroll } from "@/utils/window";
import { Component, Vue } from "vue-property-decorator";
@Component({
    name: "l-loading",
})
export default class LLoading extends Vue {
  static componentname = "l-loading";
  visible = true;
  close() {
      scroll.show();
      this.visible = false;
  }
  start() {
      scroll.hidden();
      this.visible = true;
  }
}
</script>

<style scoped lang='scss'>
.l-loading {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  &-box {
    width: 30px;
    height: 30px;
    position: relative;
    animation: loader 2s infinite ease-in-out;
  }
  &-box span {
    width: 30px;
    height: 30px;
    position: absolute;
    left: 0;
    top: 0;
    border: 2px solid #0b1b48;
    text-align: center;
    line-height: 30px;
  }
  &-box span:nth-child(1) {
    animation: span-1 1s linear infinite;
  }
  &-box span:nth-child(2) {
    animation: span-2 1s linear infinite;
  }
  &-box span:nth-child(3) {
    animation: span-3 1s linear infinite;
  }
  &-box span:nth-child(4) {
    animation: span-4 1s linear infinite;
  }
}
@keyframes loader {
  0% {
    transform: rotate(-45deg);
  }
  30% {
    transform: rotate(-135deg);
  }
  100% {
    transform: rotate(-225deg);
  }
}
@keyframes span-1 {
  0% {
    transform: translate(0);
  }
  30% {
    transform: translate(-30px, 0);
    border-color: #ee4d68;
  }
  100% {
    transform: translate(0);
  }
}
@keyframes span-2 {
  0% {
    transform: translate(0);
  }
  50% {
    transform: translate(30px, 0);
    border-color: #875678;
  }
  100% {
    transform: translate(0);
  }
}
@keyframes span-3 {
  0% {
    transform: translate(0);
  }
  50% {
    transform: translate(0, -30px);
    border-color: #ff9900;
  }
  100% {
    transform: translate(0);
  }
}
@keyframes span-4 {
  0% {
    transform: translate(0);
  }
  50% {
    transform: translate(0, 30px);
    border-color: #00e4f6;
  }
  100% {
    transform: translate(0);
  }
}
</style>
