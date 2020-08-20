<template>
  <nav class="l-tags">
    <template v-for="i in tags" >
     <a 
       @click="toggle(i.value)"
       :class='["l-tags-item",{
         "active":withValue(i.value)
       }]'
      :key="i.value">{{i.label}}</a>
    </template>
  </nav>
</template>

<script lang="ts">

import { Vue, Component, Prop, Watch, Emit } from "vue-property-decorator";
import {getTag,TagItem} from "@/api";
@Component({
    name: "l-tags",
})
export default class lTags extends Vue {
  static componentname = "l-tags";
  tags:TagItem[] = [];
  value:string[] = [];
  add(v:string){
      this.value.push(v);
      return this.value;
  }
  delete(v:string){
      this.value = this.value.filter(_v=>_v!==v);
      return this.value;
  }
  @Emit("select")
  toggle(v:string){
      const hasValue =this.withValue(v);
      return hasValue ? this.delete(v):this.add(v);
  }
  withValue(v:string){
      return this.value.includes(v);
  }
  async init(){
      this.tags  = await getTag();
  }
  mounted() {
      this.init();
  }
}
</script>

<style lang="scss" scoped>
.l-tags {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 1em;
  &-item {
    text-align: center;
    padding: 4px 14px;
    border: 1px solid #ccc;
    border-radius: $g-radius;
    font-size: 12px;
    transition: all $g-transitionTime ease 0s;
  }
  .active{
      color: $g-themeColor;
      border: 1px solid $g-themeColor;
  }
}
</style>
