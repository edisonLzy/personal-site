<template>
   <footer class="l-forward">
     <span>{{title}}</span>
     <p><slot></slot></p>
   </footer>
</template>

<script lang="ts">
import {Component,Prop,Vue} from "vue-property-decorator";
@Component({
    name: "l-forward",
})
export default class LForward extends Vue {
  static componentname = "l-forward";
  @Prop({
      type:String,
      default:"title"
  })
  title!:string;
}
</script>

<style lang="scss" scoped>
.l-forward {
  margin-top: $g-gap;
 padding: 2vw 0;
 font-size: 1.5em;
 color: #ccc;
 text-align: center;
 background: #fff;
   border-radius: $g-radius;
}
</style>
