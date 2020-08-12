<template>
  <div class="l-container">
    <section class="l-container-header">
      <h2>{{$attrs.title}}</h2>
    </section>
    <section class="l-container-content">
      <slot></slot>
    </section>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Prop, Model, Emit } from "vue-property-decorator";
@Component({
  name: "l-container",
  components: {},
})
export default class LContainer extends Vue {
  static componentname = "l-container";

  get title() {
    const { title = "title" } = this.$attrs;
    return title;
  }
}
</script>
<style lang='scss' scoped >
.l-container {
  min-width: 60vw;
  min-height: 400px;
  border-radius: 2*$g-radius;
  background: #fff;
  &-header {
    padding: 0.5em 1em;
    border-bottom: 1px solid #ccc;
  }
  &-content {
    padding:1em;
  }
}
</style>