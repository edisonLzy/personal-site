<template>
  <main class="essay">
   <section class="essay-left"></section>
   <section class="essay-right"></section>
  </main>
</template>


<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({
    name: "essay"
})
export default class Essay extends Vue {}
</script>

<style lang="scss" scoped>
.essay{
    
}
</style>
