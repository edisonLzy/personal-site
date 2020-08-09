<template>
  <transition name="fadeIn">
    <div class="l-login" v-show="visible">
      <l-layer class="l-flex-center" @close="close" :visible="visible">
        <l-slidePannel>
          <template #part1-left>
            <section class="login"></section>
          </template>

          <template #part1-right>
            <section class="banner">
              <img class="l-img-c" src="image/banner.jpg" alt="login" />
            </section>
          </template>

          <template #part2-left>
            <section class="banner">
              <img class="l-img-c" src="image/kobe.jpg" alt="sign" />
            </section>
          </template>

          <template #part2-right>
            <section class="sign l-flex-v">
              <!-- title --> 
              <h2 class="form-title">Sign</h2>
              <!-- 表单 -->
              <form>
              <template v-for="i in signConfig">
                  <l-input v-model="signForm[i.id]" :key="i.id" v-bind="i"></l-input>
              </template>
              </form>

              <!-- button -->
              <div class="btn l-flex-center">
                 <button @click="comfirm" class="l-button">comfirm</button>
                 <button @click="cancel" class="l-button">cancel</button>
              </div>
            </section>
          </template>
        </l-slidePannel>
      </l-layer>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue, Model } from "vue-property-decorator";
import {sign} from "@/api/blog";
@Component({
    name: "l-login",
})
export default class LLogin extends Vue {
  static componentname = "l-login";
  @Model("input", {
      type: Boolean,
  })
  visible!: boolean;

  close() {
      this.$emit("input", false);
  }
  signForm = {
      account: "",
      password: "",
      avator: "",
      name: "",
      tele: "",
  };
  signConfig = [
      {
          label: "账号",
          placeholder: "请输入账号",
          id: "account",
      },
      {
          label: "密码",
          placeholder: "请输入密码",
          id: "password"
      },
      {
          label: "昵称",
          placeholder: "请输入昵称",
          id: "name",
      },
      {
          label: "电话",
          placeholder: "请输入电话",
          id: "tele",
      },
  ];
  text = "213123";

  async comfirm(){
      let data = await sign(this.signForm);
  }
  cancel(){

  }
}
</script>

<style scoped lang='scss'>
.l-login {
  &-pannel {
    width: 300px;
    height: 300px;
    background: red;
  }
  .banner {
    height: 100%;
  }
  .sign{
    padding: 1em;
  }
  .form-title{
    padding: 1em 0;
    text-align: center;
  }
  .btn{
    padding: 1em;
    button{
      margin-right: 1em;
    }
  }
}
</style>
