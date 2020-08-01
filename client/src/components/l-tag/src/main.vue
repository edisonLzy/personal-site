<template>
  <a class="l-tag" v-on="$listeners">{{tag}}</a>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component({
    name: "l-tag",
})
export default class lTag extends Vue {
  static componentname = "l-tag";
  @Prop({
      type: [String, Number],
      default: "标签",
  })
  tag!: string | number;
}
</script>

<style lang="scss" scoped>
.l-tag {
  display: inline-block;
  padding: 4px 14px;
  border: 1px solid #ccc;
  border-radius: $g-radius;
  font-size: 12px;
  transition: all 0.3s ease 0s;
  margin-right: 1.5em;
  margin-bottom: 1em;
  &:hover{
    color: $g-themeColor;
    border: 1px solid $g-themeColor;
  }
}
</style>
