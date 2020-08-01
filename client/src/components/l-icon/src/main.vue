<template>
  <svg 
  :title="title"
  :style="{
      fill:color
  }"
  v-on='$listeners'
  :class="svgClass" 
  aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({
    name: "l-icon",
})
export default class lIcon extends Vue {
  static componentname = "l-icon";
  @Prop({
      type:String,
      default:"icon"
  })
  title!:string;
  @Prop({
      type:String,
      default:"#ccc"
  })
  color!:string
  @Prop({
      type: String,
      required: true
  })
  iconClass!:string
  @Prop({
      type: String
  })
  className!:string
  get iconName(){
      return `#icon-${this.iconClass}`;
  }
  get svgClass(){
      return this.className?"svg-icon" + this.className: "svg-icon";
  }
}
</script>

<style scoped lang='scss'>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  overflow: hidden;
  cursor:pointer;
  transition: transform 0.5s;
  &:hover{
    fill: #2187de!important;
    transform:scale(1.5);
  }
}
</style>
