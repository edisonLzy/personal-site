<template>
  <div class="l-button">
    <button @click="_click" class="l-button__inner">
      <span class="l-button__inner--text">
        <slot>button</slot>
      </span>
    </button>
  </div>
</template>
<script lang="ts">
const size = ["mini", "normal", "large"];
import { Component, Vue, Prop, Emit } from "vue-property-decorator";
@Component({
    name: "l-button",
    components: {}
})
export default class LButton extends Vue {
  static componentname = "l-button";
  @Prop({
      type: String,
      default: "normal",
      validator: val => {
          return size.includes(val);
      }
  })
  size!: string;
  @Emit("click")
  _click(e: MouseEvent) {
      return e;
  }
}
</script>
<style lang="scss" scoped>
button {
  border: none;
  background: none;
  outline: none;
  user-select: none;
  margin: 0;
  padding: 0;
}
.l-button {
  &__inner {
    position: relative;
    height: 50px;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s all ease;
    color: #fff;
    cursor: pointer;
    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      left: 0%;
      width: 100%;
      height: 2px;
      background: #ffffff;
      transition: 0.4s all ease;
    }
    &:before {
      top: 0%;
    }
    &:after {
      bottom: 0%;
    }
    &:hover {
      background-color: #fff;
      color: #000;
    }
    &:hover:before {
      transform: translateY(-10px);
    }
    &:hover:after {
      transform: translateY(10px);
    }
    &--text {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      &:after,
      &:before {
        position: absolute;
        top: 0;
        content: "";
        height: 100%;
        width: 2px;
        transition: 0.4s all ease;
        z-index: -1;
      }
      &:hover:after {
        width: 100%;
      }
      &:hover:before {
        width: 100%;
      }
      &:after {
        right: 0%;
      }
      &:before {
        left: 0%;
      }
    }
  }
}
</style>
