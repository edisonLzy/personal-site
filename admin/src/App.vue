<template>
  <div id="app" class=" l-flex-center">
    <transition name="swiper" mode="out-in">
    <router-view />
    </transition>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100vh;
  background: linear-gradient(45deg, #409eff, #d89292);
}

.avatar-uploader {
  display: flex;
  justify-content: center;
  padding: 20px 0;
  & .el-upload {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px dotted #Ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
}
.el-select{
  width: 50%;
}
</style>
