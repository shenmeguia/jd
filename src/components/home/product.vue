<template>
  <Panel title="新品推荐" :class="$style.panel">
    <section :class="$style.content">
      <div :class="$style.arrow">更多尖货></div>
      <Slider :items="items" :options="options" cname="product-slider"></Slider>
    </section>
  </Panel>
</template>
<script>
  import Panel from '../core/panel.vue';
  import Slider from '../core/slider.vue';
  export default {
    data() {
      return {
        items: [{
            href: "/",
            src: "//img12.360buyimg.com/jrpmobile/jfs/t13963/267/2355123229/48850/254f797a/5a3c59aeN9cb550f6.jpg?width=335&height=421",
        }, {
            href: "/",
            src: "//img12.360buyimg.com/jrpmobile/jfs/t13021/306/1996997425/21953/bda69db3/5a2f6a17N9da099b1.jpg?width=335&height=421",
        }, {
            href: "/",
            src: "//img12.360buyimg.com/jrpmobile/jfs/t14125/310/1997192193/46667/3c910f8b/5a2f6a36Nad95b650.jpg?width=335&height=421",
        }, {
            href: "/",
            src: "//img12.360buyimg.com/jrpmobile/jfs/t15784/188/381232069/39444/8878571d/5a2f6a4aNbd5a574c.jpg?width=335&height=421",
        }],
        options: {
          slidesPerView: 2.3,
          spaceBetween: 30,
        }
      }
    },
    components:{
      Panel,
      Slider
    }
  }
</script>
<!-- 这里不使用css module是因为要修改外部插件的样式 -->
<style lang="scss">
  .product-slider{
    padding:0 24px;
    box-sizing:border-box;
    .swiper-container{
      .swiper-slide{
        img{
          width:100%;
        }
      }
    }
  }
</style>
<style lang="scss" module>
  .panel{
    .content{
      padding-bottom:40px;
      position:relative;
      .arrow{
        position:absolute;
        font-size:28px;
        color:#999;
        right:20px;
        top:-70px;
      }
    }
  }
</style>