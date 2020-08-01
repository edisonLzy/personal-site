<template>
  <section class="detail">
    <header class="detail-header">
      <img class="l-img-c" src="image/banner.jpg" alt="banner" />
      <div class="header l-absolute-center">
        <div class="header-dec">
          <h2>{{info.title}}</h2>
          <span>{{info.author}}</span> /
          <time>{{info.time}}</time>
          / {{info.classify}} /
          <i>阅读量{{info.views}}</i>
        </div>
      </div>
    </header>
    <main class="detail-content l-flex-h-sb">
      <section class="content-left"></section>
      <section class="content-right"></section>
    </main>
    <footer class="detail-comment"></footer>
  </section>
</template>


<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({
    name: "detail",
})
export default class Detail extends Vue {
  info = {
      title: "当 Vue3 遇上 TypeScript 和 TSX",
      author: "LEEZHIYU",
      time: "2020-07-18",
      classify: "编程技术",
      views: 999,
  };
}
</script>

<style lang="scss" scoped>
.detail {
  &-header {
    height: 300px;
    position: relative;
    .header-dec {
      color: #fff;
      text-align: center;
    }
  }
  &-content {
    height: 200px;
    .content-left {
      flex: 1;
      height: 100%;
      background: khaki;
    }
    .content-right {
      flex: 0 0 400px;
      margin-left: $g-gap;
      height: 100%;
      background: rgb(26, 25, 16);
      @media (max-width: 1140px) {
        display: none;
      }
    }
  }
}
</style>
