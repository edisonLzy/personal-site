<template>
 <transition name="slideFromBottom">
  <button 
  v-show="visible"
  @click="toTop"
  class="l-toTop l-flex-center" title="back to TOP">
     <l-icon iconClass="backTop"></l-icon>
     <i class="text">TOP</i>
  </button>
  </transition>
</template>

<script lang="ts">
import { Vue, Component} from "vue-property-decorator";
import {getScrollTop,addHandler,removeHandler,scrollToTop} from "@/utils/window";
@Component({
    name: "l-toTop",
})
export default class lToTop extends Vue {
  static componentname = "l-toTop";
  // visible
  visible = false;
  threshold = 600; // 按钮显示的阀值 
  // 监听 滚动条高度变化
  onScroll(){
      const value = getScrollTop();
      this.visible = this.threshold < value;
  }   
  toTop(){
      scrollToTop();
  }
  mounted() {
      addHandler(window,"scroll",this.onScroll.bind(this));
      this.$once("hook:destroyed",()=>{
          removeHandler(window,"scroll",this.onScroll.bind(this));
      });   
  }
}
</script>

<style lang="scss" scoped>
.l-toTop {
    flex-direction: column;
    position:fixed;
    bottom:5vw;
    right:5vw;
    color: #8590a6;
    background:#fff;
    border-radius:$g-radius;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    border:1px solid #ffffff;
    cursor:pointer;
    padding:.6em;
    font-size:25px;
    transition:$g-transitionTime;
    .text{
      padding-top:.5em;
       font-size:12px;
    }
    &:hover{
     border-color:$g-themeColor;
    }
}

.slideFromBottom-enter-active, .slideFromBottom-leave-active {
    transition: .5s;
  }
.slideFromBottom-enter, .slideFromBottom-leave-to {
    transform: translateY(80%);
    opacity: 0
}
</style>
