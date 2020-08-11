<template>
  <div class="l-comment">
    <section class="l-comment-input">
      <!-- info -->
      <div class="input-header l-flex">
        <l-input class="input" label="昵称" placeholder="请输入您的昵称" v-model="comment.name"></l-input>
        <l-input class="input" label="邮箱" placeholder="请输入您的昵称" v-model="comment.email"></l-input>
      </div>
      <!-- 输入评论 -->
      <div class="input-content">
        <textarea class="textarea" placeholder="请您理智发言，共建美好社会" :value="comment.content"></textarea>
      </div>
      <!-- 提交 -->
      <div class="input-footer l-flex">
        <button class="l-common-btn" @click="sub">提交</button>
      </div>
    </section>
    <section class="l-comment-list">
      <!-- 评论显示 -->
      <h2 class="list-title">{{count}}</h2>
      <!-- 评论列表 -->
      <ul>
        <template v-for="i in commentList">
        <list-item v-bind="i" :key="i.id"></list-item>
        </template>
      </ul>
    </section>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import item from "./item.vue";
@Component({
    name: "l-comment",
    components: {
        "list-item":item
    },
})
export default class LComment extends Vue {
  static componentname = "l-comment";
  @Prop({
      type: Array,
      default: () => []
  })
  commentList =[{
      id: 1,
      level:0,
      avator:
          "https://gravatar.loli.net/avatar/c307fc60ff5bc2fb05fbf2866900165b?d=mp&v=1.4.4",
      name: "leezhiyu",
      time: "2020-03-03",
      content: "赛道函数撒大声点阿萨德萨达萨达赛道函数撒大声点阿萨德萨达萨达赛道函数撒大声点阿萨德萨达萨达赛道函数撒大声点阿萨德萨达萨达赛道函数撒大声点阿萨德萨达萨达赛道函数撒大声点阿萨德萨达萨达赛道函数撒大声点阿萨德萨达萨达赛道函数撒大声点阿萨德萨达萨达",
  },{
      id: 2,
      level:0,
      avator:
          "https://gravatar.loli.net/avatar/c307fc60ff5bc2fb05fbf2866900165b?d=mp&v=1.4.4",
      name: "leezhiyu",
      time: "2020-03-03",
      content: "赛道函数撒大声点阿萨德萨达萨达赛道函数撒大声点阿萨德萨达萨达赛道函数撒大声点阿萨德萨达萨达赛道函数撒大声点阿萨德萨达萨达赛道函数撒大声点阿萨德萨达萨达赛道函数撒大声点阿萨德萨达萨达赛道函数撒大声点阿萨德萨达萨达赛道函数撒大声点阿萨德萨达萨达",
      childrens:[{
          id: 3,
          parentId:2,
          level:1,
          avator:
          "https://gravatar.loli.net/avatar/c307fc60ff5bc2fb05fbf2866900165b?d=mp&v=1.4.4",
          name: "leezhiyu",
          time: "2020-03-03",
          content: "赛道函数撒大声点阿萨德萨达萨达赛道函数撒大声点阿萨德萨达萨达赛道函数撒大声点阿萨德萨达萨达赛道函数撒大声点阿萨德萨达萨达赛道函数撒大声点阿萨德萨达萨达赛道函数撒大声点阿萨德萨达萨达赛道函数撒大声点阿萨德萨达萨达赛道函数撒大声点阿萨德萨达萨达",
      }]
  }
  ];
  comment = {
      name: "",
      email: "",
      content: "请输入",
  };
  get count() {
      return `${this.commentList.length} 评论`;
  }

  // 提交
  sub() {}
}
</script>
<style lang="scss" scoped>
.l-comment {
  padding: 1em;
  &-input {
    .input-header {
      .input {
        width: 50%;
      }
    }
    .input-footer {
      padding: 1em 0;
      justify-content: flex-end;
    }
    .textarea {
      width: 99% !important;
      font-size: 1.5em;
      min-height: 90px;
      padding-top: 1.5em;
    }
    border-bottom: 1px dotted #999;
    margin-bottom: $g-gap;
  }
}
</style>
