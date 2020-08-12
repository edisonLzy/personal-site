<template>
   <l-container title="list">
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
export default {
  name: "list",
  data() {
    return {
   
    };
  },
  methods: {

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
