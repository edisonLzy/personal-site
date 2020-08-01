<template>
  <transition name="slideLeft">
    <div class="l-search l-fixed-cover l-flex" v-show="visible">
      <section class="l-search-layer"></section>
      <main class="l-search-content l-absolute-right">
        <section class="close">
          <l-icon @click="close" iconClass="close"></l-icon>
        </section>
        <section class="input">
          <l-input v-model="value" placeholder="请输入搜索关键词..." />
        </section>
        <section class="result">
          <h3>有 {{count}} 篇文章</h3>
        </section>
      </main>
    </div>
  </transition>
</template>

<script lang="ts">
import { Vue, Component, Prop, Model } from "vue-property-decorator";
@Component({
    name: "l-search",
})
export default class lSearch extends Vue {
  static componentname = "l-search";
  // Model
  @Model("input", { type: Boolean })
  visible!: boolean;
  close() {
      this.$emit("input", false);
  }
  @Prop({
      type: Function,
      required: true,
  })
  queryFun!: () => void;

  count = 0; //搜索结果
  value = ""; //输入值
}
</script>

<style lang="scss" scoped>
.l-search {
  &-layer {
    flex: 1;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    // @media (max-width: 1140px) {
    // display: none
    // }
  }
  &-content {
    width: 20%;
    height: 100%;
    background: #fff;
    padding: 5em 2em;
    z-index: 1000;
    transition:width .5s;
    @media (max-width: 1140px) {
      width: calc(100% - 4em);
    }
    .close {
      text-align: right;
      padding-bottom: 2em;
    }
    .input {
    }
    .result {
      padding-top: 2em;
    }
  }
}
</style>
