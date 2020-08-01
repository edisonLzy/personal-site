<template>
  <main class="about">
   <section class="about-left"></section>
   <section class="about-right"></section>
  </main>
</template>


<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({
    name: "about"
})
export default class About extends Vue {}
</script>

<style lang="scss" scoped>
.about{
    
}
</style>
