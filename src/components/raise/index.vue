<template>
  <div id="box">
    <my-header></my-header>
    <Rslider></Rslider>
    <Daily></Daily>
    <In></In>
    <More></More>
    <Footer :class="$style.mfooter"></Footer>
    <Navbar></Navbar>
  </div>
</template>

<script>
  import myHeader from '../public/header.vue';
  import Rslider from './rslider.vue';
  import Daily from './daily.vue';
  import In from './in.vue';
  import More from './more.vue';
  import Footer from '../public/footer.vue';
  import Navbar from '../public/navbar.vue';
  export default {
    components:{
      myHeader,
      Rslider,
      Daily,
      In,
      More,
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
