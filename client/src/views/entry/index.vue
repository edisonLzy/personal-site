<template>
  <div class="container">
    <header class="header l-fixed-top">
      <l-navigator :navList="navList" @search="search"></l-navigator>
    </header>

    <main class="main">
      <!-- 内容展示区域 -->
      <router-view></router-view>
    </main>

      <!-- 回到顶部 -->
      <l-toTop></l-toTop>
      <!-- 搜索组件 -->
      <l-search v-model="visible" :queryFun="queryFunc"></l-search>
  </div>
</template>


<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({
    name: "entry"
})
export default class Entry extends Vue {
  navList = [
      {
          name: "blog",
          title: "首页"
      },
      {
          name: "essay",
          title: "文章列表"
      },
      {
          name: "analyze",
          title: "数据分析"
      },
      {
          name: "about",
          title: "关于"
      }
  ];

  // 搜索
  visible = false;
  search(){
      this.visible = true;
  }
  queryFunc(){

  }
}
</script>

<style lang="scss" scoped>
.container {
  .header {
    height: 70px;
    background: #fff;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  }
  .main {
    padding-top: 80px;
    width: 90%;
    margin:0 auto;

    @media (max-width: 1140px) {
      width: 98%;
    }
  }
}
</style>
