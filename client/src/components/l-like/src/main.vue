<template>
  <aside class="l-like">
    <template v-for="(i,index) in config">
      <a
         @click="toggle(index)"
        :class="`l-like-item ${i.isActive?'l-like-active-item':''} l-flex-center l-circle`"
        :key="i.icon"
        :title="i.title"
        :badge="i.badge"
        :href="`${i.icon ==='comment'?'#comment':'javascript:;'}`"
      >
        <l-icon :iconClass="i.icon" :title="i.title"></l-icon>
      </a>
    </template>
  </aside>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";
@Component({
  name: "l-like",
})
export default class lLike extends Vue {
  static componentname = "l-like";
  config = [
    {
      icon: "like",
      title: "点赞",
      badge: 1,
      isActive: false,
    },
    {
      icon: "comment",
      title: "评论",
      badge: 1,
      isActive: false,
    },
    {
      icon: "collection",
      title: "收藏",
      badge: 3,
      isActive: false,
    },
  ];
  like(index){
    const isActive = this.config[index].isActive;
    this.config[index].isActive = !isActive;
    let badge = this.config[index].badge;
   this.config[index].badge = isActive?--badge:++badge;
    return this.config[index]
  }
  comment(){
   
  }
  collection(index){
    const isActive = this.config[index].isActive;
    this.config[index].isActive = !isActive;
    let badge = this.config[index].badge;
    this.config[index].badge = isActive?--badge:++badge;
    return this.config[index]
  }
  @Emit("click")
  toggle(i) {
    switch(i){
        case 0 :
        return this.like(0);
        break;
        case 1:
        return this.comment();
        break;
        case 2:
        return this.collection(2);
        break;
    }

  }
}
</script>

<style scoped lang='scss'>
.l-like {
  position: fixed;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: 100px;
  height: 200px;
 transition: $g-transitionTime;
   @media (max-width: 1140px) {
  left: auto;
  right: 5%;
  top: 100%;
  display: flex;
  justify-content: space-between;
  width: 200px;
  }
  &-item {
    position: relative;
    font-size: 1.5em;
    width: 50px;
    height: 50px;
    cursor: pointer;
    background: #fff;
    margin-bottom: 1em;
    &::after {
      position: absolute;
      content: attr(badge);
      text-align: center;
      font-size: 12px;
      width: 20px;
      height: 20px;
      right: -20%;
      top: 0;
      border-radius: 50%;
      background-color: #b2bac2;
      color: #fff;
      transition: $g-transitionTime;
    }
  }
  &-active-item {
    &::after {
      background-color: #ffffff;
      color: $g-themeColor;
    }
  }
}
</style>
