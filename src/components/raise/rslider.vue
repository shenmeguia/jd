<template>
  <div class="container">
    <section class="content">
      <swiper :options="options">
        <swiper-slide class="swiper-no-swiping">百万白条券免费送，速来领取！！ <em>></em> </swiper-slide>
        <swiper-slide class="swiper-no-swiping">签到领流量，1元500M！<em>></em> </swiper-slide>
      </swiper>
    </section>
  </div>
</template>
<script>
  import {swiper,swiperSlide} from "vue-awesome-swiper";
  export default {
    components:{
      swiper,
      swiperSlide
    },
    data() {
      return {
        options: {
          autoplay: true,
          loop: true,
          // 垂直滚动
          direction: "vertical",
          noSwiping : true,
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .container{
    background:white;
    .content{
      height:72px;
      line-height:72px;
      overflow:hidden;
      margin-top:120px;
      background: url(//m.jr.jd.com/spe/qyy/main/images/scroll_title_img.png) left center no-repeat;
      width:100%;
      box-sizing:border-box;
      background-size:20% auto;
      padding-left:178px;
      .swiper-container-vertical{
        height:72px;
        .swiper-slide{
          font-size:28px;
          color:#333;
          em{
            color:#ddd;
            float:right;
            margin-right:20px;
          }
        }
      }
    }
  }
</style>