<template>
  <h1 class="l-hugeScreen" :style="{
  'fontSize':fontSize,
  'animation-delay':delay
 }">{{text}}</h1>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component({
    name: "l-hugeScreen",
})
export default class LHugeScreen extends Vue {
  static componentname = "l-hugeScreen";
  @Prop({
      type: String,
      default: "Welcome",
  })
  text!: string;

  @Prop({
      type: String,
      default: "50px",
  })
  fontSize!: string;

  @Prop({
      type: String,
      default: "0",
  })
  delay!: string;
}
</script>

<style lang="scss" scoped>
.l-hugeScreen {
  @media (max-width: 1140px) {
   font-size: 20px!important;
  }

  color: #fff;
  width: 0;
  opacity: 0;
  white-space: nowrap;
  text-align: center;
  overflow: hidden;
  animation: typing 3s steps(30, end) forwards;
}
@keyframes typing {
  from {
    width: 0;
    opacity: 0;
  }
  to {
    width: 100%;
    opacity: 1;
  }
}
</style>
