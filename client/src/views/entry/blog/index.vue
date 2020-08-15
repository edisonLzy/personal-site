<template>
  <div class="blog">
    <section class="blog-banner">
      <h1 class="l-absolute-center l-title">Welcome To My Blog</h1>
      <img class="l-img-c" src="image/banner.jpg" alt="banner" />
    </section>

    <section class="blog-content l-flex-h-sb">
      <div class="blog-content-classify">
        <l-block title="特别推荐">
          <template v-for="(it,index) in recommand">
          <l-list 
           :key="it.id" 
           :index="index"
           v-bind="it"
           @click="toDetail(it)">
           </l-list>
          </template>

        </l-block>

        <!-- <l-block title="最新发布">
          <l-list v-for="i in 5" :key="i"></l-list>
        </l-block> -->
      </div>

      <aside class="blog-content-nav">
        <l-block title="所有标签">
          <ul class="content-nav">
            <l-tag
              v-for="item in tagList"
              :key="item.label"
              :tag="item.label"
              @click="toList(item)"
            ></l-tag>
          </ul>
        </l-block>

        <l-block title="最新评论">
          <ul class="content-nav">
            <l-tag
              v-for="item in tagList"
              :key="item.label"
              :tag="item.label"
              @click="toList(item)"
            ></l-tag>
          </ul>
        </l-block>

        <l-block title="查看最多">
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
  </div>
</template>


<script lang="ts">
interface Tag {
  label: string;
  value: string;
}
import { Vue, Component } from "vue-property-decorator";
import { getTag,getRecommand} from "@/api";
@Component({
    name: "blog",
})
export default class Blog extends Vue {
  tagList: Tag[] = [];
  toList(tag: Tag) {
      const { label, value } = tag;
      console.log(label, value);
  }
  recommand:any[] = [];
  toDetail() {
      const i  =this.$Loading();
      i.start();
      setTimeout(function(){
          i.close();
      },2000);
      
      this.$router.push({
          name: "detail",
      });
  }
  async init() {
      this.tagList = await getTag();
      const {data:{records =[]}} = await getRecommand();
      this.recommand.push(...records);
  }
  mounted() {
      this.init();
  }
}
</script>

<style lang="scss" scoped>
.shadow {
  @include card-shadow;
}
.blog {
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
    }
  }
}
</style>
