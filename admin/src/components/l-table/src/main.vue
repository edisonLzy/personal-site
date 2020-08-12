<template>
  <div class="l-table">
  this is table
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Prop, Model, Emit } from "vue-property-decorator";
@Component({
  name: "l-table",
  components: {},
})
export default class LTable extends Vue {
  static componentname = "l-table";
}
</script>
<style lang='scss' scoped >
.l-table {

}
</style>