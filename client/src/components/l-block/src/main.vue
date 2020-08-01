<template>
  <div class="l-block">
    <section class="l-block-title">
      <h2>{{title}}</h2>
    </section>
    <section class="l-block-content">
      <slot>暂无内容</slot>
    </section>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({
    name: "l-block",
    components: {}
})
export default class LBlock extends Vue {
  static componentname = "l-block";
  @Prop({
      type: String,
      default: "title"
  })
  title!: string;
}
</script>
<style lang="scss" scoped>
.l-block {
  margin-bottom: $g-gap;
  &-title {
    margin-bottom: $g-gap;
    line-height: 20px;
    padding: 15px 20px;
    background-color: #fff;
    border-radius: 10px;
    h2 {
      font-weight: 400;
      font-size: 15px;
    }
  }
  &-content{
     border-radius: 10px;
    cursor: pointer;
  }
}
</style>
