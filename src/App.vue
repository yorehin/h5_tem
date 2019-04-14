<template>
  <!--<div id="app">-->
    <!--<img src="./assets/logo.png">-->
    <!--<router-view/>-->
  <!--</div>-->
  <div class="h5Page">
    <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
      <!-- slides -->
      <swiper-slide>
        <section class="MySlider" style="background-color: blueviolet">
          <p class="bounce" >
          </p>
        </section>
      </swiper-slide>
      <swiper-slide>
        <section class="MySlider"  style="background-color: green">
          <p>1<img src="assets/TaxBureauImg/1-1首页1.png" height="3090" width="750"/>
            <img src="assets/TaxBureauImg/try2.png" height="100%" width="100%"/>
          </p>
        </section>
      </swiper-slide>
      <swiper-slide>
        <section class="MySlider"  style="background-color: pink">
          <p>3333333333
            <img src="assets/TaxBureauImg/try2.png" height="100%" width="100%"/>
          </p>
        </section>
      </swiper-slide>
      <swiper-slide>
        <section class="MySlider"  style="background-color: aqua">
          <p>44444444444
            <img src="assets/TaxBureauImg/try2.png" height="100%" width="100%"/>
          </p>
        </section>
      </swiper-slide>

      <!--<swiper-slide>I'm Slide 3</swiper-slide>-->
      <!--<swiper-slide>I'm Slide 4</swiper-slide>-->
      <!--<swiper-slide>I'm Slide 5</swiper-slide>-->
      <!--<swiper-slide>I'm Slide 6</swiper-slide>-->
      <!--<swiper-slide>I'm Slide 7</swiper-slide>-->
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
      <!--<div class="swiper-button-next" slot="button-next"></div>-->
      <div class="swiper-scrollbar"   slot="scrollbar"></div>
    </swiper>
  </div>
</template>

<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import one from 'components/TaxBureau/One'
import two from 'components/TaxBureau/Two'
import three from 'components/TaxBureau/Three'
import four from 'components/TaxBureau/Four'
import five from 'components/TaxBureau/Five'
import six from 'components/TaxBureau/Six'
import seven from 'components/TaxBureau/Seven'
import eight from 'components/TaxBureau/Eight'
import nine from 'components/TaxBureau/Nine'
import ten from 'components/TaxBureau/Ten'
import eleven from 'components/TaxBureau/Eleven'
export default {
  components: {
    swiper,
    swiperSlide,
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
    eleven
  },
  name: 'App',
  data () {
    let slide
    return {
      msg: 'Welcome to Your Vue.js App',
      showCss: false,
      swiperOption: {
        // loop: true,
        // animationType: linear,

        direction: 'vertical',
        followFinger: false,
        speed: 800,
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination'
        },
        on: {
          init: function (swiper) {
            console.log('------swiper==>j', this.slides)
            slide = this.slides.eq(0)
            slide.addClass('ani-slide')
          },
          transitionStart: function () {
            for (let i = 0; i < this.slides.length; i++) {
              slide = this.slides.eq(i)
              slide.removeClass('ani-slide')
            }
          },
          transitionEnd: function () {
            slide = this.slides.eq(this.activeIndex)
            slide.addClass('ani-slide')
          }
        }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    console.log(this.swiper + '杨丽宾')
    // this.swiper.slideTo(1, 1000, false)
  },
  methods: {
    callback () {

    }
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
.h5Page{
  height: 100vh;
  width: 100vw;
}
.swiper-container {
  /*width: 600px;*/
  height: 100vh;
}
  .MySlider{
    height: 100vh;
  }
  .bounce{
    background-color: red;
    /*-webkit-animation:bounce 2s infinite;*/
    animation: bounce 3s 3;
    -webkit-animation:bounce 3s 3;
  }

.swiper-slide p{
  transform:translateX(-200px);
  opacity:0;
  transition:all .4s;
}
.ani-slide p{
  transform:translateX(0);
  opacity:1;
}
</style>
