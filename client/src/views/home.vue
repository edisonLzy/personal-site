<template>
  <div class="home">
    <l-video :src='videoSrc' autoplay loop>
      <parallax>
        <l-hugeScreen :text="welcome"></l-hugeScreen>
        <l-hugeScreen text="THANK YOU KOBE BYRANT" fontSize="15px" delay="2s"></l-hugeScreen>
        
        <!-- github 地址  -->
        <section class="other l-flex fadeUp-1" @click="onClick">
          <template v-for="i in other">
            <nav 
              class="other-item"
             :key="i.icon" :title="i.title">
               <l-icon :iconClass='i.icon' :title="i.title"></l-icon>
            </nav>
          </template>
        </section>
        <nav class="home-nav">
          <l-button @click="toUI">UI</l-button>
          <l-button @click="toBLOG">BLOG</l-button>
        </nav>
      </parallax>
    </l-video>
  </div>
</template>


<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({
    name: "Home",
})
export default class Home extends Vue {
   videoSrc = [{
       src:"video/kobe.mp4",
       type:"video/mp4"
   }]
   welcome = "WECLOME TO MY SITE";
   other = [
       {
           icon:"qq",
           title:"qq"
       },
       {
           icon:"wechat",
           title:"wechat"
       },
       {
           icon:"github",
           title:"github"
       },
   ]

   onClick(e:any){
       //  console.log(e.target.);
   }
   toBLOG() {
       this.$router.push({
           name: "entry",
       });
   }
   toUI() {
  
   }
}
</script>

<style lang="scss" scoped>
.home {
   @media (max-width: 1140px) {
       overflow: hidden;
      }
  &-title {
    color: #fff;
     width: 12em;
    justify-content: space-between;
  }
  &-nav {
    display: flex;
    width: 500px;
    justify-content: space-between;
    padding: 2em;
    @media (max-width: 1140px) {
        width: 300px;
      }
  }
  .other{
    padding-top: 2em;
    &-item{
      cursor: pointer;
      margin: 0 1em;
      width: 2em;
      border-radius: 50%;
      text-align: center;
      line-height: 2em;
      border: 1px solid #fff;
    }
  }
}
</style>
