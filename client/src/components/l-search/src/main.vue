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

        <!-- 所有结果 -->
          <transition-group name="slideBottom" tag="ul"  class="list">
           <template v-for="i in list">
              <li class="list-item" :key="i.id">
                <h2 class="list-item-name">{{i.name}}</h2>
                <p class="list-item-time">发布日期:{{i.time}}</p>
              </li>
           </template>
          </transition-group>
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

  get count(){
      return this.list.length;
  }
  list = [
      {
          id:1,
          name:"拥抱Vue3.0",
          time:"2020-1-2"
      },
      {
          id:2,
          name:"爱上typescript",
          time:"2020-1-2"
      }
  ];
  value = ""; //输入值
}
</script>

<style lang="scss" scoped>
.l-search {
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
      padding-top: 1em;
    }
    .list{
      padding-top: 1.5em;
      &-item{
        position: relative;
        cursor: pointer;
        transition: width $g-transitionTime,transform $g-transitionTime ;

        margin-bottom: 1em;
        &-time{
         font-weight: 700;
         color: #777;
        }
        &-name{
        font-size:1.5em;
        line-height: 1.5em;
        }
        &:hover{
          transform: translateY(-10%);
        }
        &:before{
          content:"";
          position: absolute;
          bottom: -$g-gap;
          left: 0;
          width: 0%;
          height: 1px;
          transition: inherit;
          background: $g-themeColor;
        }
        &:hover::before{
          width: 100%;
        }
      }
    }
  }
}
</style>
