<template>
   <div class="l-echarts l-bannerTips" ref="root" :data-title="title">
      <!-- echarts的容器-->
   </div>
</template>

<script lang="ts">
import {useEcharts} from "@/utils/echarts";
import ResizeMixin from "@/common/mixins/echart";
import {Component,Prop} from "vue-property-decorator";
import { mixins } from "vue-class-component";
@Component({
    name: "l-echarts",
})
export default class LEcharts extends mixins(ResizeMixin) {
  static componentname = "l-echarts";
  @Prop({
      type:String,
      default:"title"
  })
  title!:string;
  init(){
      this.chart = useEcharts(this.$refs["root"] as Element,{}); 
      if(this.chart){
          this.chart.setOption({...this.$attrs});
      }
      
  }
  mounted() {
      this.$nextTick(() => {
          this.init();
      });
  }
}
</script>

<style lang="scss" scoped>
.l-echarts {
  position: relative;
  overflow: hidden;
  margin-bottom: $g-gap;
  border-radius: $g-radius;
  padding: 20px;
  height:30vw;
  background: #fff;
}
</style>
