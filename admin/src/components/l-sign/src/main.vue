<template>
  <div class="l-sign">
    <h2 class="l-sign-title">SIGN</h2>
    <el-upload
      class="avatar-uploader"
      action="http://localhost:3000/v1/api/upload"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
    >
      <img v-if="signForm.avator" :src="signForm.avator" class="l-sign-avatar" />
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>

    <el-form ref="form" :model="signForm" label-width="80px">
      <el-form-item label="Account">
        <el-input v-model="signForm.account" clearable placeholder="please enter your account"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input v-model="signForm.password" clearable placeholder="please enter your password"></el-input>
      </el-form-item>
      <el-form-item label="Telephone">
        <el-input v-model="signForm.tele" clearable placeholder="please enter your Telephone"></el-input>
      </el-form-item>
      <el-form-item label="name">
        <el-input v-model="signForm.name" clearable placeholder="please enter your name"></el-input>
      </el-form-item>

      <el-form-item>
        if your have account,you can
        <el-button type="text" @click="toggle">login directly</el-button>
      </el-form-item>
      <el-form-item class="l-sign-btn">
        <el-button type="primary" size="mini" @click="toSign">TOSIGN</el-button>
        <el-button size="mini" @click="toClear">CLEAR</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Prop, Model, Emit } from "vue-property-decorator";
@Component({
  name: "l-sign",
  components: {},
})
export default class LSign extends Vue {
  static componentname = "l-sign";
  @Emit('toggle')
  toggle(){}
  signForm = {
    account: "",
    password: "",
    name: "",
    tele: "",
    avator:"",
  };
  toClear() {
    this.signForm = {
      account: "",
      password: "",
      name: "",
      tele: "",
      avator: "",
    };
  }
  @Emit('sign')
  toSign() {
    return this.signForm
  }
  handleAvatarSuccess(res: any, file: File) {
    const {data} = res;
    this.signForm.avator  = data;
  }
}
</script>
<style lang='scss' scoped >
.l-sign {
    border-radius: 10px;
    padding: 10px;
    background: #fff;
    &-title {
      padding: 10px 0;
      text-align: center;
    }
    &-btn {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &-avatar{
      width: 100%;
    }
}
</style>