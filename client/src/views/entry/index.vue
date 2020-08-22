<template>
  <div class="container">
    <header class="header l-fixed-top">
      <l-navigator :navList="navList" @search="search" @login="login"></l-navigator>
    </header>

    <main class="main">
      <!-- 内容展示区域 -->
    <transition name="slide" mode="out-in">
      <keep-alive :include="state.cache">
              <router-view></router-view>
      </keep-alive>
    </transition>

     <!-- footer -->
     <l-forward title="Fear no one">
       <!-- <span>Only stronger survice</span> -->
     </l-forward>
    </main>
     
      <!-- 回到顶部 -->
      <l-toTop></l-toTop>
      <!-- 搜索组件 -->
      <l-search 
      v-model="visible" 
      @click="toDetail"
      ></l-search>
      <!-- 登陆组件 -->
      <l-login v-model="loginVisible"></l-login>
  </div>
</template>


<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import {ArticleListItem} from "@/api/Home";
import {state} from "./store";
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
  // 登陆
  loginVisible = false;
  login(){
      this.loginVisible = true;
  }
  // 点击搜索结果
  toDetail(it:ArticleListItem){
      this.$router.push({
          path: "detail",
          query:{
              id:it.id + ""
          }
      });
  }
  get state(){
      return state;
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
    padding-bottom: 20px;
    width: 90%;
    margin:0 auto;
  
    @media (max-width: 1140px) {
      width: 98%;
    }
  }
}
</style>
