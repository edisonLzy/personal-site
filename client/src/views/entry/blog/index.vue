<template>
  <div class="blog">
    <section class="blog-banner">
      <h1 class="l-absolute-center l-title">Welcome To My Blog</h1>
      <img class="l-img-c" src="image/banner.jpg" alt="banner" />
    </section>

    <section class="blog-content l-flex-h-sb">
      <div class="blog-content-classify">
        <l-block title="特别推荐" icon="recommand">
          <template v-for="(it,index) in recommand">
          <l-list 
           :key="it.id" 
           :index="++index"
           v-bind="it"
           @click="toDetail(it.id)">
           </l-list>
          </template>
        </l-block>

        <l-block title="最新发布" icon="lastest" >
        <template v-for="(it,index) in lastest">
          <l-list 
           :key="it.id" 
           :index="++index"
           v-bind="it"
           @click="toDetail(it.id)"
           >
           </l-list>
          </template>
        </l-block>
      </div>

      <aside class="blog-content-nav" data-src="nav" v-autoSticky="70">
        <l-block title="Creator" icon="write">
          <section class="l-flex-h-sb analyze">
          <HomeAnalyze 
          v-for="i in staticList"
          :key="i.id"
          v-bind="i"
          @click="toAnalyze"
          :style="{
            'border-right':i.id===1?'1px solid #ebebeb':''
          }"
          ></HomeAnalyze>
          </section>
        </l-block>

        <l-block title="LASTEST-COMMENT" icon="comment">
            <HomeComment
             v-for="i in lastestComment"
             :key="i.id"
             v-bind="i"
             @click="toDetail(i.article_id)"
             ></HomeComment>
        </l-block>



        <l-block title="Contact" icon="github">
          <nav class="l-flex contact">
          <template v-for="i in other">
               <l-icon :key="i.icon" :iconClass='i.icon' :title="i.title"></l-icon>
          </template>
          </nav>
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
import { getTag,getAnalyze,getRecommand,getPublish,getLastestComment,ArticleComment} from "@/api";
import HomeComment from "@/common/components/home/comment.vue";
import HomeAnalyze from "@/common/components/home/analyze.vue";
@Component({
    name: "blog",
    components:{
        HomeComment,
        HomeAnalyze
    }
})
export default class Blog extends Vue {
  tagList: Tag[] = [];
  toList(tag: Tag) {
      const { label, value } = tag;
      console.log(label, value);
  }
  recommand:any[] = [];
  lastest:any[] = [];
  lastestComment:ArticleComment[] = [];
  likes=0;
  views=0;
   other = [
       {
           icon:"qq",
           title:"qq"
       },
       {
           icon:"wechat",
           title:"wechat"
       },
       {
           icon:"github",
           title:"github"
       },
   ]
   get staticList (){
       return   [
           {
               id:1,
               title:"总阅读数",
               count:this.views,
               lastDay:10
           },
           {
               id:2,
               title:"总获赞数",
               count:this.likes,
               lastDay:10
           },
       ];
   } 
   toDetail(id:any) {
       this.$router.push({
           path: "detail",
           query:{
               id:id + ""
           }
       });
   }
   toAnalyze(){
       this.$router.push({
           path: "analyze",
       });
   }
   async init() {
       this.tagList = await getTag();
       const list = await getRecommand();
       this.recommand.push(...list);
       const _data = await getPublish();
       this.lastest.push(..._data);
       const com = await getLastestComment();
       this.lastestComment.push(...com);
       const {likes,views} = await getAnalyze();
       this.likes = likes;
       this.views = views;
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
      .analyze{
        padding: 10px 30px;
      }
      .contact{
        justify-content: space-around;
        padding-top: 10px;
      }
    }
  }
}
</style>
