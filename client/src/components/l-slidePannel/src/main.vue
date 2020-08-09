<template>
  <div :class="['l-slidePannel',{
      active:active
  }]">
    <section class="item-part1 item">
      <div class="item-part1-left">
          <slot name="part1-left"></slot>
      </div>
      <div class="item-part1-right">
          <slot name="part1-right"></slot>
      </div>
    </section>
    <section class="item-part2 item">
      <div class="item-part2-left">
           <slot name="part2-left"></slot>
      </div>
      <div class="item-part2-right">
          <slot name="part2-right"></slot>
      </div>
    </section>

    <button @click="toggle" class="btns">toggle</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component} from "vue-property-decorator";
@Component({
    name: "l-slidePannel",
})
export default class lSlidePannel extends Vue {
  static componentname = "l-slidePannel";
  active = false;
  // Model
  toggle() {
      this.active = !this.active;
  }
}
</script>

<style lang="scss" scoped>
.l-slidePannel {
  position: relative;
  width: 60vw;
  height: 40vw;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  .btns {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 999;
    padding: 1em;
    background: gray;
  }
  .item {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    display: flex;
  }
  .item-part1 {
    &-left,
    &-right {
      flex: 1;
      height: 100%;
      transition: transform .5s;
    }
    &-right {
    }
  }

  .item-part2 {
    &-left,
    &-right {
      flex: 1;
      height: 100%;
      transition: transform .5s;
    }
    &-right {
      transform: translateX(-200%);
    }
    &-left {
      transform: translateX(200%);
    }
  }
}
.l-slidePannel.active {
  .item-part1 {
    &-left {
      transform: translateX(200%);
    }
    &-right {
      transform: translateX(-200%);
    }
  }

  .item-part2 {
    &-right {
      transform: translateX(0);
    }
    &-left {
      transform: translateX(0);
    }
  }
}
</style>
