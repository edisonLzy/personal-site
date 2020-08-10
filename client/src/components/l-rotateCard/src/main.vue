<template>
  <div class="l-rotateCard">
    <section class="l-rotateCard-face l-flex-center">
      <slot>this is default slot!</slot>
    </section>
    <section class="l-rotateCard-back l-flex-center">
      <slot name="back">this is back slot!</slot>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({
    name: "l-rotateCard",
})
export default class LRotateCard extends Vue {
  static componentname = "l-rotateCard";
}
</script>

<style lang="scss" scoped>
.l-rotateCard {
    font-size: 20px;
  position: relative;
  width: 40vw;
  height: 20vw;
  perspective: 1300px;
  border-radius: $g-radius;
  overflow: hidden;
  cursor: pointer;
  color: #fff;
  &-face,
  &-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #1c1c1c;
    backface-visibility: hidden;
    overflow: hidden;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
    transition: transform $g-transitionTime ease;
    z-index: 1;
  }
  &-back {
    z-index: 0;
    transform: rotateY(180deg);
  }
  &:hover &-back {
    z-index: 1;
    transform: rotateY(0deg);
  }
  &:hover &-face {
    z-index: 0;
    transform: rotateY(-180deg);
  }
}
</style>
