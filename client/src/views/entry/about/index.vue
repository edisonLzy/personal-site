<template>
  <main class="about">
    <section class="about-banner l-flex-center">
      <l-rotateCard>
         <code class="green">
           <i class="blue">alert</i>('hello world')
         </code>
         <template #back>
           <code class="green">
              <span class="purple">const</span> aboutMe <span class="cyan">=</span> {
              <br>
              <span class="space red">name</span><span class="cyan">:</span> <span class="green">'LEEZHIYU'</span>,
              <br>
              <span class="space red">email</span><span class="cyan">:</span> <span class="green">'656603135@qq.com'</span>,
              <br>
              <span class="space red">position</span><span class="cyan">:</span> <span class="green">'Web Front-End Developer'</span>,
              <br>
              <span class="space red">website</span><span class="cyan">:</span> <span class="green">'www.leezhiyu.cn'</span>
              <br> };
           </code>
         </template>
      </l-rotateCard>
    </section>
    <section class="about-introduction">

      萨达萨达
    </section>
  </main>
</template>


<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({
    name: "about",
})
export default class About extends Vue {}
</script>

<style lang="scss" scoped>
.about {
  .blue{
    color: #29b6f6;
  }
  .green{
    color: #9ccc65;
  }
  .purple{
    color: #ba68c8;
  }
  .red{
    color:#ef5350
  }
  .space{
    margin-left: 2rem;
  }
  .cyan{
    color:#4dd0e1
  }
  &-banner {
    border-radius: $g-radius;
    height: calc(100vh - 160px);
    background: linear-gradient(45deg, $g-themeColor, #d89292);
  }
}
</style>
