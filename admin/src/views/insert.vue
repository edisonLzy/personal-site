<template>
  <l-container title="录入" :avator="avator">
    <section class="info">
      <el-form ref="form" :model="form" :rules="rules">
        <el-form-item prop="type">
          <el-select v-model="form.type" clearable placeholder="type:please select your type">
            <template v-for="i in types">
              <el-option :key="i" :value="i">{{i}}</el-option>
            </template>
          </el-select>
        </el-form-item>
        <el-form-item prop="title">
          <el-input v-model="form.title" clearable placeholder="title:please enter your title"></el-input>
        </el-form-item>
      </el-form>
    </section>
    <section class="md">
      <mavon-editor
        @imgAdd="imgAdd"
        @imgDel="imgDel"
        placeholder="drop you fingure"
        v-model="form.md"
        ref="md"
        @change="change"
        style="min-height: 600px"
      />
    </section>
    <!-- 提交确定区域 -->
    <section class="btns l-flex">
      <el-button @click="comfirm" type="primary">comfirm</el-button>
      <el-button @click="back">back</el-button>
    </section>
  </l-container>
</template>

<script>
// 导入组件 及 组件样式
import { getWhoami, addArticle } from "@/api";
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
export default {
  name: "insert",
  components: {
    mavonEditor,
  },
  data() {
    return {
      avator: "",
      form: {
        title: "",
        type: "",
        md: "",
        html: "",
      },
      types: [
        "typescript",
        "javascript",
        "html5",
        "css3",
        "webpack",
        "vue",
        "react",
        "wechat",
      ],
      rules: {
        type: [
          {
            required: true,
            message: "please select your type",
            trigger: "change",
          },
        ],
        title: [
          {
            required: true,
            message: "please enter your title",
            trigger: "blur",
          },
        ],
      },
    };
  },
  computed: {
    hasMd() {
      return !!this.form.html;
    },
  },
  methods: {
    change(md, html) {
      this.form.html = html;
    },
    async comfirm() {
      await this.$refs["form"].validate();
      // 校验md是否为空
      if (!this.hasMd) {
        Message({
          type: "warning",
          message: "enter your article",
        });
        return;
      }

      const data = await addArticle(this.form);
    },
    back() {
      this.$router.push({
        name: "list",
      });
    },
    imgAdd(filename, file) {},
    imgDel(filename) {},
  },
  async mounted() {
    let data = await getWhoami();
    this.avator = data.data.user_avator;
  },
};
</script>

<style lang="scss" scoped>
.btns {
  padding-top: 1em;
  justify-content: flex-end;
}
.title {
  margin-right: 20px;
}
.md{
  max-height: 600px;
  overflow: auto;
}
</style>