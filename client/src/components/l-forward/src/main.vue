<template>
  <footer class="l-forward">
    <span>{{title}}</span>
    <p>
      <slot></slot>
    </p>
  </footer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
    name: "l-forward",
})
export default class LForward extends Vue {
  static componentname = "l-forward";
  @Prop({
      type: String,
      default: "title",
  })
  title!: string;
}
</script>

<style lang="scss" scoped>
.l-forward {
      height: 70px;
    line-height: 70px;
  font-size: 1.5em;
  color: #ccc;
  text-align: center;
  background-color: #fff;
  border-radius: $g-radius;
}
</style>
