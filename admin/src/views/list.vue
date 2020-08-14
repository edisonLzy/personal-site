<template>
  <l-container title="list" :avator="avator">
    <header>
      <l-query></l-query>
    </header>
    <main>
      <l-table></l-table>
    </main>
    <footer>
      <l-pagenation></l-pagenation>
    </footer>
  </l-container>
</template>

<script>
import { getWhoami } from "@/api";
export default {
  name: "list",
  data() {
    return {
      avator: "",
    };
  },
  methods: {},
  async mounted() {
    let data = await getWhoami();
    this.avator = data.data.user_avator;
  },
};
</script>

<style lang="scss" scoped>
.list {
  width: 500px;
  height: 500px;
  background: rgb(0, 255, 200);
}
</style>
