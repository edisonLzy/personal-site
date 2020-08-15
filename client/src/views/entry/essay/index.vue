<template>
  <main class="essay">
    <section class="essay-banner">
      <h1 class="l-absolute-center l-title">Welcome To My Blog</h1>
      <img class="l-img-c" src="image/banner.jpg" alt="banner" />
    </section>

    <section class="essay-content l-flex-h-sb">
      <div class="essay-content-classify">
        <l-block :title="article_title">
          <l-list v-for="i in article_list" :key="i" :index="i" @click="toDetail"></l-list>
        </l-block>
      </div>
      <aside class="essay-content-nav">
        <l-block title="标签">
          <ul class="content-nav">
            <l-tag
              v-for="item in tagList"
              :key="item.label"
              :tag="item.label"
              @click="toList(item)"
            ></l-tag>
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
import { Component,Mixins } from "vue-property-decorator";
import ReachBottom from "@/common/mixins/ReachBottom";
import { getTag } from "@/api";
@Component({
    name: "essay",
})
export default class Essay extends Mixins(ReachBottom) {
  tagList: Tag[] = [];
  article_title = "所有文章";
  article_list = 15;
  toList(tag: Tag) {
      const { label, value } = tag;
      this.article_title = label;
      this.article_list = this.article_list === 2 ? 10 : 2;
      console.log(value);
  }
  toDetail() {
      const i = this.$Loading();
      i.start();
      setTimeout(function () {
          i.close();
      }, 2000);

      this.$router.push({
          name: "detail",
      });
  }
  async init() {
      this.tagList = await getTag();
  }
  onBottom(){
      const i = this.$Loading();
      i.start();
      setTimeout(function () {
          i.close();
      }, 2000);

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
    height: 400px;
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
