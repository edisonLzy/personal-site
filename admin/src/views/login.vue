<template>
  <div class="container">
    <l-slidePannel ref="panel">
      <template #part1-left>
        <section class="container-login l-flex-center">
          <l-login @login="toLogin" @toggle="toToggle"></l-login>
        </section>
      </template>
      <template #part1-right></template>
      <template #part2-left></template>
      <template #part2-right>
        <section class="container-sign l-flex-center">
          <l-sign @sign="toSign" @toggle="toToggle"></l-sign>
        </section>-->
      </template>
    </l-slidePannel>
  </div>
</template>

<script>
import {getSign,getLogin} from '@/api'
import { Message } from 'element-ui';
export default {
  name: "login",
  data() {
    return {
    };
  },
  methods: {
    async toLogin(form) {
      const r = await getLogin(form);
      // this.$router.push({
      //   name:'insert'
      // })
    },
    async toSign(form) {
     const r = await getSign(form)
     Message({
       type:'success',
       message:'注册成功'
     })
     this.toToggle()
    },
    toToggle() {
      this.$refs.panel.toggle()
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  &-login,&-sign{
  width: 100%;
  height: 100%;
  }
}
</style>
