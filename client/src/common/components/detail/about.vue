<template>
  <!-- 相关文章 -->
  <ul class="about l-flex-v-center" v-on="$listeners">
    <template v-for="i in list">
      <li class="about-item l-hover l-flex" :key="i.id" @click="toDetail(i.id)">
        <section class="about-item-img">
          <img :src="i.article_cover" alt="i.article_type" />
        </section>
        <section class="about-item-content">
          <h3>{{i.article_title}}</h3>
          <article class="l-textColor-fade">{{i.article_desc}}</article>
        </section>
      </li>
    </template>
  </ul>
</template>


<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { getAllList, ArticleListItem } from "@/api";
@Component({
    name: "detail-about",
    inheritAttrs: false,
})
export default class About extends Vue {
  @Prop({
      type: String,
      default: "",
  })
  type!: string;
  list: ArticleListItem[] = [];
  async init(type: string) {
      const data = await getAllList(type,undefined,4);
      this.list.push(...data);
  }
  toDetail(id:any) {
      this.$router.push({
          path: "detail",
          query:{
              id:id + ""
          }
      });
  }
   
  @Watch("type")
  async onType(val: string) {
      await this.init(val);
  }
}
</script>

<style lang="scss" scoped>
.about {
  //   flex: 1;
  &-item {
    padding: 10px;
    border-bottom: 1px solid rgba(178, 186, 194, 0.15);
    // align-items: center;
    &-img {
      flex: 0 0 30px;
      height: 30px;
      border-radius: 50%;
      border: 1px solid rgba(178, 186, 194, 0.15);
      padding: 5px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    &-content {
      padding-left: 10px;
      flex: 1;
      article {
        width: 100%;
        line-height: 1em;
        overflow: hidden;
        height: 1em;
      }
    }
  }
}
</style>
