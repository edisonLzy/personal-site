<template>
  <div class="analyze">
    <section class="analyze-main">
      <l-echarts v-bind="op" title="页面加载时间"></l-echarts>
    </section>
    <section class="analyze-part l-flex">
      <div class="analyze-part-item">
        <l-echarts v-bind="op" title="页面加载时间"></l-echarts>
      </div>
      <div class="analyze-part-item">
        <l-echarts v-bind="op" title="文章类型"></l-echarts>
      </div>
      <div class="analyze-part-item">
        <l-echarts v-bind="op" title="文章阅读量"></l-echarts>
      </div>
    </section>
  </div>
</template>


<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { performance } from "@/utils";
import { echartFactory } from "@/utils/echarts";
@Component({
    name: "analyze",
})
export default class Analyze extends Vue {
  data = performance();
  op = echartFactory("Pie", this.data);
}
</script>

<style lang="scss" scoped>
.analyze {
  &-part {
    flex-wrap: wrap;
    justify-content: space-between;
    &-item {
      width: 32%;
      @media (max-width: 1140px) {
        width: 100%;
      }
    }
  }
}
</style>
