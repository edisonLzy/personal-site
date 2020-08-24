<template>
  <div id="app">
    <transition name="slide">
        <router-view></router-view>
    </transition>
  </div>
</template>
<style lang="scss">
@import url('./assets/scss/reset.scss');
html,body {
  height:100%;
  background: #f7f7f7;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $g-color;
    height:100%;
}

</style>
