<template>
  <div class="l-video">
    <section class="l-video-bg l-cover">
      <video ref="video" class="video l-cover" muted v-bind="$attrs">
        <source :src="i.src" :type="i.type" v-for="i in src" :key="i.src" />Sorry, your browser doesn't support embedded videos.
      </video>
    </section>
    <section class="l-video-content l-cover">
      <slot></slot>
    </section>
  </div>
</template>

<script lang="ts">
interface Source {
  src: string;
  type: string;
}
import { Vue, Component, Prop } from "vue-property-decorator";
@Component({
    name: "l-video",
})
export default class LVideo extends Vue {
  static componentname = "l-video";
  @Prop({
      type: Array,
      default: () => [],
  })
  src!: Source[];
}
</script>

<style lang="scss" scoped>
.l-video {
  position: relative;
  width: 100%;
  height: 100vh;
  background: #000;
  &-bg {
    width: 100%;
    height: 100%;
    @media (max-width: 1140px) {
      background: url("/image/post.jpg") #000 center;
      background-repeat: no-repeat;
     background-size:cover;
     background-position:80%;
    }
    .video {
      @media (max-width: 1140px) {
        display: none;
      }
      min-width: 100%;
      min-height: 100%;
      height: auto;
      width: auto;
      source {
        min-width: 100%;
        min-height: 100%;
        height: auto;
        width: auto;
      }
    }
  }
  &-content {
    position: absolute;
    left: 0;
    top: 0;
  }
}
</style>
