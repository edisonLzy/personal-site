<template>
  <main class="about">
    <section class="about-banner l-flex-center">
      <l-rotateCard>
        <code class="green">
          <i class="blue">alert</i>('hello world')
        </code>
        <template #back>
          <code class="green">
            <span class="purple">const</span> aboutMe
            <span class="cyan">=</span> {
            <br />
            <span class="space red">name</span>
            <span class="cyan">:</span>
            <span class="green">'LEEZHIYU'</span>,
            <br />
            <span class="space red">email</span>
            <span class="cyan">:</span>
            <span class="green">'656603135@qq.com'</span>,
            <br />
            <span class="space red">position</span>
            <span class="cyan">:</span>
            <span class="green">'Web Front-End Developer'</span>,
            <br />
            <span class="space red">website</span>
            <span class="cyan">:</span>
            <span class="green">'www.leezhiyu.cn'</span>
            <br />};
          </code>
        </template>
      </l-rotateCard>
    </section>
    <section class="about-introduction">
      <template v-for="i in intro">
        <div class="about-introduction-item" :key="i.id">
          <a class="title">{{i.title}}</a>
          <article class="article" v-html="i.content"></article>
        </div>
      </template>
    </section>
  </main>
</template>


<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({
    name: "about",
})
export default class About extends Vue {
  intro = [
      {
          id: 1,
          title: "简介",
          content: `
      <p>
      location: 四川成都
      <p/>
      <p>
      position: WEB前端工程师。
      <p/>
      <p>
      like: LOL 前端
      <p/>
      `
      },
      {
          id: 2,
          title: "联系我",
          content: `
      <p>
      tele: 18782257543
      <p/>
      <p>
      email: 656603135@qq.com
      <p/>
      <p>
      site: <a class='l-link' href='http://www.leezhiyu.cn' target='_blank'>www.leezhiyu.cn</a>
      <p/>
      <p>
      github:<a class='l-link' href='https://github.com/edisonLzy' target='_blank'>github.com/edisonLzy</a>
      </p>
      `}
      ,

      {
          id:3,
          title:"Word",
          content:`
        <p class="l-pre">
        1. Life is a gift. We must celebrate it.
        </p>
        <p class="l-pre">
        2. Never Forget Mamba Sprite 
        </p>
        `
      }

  ];
}
</script>

<style lang="scss" scoped>
.about {
        @media (max-width: 1140px) {
       padding: 0px 5px;
      }
  .blue {
    color: #29b6f6;
  }
  .green {
    color: #9ccc65;
  }
  .purple {
    color: #ba68c8;
  }
  .red {
    color: #ef5350;
  }
  .space {
    margin-left: 2rem;
  }
  .cyan {
    color: #4dd0e1;
  }
  &-banner {
    border-radius: $g-radius;
    height: calc(100vh - 160px);
    background: linear-gradient(45deg, $g-themeColor, #d89292);
      @media (max-width: 1140px) {
       display: none;
      }
  }
  &-introduction {
    &-item {
      font-size: 20px;
      margin: 2em 0 ;
      @media (max-width: 1140px) {
        font-size: 15px;
        margin: 1em 0 ;
      }
      padding: 1em;
      background: #fff;
      border-radius: $g-radius;
      cursor: pointer;
      .title {
        font-weight: bold;
        font-size: 1.3em;
        display: block;
        border-bottom: 1px solid #CFCFCF;
        padding-bottom: .5em;
        &::before{
          content: "#";
          padding-right: .5em;
          color: $g-themeColor;
        }
      }
      .article{
         line-height: 2em;
      }
    }
  }
}
</style>
