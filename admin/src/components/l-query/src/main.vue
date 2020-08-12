<template>
  <div class="l-query">
    this is query
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Prop, Model, Emit } from "vue-property-decorator";
@Component({
  name: "l-query",
  components: {},
})
export default class LQuery extends Vue {
  static componentname = "l-query";
}
</script>
<style lang='scss' scoped >
.l-query {

}
</style>