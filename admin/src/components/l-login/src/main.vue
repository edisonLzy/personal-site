<template>
  <div class="l-login">
    <h2 class="l-login-title">LOGIN</h2>
    <el-form :rules="rules" ref="form" :model="form" label-width="80px">
      <el-form-item label="Account" prop="account">
        <el-input v-model="form.account" clearable placeholder="please enter your account"></el-input>
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input
          type="password"
          v-model="form.password"
          clearable
          placeholder="please enter your password"
        ></el-input>
      </el-form-item>
      <el-form-item>
        if your don't have account,you can
        <el-button type="text" @click="toggle">sign for you</el-button>
      </el-form-item>
      <el-form-item class="l-login-btn l-flex-center">
        <el-button type="primary" size="mini" @click="toLogin">TOLOGIN</el-button>
        <el-button size="mini" @click="toClear">CLEAR</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang='ts'>
import md5 from "md5";
import { Component, Vue, Prop, Model, Emit } from "vue-property-decorator";
@Component({
  name: "l-login",
  components: {},
})
export default class LLogin extends Vue {
  static componentname = "l-login";

  rules = {
    account: [
      { required: true, message: "please enter your account", trigger: "blur" },
    ],
    password: [
      { required: true, message: "please enter your passowrd", trigger: "blur" },
    ],
  };
  @Emit("login")
  async toLogin() {
    // 校验 
    await (this.$refs["form"] as any).validate()

    // 使用md5 进行加密
    const { account, password: Password } = this.form;
    const password = md5(Password);
    return {
      account,
      password,
    };
  }
  @Emit("toggle")
  toggle() {}

  form = {
    account: "",
    password: "",
  };
  toClear() {
    this.form = {
      account: "",
      password: "",
    };
  }
}
</script>
<style lang='scss' scoped >
.l-login {
  border-radius: 10px;
  padding: 10px;
  background: #fff;
  &-title {
    padding: 10px 0;
    text-align: center;
  }
}
</style>