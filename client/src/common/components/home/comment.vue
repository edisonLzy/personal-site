<template>
  <transition appear name="slide">
    <li class="comment l-flex l-hover" v-on="$listeners">
      <section class="comment-avator">
        <img
          src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2536151297,2163830430&fm=26&gp=0.jpg"
          alt="头像"
          class="l-img"
        />
      </section>
      <section>
        <h3>{{$attrs.article.article_title}}</h3>
        <div class="l-flex">
          <span class="comment-name">{{$attrs.comment_name}} :</span>
          <span class="comment-content">{{$attrs.comment_content}}</span>
        </div>
      </section>
    </li>
  </transition>
</template>


<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({
    name: "home-comment",
    inheritAttrs: false,
})
export default class Comment extends Vue {}
</script>

<style lang="scss" scoped>
.comment {
  border-bottom: 1px dotted #ccc;
  padding-bottom: 0.5em;
  margin-bottom: 0.5em;
    font-weight: 700;
  &-name,&-content{
    color: #777;
  }
  &-name {
    padding-right: 0.2em;
  }
  &-avator {
    flex: 0 0 50px;
    height: 50px;
    margin-right: 1em;
    border-radius: 50%;
    border: 1px solid #f5f5f5;
    overflow: hidden;
  }
}
</style>
