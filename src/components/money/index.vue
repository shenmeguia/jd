<template>
  <div id="box">
    <my-header></my-header>
    <Mslider></Mslider>
    <Ada></Ada>
    <Money></Money>
    <Adb></Adb>
    <Finance></Finance>
    <Adc></Adc>
    <Footer :class="$style.mfooter"></Footer>
    <Navbar></Navbar>
  </div>
</template>

<script>
  import myHeader from '../public/header.vue';
  import Mslider from './mslider.vue';
  import Ada from './ada.vue';
  import Money from './money.vue';
  import Adb from './adb.vue';
  import Finance from './finance.vue';
  import Adc from './adc.vue';
  import Footer from '../public/footer.vue';
  import Navbar from '../public/navbar.vue';
  export default {
    components:{
      myHeader,
      Mslider,
      Ada,
      Money,
      Adb,
      Finance,
      Adc,
      Footer,
      Navbar
    }  
  }
</script>

<style lang="scss" module>
.mfooter{
  >ul{
    >li{
      &:first-child{
        img{
          display:none;
        }
      }
    }
  }
}
</style>
