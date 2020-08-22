<template>
   <div class="l-echarts" ref="root">
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
    inheritAttrs:false
})
export default class LEcharts extends mixins(ResizeMixin) {
  @Prop({
      type:Object,
      default:()=>{}
  })
  options!:any;
  static componentname = "l-echarts";
  init(){
      this.chart = useEcharts(this.$refs["root"] as Element); 
      this.$watch("options",()=>{
          //  解决异步请求时,无法得到数据的问题  
          if(this.chart){
              this.chart.setOption({...this.options});
          }
      });
      
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
        @media (max-width: 1140px) {
         height:45vw;
      }
}
</style>
