<template>
  <section class="detail">
    <header class="detail-header">
      <img class="l-img-c" src="image/banner.jpg" alt="banner" />
      <div class="header l-absolute-center">
        <div class="header-dec">
          <h2>{{info.article_title}}</h2>
          <span>{{info.name}}</span> /
          <time>{{info.time}}</time>
          / {{info.article_type}} /
          <i>阅读量{{info.article_views}}</i>
        </div>
      </div>
    </header>
    <main class="detail-content l-flex-h-sb">
      <section class="content-left">
        <div class="header" id="write" v-html="info.article_html"></div>
        <div class="content"></div>
      </section>
      <section class="content-right">
        <l-block title="相关文章">1</l-block>
        <l-block title="浏览统计">1</l-block>
        <l-block title="目录">1</l-block>
      </section>
    </main>
    <footer class="detail-comment" id="comment">
      <l-comment 
      @sub="setComment"
      :commentList="commentList"></l-comment>
    </footer>

    <!-- 点赞组件 -->
    <l-like @click="onLike" 
    :article_likes="info.article_likes"
    :article_comments="commentCount"
    ></l-like>
  </section>
</template>


<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import { getDetail,getComment,setComment,setLike,ArticleDetail,ArticleComment,ArticleCommentVal } from "@/api";
import { Route } from "vue-router";
@Component({
    name: "detail",
})
export default class Detail extends Vue {
@Watch("$route")
    onRoute(){
        this.init();
    }
  info:ArticleDetail = {
      article_title: "当 Vue3 遇上 TypeScript 和 TSX",
      name: "LEEZHIYU",
      time: "2020-07-18",
      article_type: "编程技术",
      article_views: "",
      article_html:"",
      article_likes:""
  };
  article_id!:string|number;
  async onLike() {
      const data = await setLike(this.article_id);
      this.info.article_likes = data;
  }
  // 评论
  comment = "";
  commentList:ArticleComment[] = [];
  get commentCount(){
      return this.commentList.length;
  }
  // 点赞

  async setComment(form:ArticleCommentVal){
      const info = {...form,article_id:this.article_id};
      // 设置评论
      await setComment(info);
      // 重新获取评论列表
      await this.getComment();
  }
  // 获取评论
  async getComment(){
      this.commentList = [];
      const data = await getComment(this.article_id);
      this.commentList.push(...data);
  }
  // 获取数据 
  async init(){
      const {query:{id}} = this.$route;
      if(typeof id ==="string"){
          const data = await getDetail(id);
          this.info = data;
          this.article_id = id;
          this.info.name = data.user.user_name;
          this.getComment();
      }
      
  }
  mounted() {
      this.init();
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/markdownTheme/orangeheart.css";
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
    margin-top: $g-gap * 2;

    .content-left {
      padding: 1em;
      flex: 1;
      border-radius: $g-radius;
      background: rgb(252, 252, 252);
    }
    .content-right {
      flex: 0 0 400px;
      margin-left: $g-gap;
      height: 1000px;
      @media (max-width: 1140px) {
        display: none;
      }
    }
  }
  &-comment {
    margin-top: $g-gap * 2;
    border-radius: $g-radius;
    // height: 200px;
    background: rgb(255, 255, 255);
  }
}
</style>
