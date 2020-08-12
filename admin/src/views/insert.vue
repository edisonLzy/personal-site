<template>
  <l-container title="insert">
    <mavon-editor v-model="content" ref="md" @change="change" style="min-height: 600px" />
    <!-- 提交确定区域 -->
    <section class="btns l-flex">
      <el-button @click="comfirm" type="primary">comfirm</el-button>
      <el-button @click="back">back</el-button>
    </section>
  </l-container>
</template>

<script>
// 导入组件 及 组件样式
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
export default {
  name: "insert",
  components: {
    mavonEditor,
  },
  data() {
    return {
      content: "",
    };
  },
  methods: {
    change(h, m) {
      console.log(h, m);
    },
    comfirm() {
      console.log(this.content);
    },
    back() {
      this.$router.push({
        name:'list'
      })
    },
  },
};
</script>

<style lang="scss" scoped>
.btns {
  padding-top: 1em;
  justify-content: flex-end;
}
</style>