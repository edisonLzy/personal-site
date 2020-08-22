<template>
  <nav class="l-anchor l-flex-v">
          <slot></slot>
  </nav>
</template>
<script lang="ts">
import { debounce } from "@/utils";
import {
    addHandler,
    removeHandler,
    getScrollTop,
} from "@/utils/window";
import { Component, Vue,Provide,Prop} from "vue-property-decorator";
@Component({
    name: "l-anchor",
    components: {}
})
export default class LAnchor extends Vue {
  static componentname = "l-anchor";
  @Provide()
  @Prop({
      type:Number,
      default:0
  })
  // 阀值
  threshold!:number;

  @Provide()
  @Prop({
      type:Number,
      default:0
  })
  // 偏移量
  offset!:number;
  // 取消所有选中
  cancel(){
      this.$children.map((i:any)=>{
          i.beDeActive();
      });
  }
  created() {
      this.$on("cancel",()=>{
          this.cancel();
      }); 
  }
}
</script>
<style lang="scss" scoped>
.l-anchor {
  
}
</style>
