<template>
  <div class="l-list l-flex-h-sb" v-on='$listeners'>
    <section class="l-list-left l-flex">
      <i :class="['index',{
        'hot':index <= hotTop
      }]">{{index}}</i>
      <picture class="pic">
        <img class="l-img-c" :src="imgSrc" alt="artcle img" />
      </picture>
    </section>
    <section class="l-list-right l-flex-v-sb">
      <h3 class="l-list-right__title">{{title}}</h3>
      <article class="l-list-right__desc">{{desc}}</article>
      <ul class="l-list-right__info l-flex">
        <UserInfo v-for="(i,p) in info" :key="i" :item="{i,p}"></UserInfo>
      </ul>
    </section>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import UserInfo from "./userInfo";
@Component({
    name: "l-list",
    components: {
        UserInfo: UserInfo,
    },
})
export default class LList extends Vue {
  static componentname = "l-list";
  hotTop = 3;
  @Prop({
      type: Number,
      default: 1,
  })
  index!: number;
  @Prop({
      type: String,
      default: "https://blog.yzmcms.com/uploads/202007/05/200705121822383.png",
  })
  imgSrc!: string;

  @Prop({
      type: String,
      default: "ES6（ECMAScript2015）的出现",
  })
  title!: string;

  @Prop({
      type: String,
      default:
      "ES6（ECMAScript2015）的出现，无疑给前端开发人员带来了新的惊喜，它包含了一些很棒的新特性，可以更加方便的实现很多复杂的操作，提高开发人员的效率。实际上, 它是一种新的javasES6（ECMAScript2015）的出现，无疑给前端开发人员带来了新的惊喜ES6（ECMAScript2015）的出现，无疑给前端开发人员带来了新的惊喜ES6（ECMAScript2015）的出现，无疑给前端开发人员带来了新的惊喜ES6（ECMAScript2015）的出现，无疑给前端开发人员带来了新的惊喜cript规范...",
  })
  desc!: string;

  @Prop({
      type: String,
      default: "LEEZHIYU",
  })
  author!: string;

  @Prop({
      type: String,
      default: "2020-07-07",
  })
  time!: string;

  @Prop({
      type: [String, Number],
      default: 187,
  })
  views!: number;

  get info() {
      return {
          user: this.author,
          time: this.time,
          view: this.views,
      };
  }
}
</script>
<style lang="scss" scoped>
.l-list {
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: $g-radius;
  padding: 15px 20px;
  transition: $g-transitionTime;
  @media (max-width: 1140px) {
     padding: 5px 10px;
  }
  &:hover {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }

  &-left {
    flex: 0 0 220px;
    border-radius: $g-radius;
    overflow: auto;
    align-items: center;
    @media (max-width: 1140px) {
      flex: 0 0 150px !important;
      margin-left: 15px;
    }
    .index {
      padding-right: 10px;
      @media (max-width: 1140px) {
        display: none;
      }
    }
    .hot {
      font-weight: 600;
      color: #ff9607;
    }
    @media (max-width: 1140px) {
      flex: 1;
    }
    .pic {
      border-radius: $g-radius;
      overflow: hidden;
      font-size: 0;
    }
  }
  &-right {
    flex: 1;
    padding: 0.5em 0;
    margin-left: 1.5em;
    @media (max-width: 1140px) {
      margin-left: 0;
      font-size: 10px;
    }
    &__info {
      padding-top: 0.5em;
      @media (max-width: 1140px) {
     justify-content: space-between;
    }
    }
    &__desc {
      height: 84px;
      line-height: 28px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      @media (max-width: 1140px) {
        -webkit-line-clamp: 2;
        height: 50px;
        line-height: 25px;
      }
    }
  }
  @media (max-width: 1140px) {
    flex-direction: row-reverse;
    align-items: center;
  }
}
</style>
