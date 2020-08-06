<template>
  <main class="about">
   <section class="about-left">

    <mavon-editor 
            v-model="content" 
            ref="md" 
            @change="change" 
            style="min-height: 600px"
        />

   </section>
   <section class="about-right"></section>
  </main>
</template>


<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({
    name: "about"
})
export default class About extends Vue {
  content = '';
  change(value, render){
    console.log(value, render)
  }
}
</script>

<style lang="scss" scoped>
.about{
    
}
</style>
