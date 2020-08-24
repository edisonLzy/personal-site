<template>
  <div class="l-navigator">
    <nav>
      <!-- 展开按钮 -->
      <section class="menu" @click="toggleMenu">
         <l-icon  iconClass="expand"></l-icon>
      </section>
      <section class="logo" @click="toHome">
        <slot name="logo">
          <h1>EVAN LEE</h1>
        </slot>
      </section>
      <section class="link">
        <template v-for="item in navList">
          <router-link class="link-item" :to="item.name" :key="item.name">{{item.title}}</router-link>
        </template>
      </section>

      <section class="search" @click="search">
        <slot name="search">
          <l-icon  iconClass="search"></l-icon>
        </slot>
      </section>
    </nav>

    <transition name="slide">
      <section class="menu-item" v-show="menuVisible" @click="closeMenu">
        <template v-for="item in navList">
          <router-link class="link-item" :to="item.name" :key="item.name">{{item.title}}</router-link>
        </template>
      </section>
    </transition>
  </div>
</template>
<script lang="ts">
interface NavItem {
  name: string;
  title: string;
}
import { Component, Vue, Prop, Emit } from "vue-property-decorator";
@Component({
    name: "l-navigator",
    components: {},
})
export default class LNavigator extends Vue {
  static componentname = "l-navigator";
  @Prop({
      type: Array,
      required: true,
  })
  navList!: NavItem[];

  menuVisible = false;
  toggleMenu() {
      this.menuVisible = !this.menuVisible;
  }
  closeMenu(e: any) {
      if (e.target.tagName === "A") {
          this.menuVisible = false;
      }
  }
  toHome(){
      this.$router.push({
          name:"home"
      });
  }
  @Emit("search")
  search() {}
}
</script>
<style lang="scss" scoped>
.l-navigator {
  height: 100%;
  font-size: 18px;
  max-width: 90%;
  margin: 0 auto;
  transition: 1s;
  @media (max-width: 1140px) {
    max-width: 100%;
  }
  nav {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .menu {
      display: none;
    }
    .logo {
    }
    .link {
      flex: 1;
      &-item {
        padding: 0 1vw;
      }
    }
    .login {
      padding-right: 1em;
      @media (max-width: 1140px) {
        display: none;
      }
    }
    .search {
      cursor: pointer;
    }
  }
  .menu-item {
    position: fixed;
    z-index: 900;
    top: 70px;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 3vw;
    .link-item {
      position: relative;
      padding: 1vw 0;
      &::after {
        content: "";
        position: absolute;
        display: block;
        width: 0px;
        height: 3px;
        background: black;
        transition: 0.3s width;
      }
      &:hover:after {
        width: 100%;
      }
    }
  }
}

@media (max-width: 1140px) {
  .l-navigator {
    padding: 0 2vw;
    nav {
      .menu {
        cursor: pointer;
        display: block;
      }
      .link {
        display: none;
      }
    }
  }
}

@media (min-width: 1140px) {
  .l-navigator {
    .menu-item {
      display: none;
    }
  }
}
.slide-enter-active,
.slide-leave-active {
  transition: 0.5s;
}
.slide-enter,
.slide-leave-to {
  transform: translateX(-50%);
  opacity: 0;
}
</style>
