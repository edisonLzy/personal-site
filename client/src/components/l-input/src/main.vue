<template>
  <div class="l-input l-flex">
    <slot>
       <label :for="$attrs.id" class="l-input-label">{{$attrs.label + ':'}}</label>
    </slot>
    <input 
     :value="text"
     @input="updateValue" 
     type="text" 
     :class="styleInput" 
     v-bind="$attrs"
     />
     <!-- 清空按钮 -->
    <l-icon 
    v-show="visible"
    iconClass="close" 
    @click="clear" 
    style="transform:scale(.5)"></l-icon>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Prop, Model, Emit } from "vue-property-decorator";
@Component({
    name: "l-input",
    inheritAttrs:false,
    components: {}
})
export default class lInput extends Vue {
  static componentname = "l-input";
  // Model
  @Model("input", { type: String })
  readonly text!: string;
  /* props */
  @Prop()
  rules!: RegExp | Function;
  /* state */
  isValidate = true;
  visible = false;
  /* get */
  get styleInput(){
      return [
          "l-input__inner",
          {
              "l-input__inner--error":!this.isValidate
          }
      ];
  }
  /* methods */
  clear(){
      this.$emit("input","");
  }
  @Emit("input") // 触发组件上面的自定义事件
  updateValue(e: any) {
       
      const value = e.target.value;
      this.visible = value ===""?false:true;
      //   let res = value;
      //   //   if (Is.isRegExp(this.rules)) {
      //   //       if(!this.rules.test(value)){
      //   //           res = "";
      //   //           this.isValidate = false;
      //   //       }else{
      //   //           this.isValidate = true;
      //   //       }
      //   //   }else if(typeof this.rules === "function"){
      //   //       this.isValidate = this.rules(res);
      //   //   }
      //   e.target.value = "";
      return  e.target.value;
  }
}
</script>
<style lang='scss' scoped >
.l-input {
  border-bottom: 1px dotted #999;
  padding: 10px 0;
  font-size: 25px;
  perspective: 300px;
  &-label{
    display: block;
    width: 4em;
    font-size: 12px;
  }
  &__inner {
    width: 100%;
    padding-left: 1em;
    cursor: pointer;
    transition: transform .2s linear;
    &:focus{
         transform: scale(.8) translate3d(-2em,-.2em,2em);
    }
  }
  &__inner--error{
    border-color: #e64d11!important;
  }
}
</style>