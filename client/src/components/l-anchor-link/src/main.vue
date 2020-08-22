<template>
 <transition appear name="slideBottom" mode="out-in">
  <a :class="['l-anchor-link',`offset-${level-1}`,{
  'active':active
  }]" @click="focus">
    <slot>{{title}}</slot>
  </a>
   </transition>
</template>
<script lang="ts">
import { findDom, elToTop, getScrollValueWhenElReac } from "@/utils/dom";
import { debounce } from "@/utils";
import {
    scrollToTarget,
    addHandler,
    removeHandler,
    getScrollTop,
} from "@/utils/window";
import { Component, Vue, Inject, Prop } from "vue-property-decorator";
@Component({
    name: "l-anchor-link",
    components: {},
})
export default class LAnchorLink extends Vue {
  static componentname = "l-anchor-link";
  @Inject("offset")
  readonly offset!: number;

  @Inject("threshold")
  readonly threshold!: number;

  @Prop({
      type: String,
      required: true,
  })
  id!: string;
  @Prop({
      type: String,
      required: true,
  })
  level!:string;
  @Prop({
      type: String,
      required: true,
  })
  title!: string;
  
  get min(){
      return this.scrollVal - this.offset;
  }
  get max(){
      return this.scrollVal + this.offset;
  }
  // 记录当前锚点的状态
  active = false;
  // 记录当前滚动条的位置
  scrollVal = 0;
  focus() {
      this.beActive();
      scrollToTarget(this.scrollVal);
  }
  beActive(){
      // 通知 父组件执行其他 link组件的beDeActive方法
      this.$parent.$emit("cancel",false);
      this.active = true;
  }
  beDeActive(){
      this.active = false;
  }
  // 获取dom 并计算其到顶部到距离
  getDom() {
      const el = findDom(`#${this.id}`);
      if (el) {
          this.scrollVal = getScrollValueWhenElReac(el, this.threshold+this.offset);
      }
  }
  init() {
      // 保证渲染link组件的时候，文章已经渲染完毕
      setTimeout(() => {
          this.getDom();
      }, 500);
  }
  // 监听滚动条变化
  onScroll() {
      const value = getScrollTop();
      if(value  < this.max && this.min < value){
          this.beActive();
      }
  }
  handler = debounce(this.onScroll, 50, false, null);
  mounted() {
      this.init();
      addHandler(window, "scroll", this.onScroll);
      this.$once("hook:destroyed", () => {
          removeHandler(window, "scroll", this.onScroll);
      });
  }
}
</script>
<style lang="scss" scoped>


@for $i from 1 through 4 {
    .offset-#{$i} {
        padding-left: #{$i * 10px};
        font-size: #{ 20px/$i}!important;
    }
}


.l-anchor-link {
  position: relative;
  font-weight: bold;
  transition: all $g-transitionTime;
  margin-bottom: 10px;
  font-size: 1.5em;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0px;
    height: 2px;
    transition: all $g-transitionTime;
    background-color: rgb(19, 18, 18);
  }
  &:hover {
    color: $g-themeColor;
   transform: translate(5px,-5px);
    &:before {
      width: 100%;
      background-color: $g-themeColor;
    }
  }
}
.active {
    color: $g-themeColor;
    transform: translate(5px,-5px);
    &:before {
      width: 100%;
      background-color: $g-themeColor;
    }
}
</style>
