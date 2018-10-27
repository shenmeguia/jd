<template>
  <section :class="cname">
    <swiper :options="options">
      <swiper-slide v-for="item in items" :key="item.src">
        <router-link :to="item.href">
          <img :src="item.src">
        </router-link>
      </swiper-slide>
      <div class="swiper-pagination" v-if="options.pagination" slot="pagination"></div>
    </swiper>
  </section>
</template>
<script>
  import {swiper,swiperSlide} from "vue-awesome-swiper";
  export default {
    components:{
      swiper,
      swiperSlide
    },
    props:{
      items:{
        type:Array,
        default() {
          return []
        }
      },
      cname:{
        type:String,
        default:""
      },
      options:{
        type:Object,
        default() {
          return {
            speed:1000,
            autoplay:true,
            loop:true,
            pagination:{
              el: '.swiper-pagination',
            }
          }
        }
      }
    }
  }
</script>
<style lang="scss">
  
</style>