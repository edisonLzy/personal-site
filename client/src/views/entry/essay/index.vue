<template>
  <main class="essay">
    <section class="essay-banner">
      <h1 class="l-absolute-center l-title">Welcome To My Blog</h1>
      <img class="l-img-c" src="image/banner.jpg" alt="banner" />
    </section>

    <section class="essay-content l-flex-h-sb">
      <div class="essay-content-classify">
        <l-block :title="article_title" icon="article">
          <template v-for="(it,index) in article_list">
            <l-list :key="it.id" :index="++index" v-bind="it" @click="toDetail(it)"></l-list>
          </template>
        </l-block>
      </div>

      <aside class="essay-content-nav" data-src="essay" v-autoSticky="70">
        <l-block title="标签" icon="tag">
          <ul class="content-nav">
            <l-tags :list="tagList" @select="onTagsSelect"></l-tags>
          </ul>
        </l-block>
      </aside>
    </section>
  </main>
</template>


<script lang="ts">
interface Tag {
  label: string;
  value: string;
}
import { Component, Mixins } from "vue-property-decorator";
import ReachBottom from "@/common/mixins/ReachBottom";
import { getTag, getAllList, ArticleListItem } from "@/api";
import { setCache } from "@/views/entry/store";

@Component({
    name: "essay",
})
export default class Essay extends Mixins(ReachBottom) {
  tagList: Tag[] = [];
  article_title = "所有文章";
  article_list: ArticleListItem[] = [];
  filterList(tag: Tag) {
      const { label, value } = tag;
      this.article_list = [];
      this.article_title = label;
      this.getList(value);
  }
  toDetail(it: any) {
      setCache("essay");
      this.$router.push({
          path: "detail",
          query: {
              id: it.id + "",
          },
      });
  }
  onTagsSelect(v: string[]) {
      let _v = v + "";
      if (v.length === 0) {
          this.article_title = "所有文章";
      } else {
          this.article_title = _v;
      }
      this.article_list = [];
      this.getList(_v);
  }
  // 获取文章列表
  async getList(type: string = "") {
      const data = await getAllList(type);
      this.article_list.push(...data);
  }
  async init() {
      this.tagList = await getTag();
      this.getList();
  }
  onBottom() {
      // const i = this.$Loading();
      // i.start();
      // setTimeout(function () {
      //     i.close();
      // }, 2000);
      console.log("---");
  }
  mounted() {
      this.init();
  }
}
</script>

<style lang="scss" scoped>
.essay {
  &-banner {
    position: relative;
    max-height: 400px;
    border-radius: $g-radius;
    overflow: hidden;
  }
  &-content {
    padding-top: $g-gap;
    &-classify {
      flex: 1;
    }
    &-nav {
      margin-left: $g-gap;
      flex: 0 0 400px;
      height: 300px;
      .content-nav {
        padding-top: 5px;
      }
      @media (max-width: 1140px) {
        display: none;
      }
      .content-nav {
        flex-wrap: wrap;
      }
    }
  }
}
</style>
