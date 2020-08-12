<template>
  <div class="l-pagenation">
 this is pagenation
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Prop, Model, Emit } from "vue-property-decorator";
@Component({
  name: "l-pagenation",
  components: {},
})
export default class LPagenation extends Vue {
  static componentname = "l-pagenation";
}
</script>
<style lang='scss' scoped >
.l-pagenation {

}
</style>