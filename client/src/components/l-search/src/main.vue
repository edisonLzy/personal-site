<template>
  <transition name="slideLeft">
    <div class="l-search l-fixed-cover l-flex" v-show="visible">
    <l-layer @close="close" :visible= "visible">
      <main class="l-search-content l-absolute-right">
        <section class="close">
          <l-icon @click="close" iconClass="close"></l-icon>
        </section>
        <section class="input">
          <l-input v-model="value" placeholder="请输入搜索关键词...">
              <l-icon iconClass="search"></l-icon>
          </l-input>
        </section>
        <section class="result">
          <h3>有 {{count}} 篇文章</h3>
        </section>
      </main>
      </l-layer>
    </div>
  </transition>
</template>

<script lang="ts">
import {scroll} from "@/utils/window";
import { Vue, Component, Prop, Model,Watch } from "vue-property-decorator";
@Component({
    name: "l-search",
})
export default class lSearch extends Vue {
  static componentname = "l-search";
  // Model
  @Model("input", { type: Boolean })
  visible!: boolean;
  @Watch("visible")
  // 显示的时候禁止滚动条
  onVisible(val:boolean){
      val?scroll.hidden():scroll.show();
  }
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
