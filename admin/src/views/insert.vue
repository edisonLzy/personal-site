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
        <el-form-item prop="desc">
          <el-input type="textarea" v-model="form.desc" placeholder="desc:please enter your desc"></el-input>
        </el-form-item>
      </el-form>
    </section>
    <section class="md">
      <mavon-editor
        @imgAdd="imgAdd"
        @imgDel="imgDel"
        placeholder="drop you fingure"
        navigation
        v-model="form.md"
        ref="md"
        @change="change"
        style="max-height: 500px;max-width: 80vw;"
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
const h1 = /<(h[1-6])>([\S\s]*?)<\/(h[1-6])>/g;
// 导入组件 及 组件样式
import { getWhoami, addArticle } from "@/api";
import { mavonEditor } from "mavon-editor";
import $ from "jquery"
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
        desc: "",
        navigation: "",
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
        desc: [
          {
            required: true,
            message: "please enter your desc",
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
      this.form.md = md;
    },
    async comfirm() {
            // 获取目录
      this.getNav()
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
    getNav(html) {
      const nav = $(".v-note-navigation-content")
     const data = nav.find("h1,h2,h3,h4");
     let result = [];
     data.each((i,e)=>{
       const level = e.tagName.split('H')[1];
       const title = e.innerText
       const id = $(e).find("a").attr("id");
       result.push({
         level,
         title,
         id
       })
     })
    this.form.navigation = JSON.stringify(result)
    },
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
.md {
  max-height: 600px;
  overflow: auto;
}
</style>