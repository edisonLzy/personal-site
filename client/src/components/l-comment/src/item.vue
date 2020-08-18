<template>
  <li :class="`l-comment-item level-${level}`">
    <div class="l-flex">
      <section class="list-item-avator">
        <img src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2536151297,2163830430&fm=26&gp=0.jpg" alt="头像" class="l-img" />
      </section>
      <section class="list-item-content">
        <h3 class="name l-textColor-theme">{{$attrs.comment_name}}</h3>
        <p class="time l-textColor-fade">{{$attrs.fromNow}}</p>
        <p class="content">{{$attrs.comment_content}}</p>
      </section>
    </div>
    <section class="list-item-btn l-flex">
      <button class="l-common-btn" @click="click">回复</button>
    </section>

    <!-- 递归组件 -->
    <template v-if="hasChildren">
      <l-comment-item v-bind="$attrs.childrens"></l-comment-item>
    </template>
  </li>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
    name: "l-comment-item",
    inheritAttrs: false,
    components: {},
})
export default class LComment extends Vue {
  static componentname = "l-comment-item";
  maxLevel = 5;
  get hasChildren() {
      return this.$attrs.childrens && this.$attrs.childrens.length !== 0;
  }
  get level() {
      const l: any = this.$attrs.level;
      return l < this.maxLevel ? l : this.maxLevel;
  }
  // 提交
  click() {}
}
</script>
<style lang="scss" scoped>
@for $i from 1 through 5 {
  .level-#{$i} {
      padding-left: ($i*4em);
  }
}

.l-comment-item {
  padding-top: $g-gap;
  border-bottom: 1px dashed #f5f5f5;
  .list-item {
    border-bottom: 1px dashed #f5f5f5;
    &-avator {
      flex: 0 0 60px;
      height: 60px;
      margin-right: 1em;
      border-radius: 50%;
      border: 1px solid #f5f5f5;
      overflow: hidden;
    }
    &-content {
      flex: 1;
      align-items: center;
      .content {
        font-size: 1.1em;
        padding: 0.5em 0;
        line-height: 1.5em;
      }
      .name {
        cursor: pointer;
        transition: color $g-transitionTime;
        &:hover {
          color: #0371df;
        }
      }
    }
    &-btn {
      justify-content: flex-end;
      padding-bottom: $g-gap;
    }
  }
}
</style>
