<template>
    <section 
    class="analyze l-flex-v-center l-hover"
    v-on="$listeners">
       <p>{{$attrs.title}}</p>
       <h2>{{$attrs.count}}</h2>
       <p>较前日 ++</p>
    </section>
</template>


<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({
    name: "home-analyze",
    inheritAttrs: false,
})
export default class Analyze extends Vue {

}
</script>

<style lang="scss" scoped>
.analyze {
  flex: 1;
}
</style>
