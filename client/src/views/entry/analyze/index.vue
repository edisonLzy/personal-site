<template>
  <div class="analyze">
    <section class="analyze-main">
      <l-echarts :options="totalOp"></l-echarts>
    </section>
        <section class="analyze-item">
      <l-echarts :options="performanceOp"></l-echarts>
    </section>
        <section class="analyze-item">
       
      <!-- <l-echarts></l-echarts> -->
    </section>
        <section class="analyze-item">
       
      <!-- <l-echarts></l-echarts> -->
    </section>
  </div>
</template>


<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { performance } from "@/utils";
import { echartFactory,normalSeries } from "@/utils/echarts";
import { getAnalyze } from "@/api";
@Component({
    name: "analyze",
})
export default class Analyze extends Vue {
  totalOp: any = {};
  performanceOp:any = {};
  // 统计各种类型的 访问量 点赞数 文章数量
  async getViewsCount() {
      let { records } = await getAnalyze();
      const typeData = records.map((item) => item.type);
      const legendData =["views","likes","count"];
      this.totalOp = echartFactory("Bar", {
          legend: {
              data:legendData,
          },
          xAxis:{
              type: "category",
              data:typeData
          },
          title:{
              text:"文章关键指标统计",
              bottom:"0"
          },
          series:normalSeries(legendData,records)
      });
  }
  // 页面性能统计
  async getPermance(){
      this.performanceOp = echartFactory("Pie",{
          title:{
              text: "Performance",
              subtext: "页面加载时间",
              left: "center"
          },
          data: performance()
      });
      console.log(this.performanceOp);
  }
  async init() {
      await this.getViewsCount();
      await this.getPermance();
  }
  mounted() {
      this.init();
  }
}
</script>

<style lang="scss" scoped>
.analyze {
  display: grid;
  grid-template-rows: repeat(2,1fr);
  grid-template-columns: repeat(3,1fr);
  gap: 20px;
  &-main{
    grid-column: 1 / 4;
  }
  &-item{
      @media (max-width: 1140px) {
        grid-column: 1 / 4;
      }
  }
}
</style>
