<template>
  <div id="box">
    <Header></Header>
    <Navbar></Navbar>
    <List></List>
    <Special></Special>
  </div>
</template>

<script>
  import Header from './header.vue';
  import Navbar from '../public/navbar.vue';
  import List from './list.vue';
  import Special from './special.vue';
  export default {
    components:{
      Header,
      List,
      Special,
      Navbar
    }  
  }
</script>

<style lang="scss">
</style>
