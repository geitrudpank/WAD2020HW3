<template>
  <selection>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap" rel="stylesheet">
    <Header/>
    <Browse/>
  </selection>
</template>

<script>
import Browse from "@/components/Browse";
import Header from "@/components/Header";
export default {
name: "BrowseMain",
  components: {Header, Browse}
}
</script>

<style scoped>

</style>