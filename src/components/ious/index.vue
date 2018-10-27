<template>
  <div id="box">
    <my-header></my-header>
    <Islider></Islider>
    <Welfare></Welfare>
    <Service></Service>
    <Footer></Footer>
    <Navbar></Navbar>
  </div>
</template>

<script>
  import myHeader from '../public/header.vue';
  import Islider from './islider.vue';
  import Welfare from './welfare.vue';
  import Service from './service.vue';
  import Footer from '../public/footer.vue';
  import Navbar from '../public/navbar.vue';
  export default {
    components:{
      myHeader,
      Islider,
      Welfare,
      Service,
      Footer,
      Navbar
    }  
  }
</script>

<style lang="scss">
</style>
