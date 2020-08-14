<template>
  <div class="l-container">
    <section class="l-container-header l-flex-h-sb">
      <h2 class="title">{{title}}</h2>
      <div class="avator">
        <img class="l-img-c avator-img" :src="avator" alt="avator">
      </div>
    </section>
    <section class="l-container-content">
      <slot></slot>
    </section>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Prop, Model, Emit } from "vue-property-decorator";
@Component({
  name: "l-container",
  components: {},
})
export default class LContainer extends Vue {
  static componentname = "l-container";

  get title() {
    const { title = "title" } = this.$attrs;
    return title;
  }
  get avator(){
    const { avator = "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1109995436,469760642&fm=26&gp=0.jpg" } = this.$attrs;

    return avator;
  }
}
</script>
<style lang='scss' scoped >
.l-container {
  min-width: 60vw;
  min-height: 400px;
  border-radius: $g-radius;
  background: #fff;
  &-header {
    padding: 0.5em 1em;
    border-bottom: 1px solid #ccc;
    .title{
      color:#ccc
    }
    .avator{
     width: 30px;
     height: 30px;
     padding: 5px;
     border-radius: 50%;
     overflow: hidden;
     border: 1px dotted #ccc;
     cursor: pointer;
     &-img{
       border-radius: 50%;
     }
    }
  }
  &-content {
    padding:1em;
  }
}
</style>