<template>
  <div class="l-input l-flex">
    <l-icon iconClass="search"></l-icon>
    <input 
     :value="text"
     @input="updateValue" 
     type="text" 
     :class="styleInput" 
     v-bind="$attrs"
     />
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
  @Emit("input") // 触发组件上面的自定义事件
  updateValue(e: any) {
      //   const value = e.target.value;
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
  border-bottom: 6px solid #999;
  padding: 10px 0;
  font-size: 25px;
  perspective: 300px;
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