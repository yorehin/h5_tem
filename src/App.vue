<template>
  <!--<div id="app">-->
    <!--<img src="./assets/logo.png">-->
    <!--<router-view/>-->
  <!--</div>-->
  <div>
    <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
      <!-- slides -->
      <swiper-slide>11111111111111111111111111</swiper-slide>
      <swiper-slide>I'm Slide 2</swiper-slide>
      <!--<swiper-slide>I'm Slide 3</swiper-slide>-->
      <!--<swiper-slide>I'm Slide 4</swiper-slide>-->
      <!--<swiper-slide>I'm Slide 5</swiper-slide>-->
      <!--<swiper-slide>I'm Slide 6</swiper-slide>-->
      <!--<swiper-slide>I'm Slide 7</swiper-slide>-->
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-scrollbar"   slot="scrollbar"></div>
    </swiper>
  </div>
</template>

<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide,
    loop: true
  },
  name: 'App',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      swiperOption: {
        // loop: true,
        // animationType: linear,

        direction : 'vertical',
        followFinger : false,
        speed:800,
        mousewheel: true,
        pagination : {
          el:'.swiper-pagination',
        },
        on:{
          init:function(swiper){
            slide=this.slides.eq(0);
            slide.addClass('ani-slide');
          },
          transitionStart: function(){
            for(i=0;i<this.slides.length;i++){
              slide=this.slides.eq(i);
              slide.removeClass('ani-slide');
            }
          },
          transitionEnd: function(){
            slide=this.slides.eq(this.activeIndex);
            slide.addClass('ani-slide');

          },
        }




      }
    }
  },
  compputed: {
    swiper () {
      console.log(this.swiperSlide + '杨丽宾')
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    console.log(this.swiper + '杨丽宾')
    this.swiper.slideTo(3, 1000, false)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.swiper-container {
  width: 600px;
  height: 300px;
}
</style>
