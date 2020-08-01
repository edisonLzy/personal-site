<template>
  <div class="container" :style="{
      'background-image':`url(${url})`
  }">
    <slot>this is content slot!</slot>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component({
    name: "parallax"
})
export default class Parallax extends Vue {
  static componentname = "parallax";
  @Prop({
      type: String,
      default: ""
  })
  url!: string;
  mounted() {
      console.log(this.url);
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
}
</style>
