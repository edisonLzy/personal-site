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
      <section class="content-left">
        <div class="header" id="write" v-html="content"></div>
        <div class="content"></div>
      </section>
      <section class="content-right">
        <l-block title="相关文章">1</l-block>
        <l-block title="浏览统计">1</l-block>
        <l-block title="目录">1</l-block>
      </section>
    </main>
    <footer class="detail-comment" id="comment">
      <l-comment v-model="comment" :commentList="commentList"></l-comment>
    </footer>

    <!-- 点赞组件 -->
    <l-like @click="onLike"></l-like>
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
  content = ` <h1><a id="MD5_1"></a>MD5加密</h1>
<ul class="contains-task-list">
<li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> hash加密算法的一种</li>
<li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> 可以将任何一个字符串，加密成一个固定长度的字符串</li>
<li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> 单向加密：只能加密无法解密</li>
<li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> <strong>同样的源字符串加密后得到的结果固定</strong></li>
</ul>
<h2><a id="_8"></a>安装</h2>
<blockquote>
<p>cnpm i md5</p>
</blockquote>
<h2><a id="_11"></a>登陆</h2>
<blockquote>
<p>使用md5再对密码进行加密，比对数据库中的数据是否一致。</p>
</blockquote>
<pre><div class="hljs"><code class="lang-js"><span class="hljs-keyword">const</span> a = b; 
</code></div></pre>

`;
  onLike() {
  }
  // 评论
  comment = "";
  commentList = [];
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
      height: 1000px;
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
