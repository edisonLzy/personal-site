<template>
  <div class="l-block" v-on="$listeners">
    <section class="l-block-title l-border-bottom l-flex">
      <l-icon 
      v-if="!!icon"
      :iconClass="icon"
      style="padding-right:.5em"
      ></l-icon>
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
  @Prop({
      type:String
  })
  icon!:string;
}
</script>
<style lang="scss" scoped>
.l-block {
  margin-bottom: $g-gap;
  padding: 15px 20px;
  background-color: #fff;
  border-radius: $g-radius;
  &-title {
    line-height: 20px;
    padding-bottom: .5em;
    h2 {
      font-weight: 400;
      font-size: 15px;
    }
  }
  &-content{
    padding-top: .5em;
    cursor: pointer;
  }
}
</style>
