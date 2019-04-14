<template>
  <!--<div id="app">-->
    <!--<img src="./assets/logo.png">-->
    <!--<router-view/>-->
  <!--</div>-->
  <div class="h5Page">
    <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
      <!-- slides -->
      <swiper-slide>
        <section  class="MySlider1"  style="background-color: blueviolet">
          <p class="bounce" >
          </p>
        </section>
      </swiper-slide>
      <swiper-slide>
        <section  class="MySlider2">
          <p>
          </p>
        </section>
      </swiper-slide>
      <swiper-slide>
        <section  class="MySlider3">
          <p>
          </p>
        </section>
      </swiper-slide>
      <swiper-slide>
        <section  class="MySlider4">
          <p>

          </p>
        </section>
      </swiper-slide>
      <swiper-slide>
        <section  class="MySlider5">
          <p>

          </p>
        </section>
      </swiper-slide>
      <swiper-slide>
        <section  class="MySlider6">
          <p>

          </p>
        </section>
      </swiper-slide>
      <swiper-slide>
        <section  class="MySlider7">
          <p>

          </p>
        </section>
      </swiper-slide>
      <swiper-slide>
        <section  class="MySlider8">
          <p>

          </p>
        </section>
      </swiper-slide>
      <swiper-slide>
        <section  class="MySlider9">
          <p>

          </p>
        </section>
      </swiper-slide>
      <swiper-slide>
        <section  class="MySlider10">
          <p>

          </p>
        </section>
      </swiper-slide>
      <swiper-slide>
        <section  class="MySlider11">
          <p>

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
// import one from 'components/TaxBureau/One'
// import two from 'components/TaxBureau/Two'
// import three from 'components/TaxBureau/Three'
// import four from 'components/TaxBureau/Four'
// import five from 'components/TaxBureau/Five'
// import six from 'components/TaxBureau/Six'
// import seven from 'components/TaxBureau/Seven'
// import eight from 'components/TaxBureau/Eight'
// import nine from 'components/TaxBureau/Nine'
// import ten from 'components/TaxBureau/Ten'
// import eleven from 'components/TaxBureau/Eleven'
export default {
  components: {
    swiper,
    swiperSlide
    // one,
    // two,
    // three,
    // four,
    // five,
    // six,
    // seven,
    // eight,
    // nine,
    // ten,
    // eleven
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
  .MySlider1{
    height: 100vh;
    background-image: url("assets/TaxBureau/layout/a.png");
    background-size: 100%;
  }
.MySlider2{
  height: 100vh;
  background-image: url("assets/TaxBureau/layout/b.png");
  background-size: 100%;
}
.MySlider3{
  height: 100vh;
  background-image: url("assets/TaxBureau/layout/c.png");
  background-size: 100%;
}
.MySlider4{
  height: 100vh;
  background-image: url("assets/TaxBureau/layout/d.png");
  background-size: 100%;
}
.MySlider5{
  height: 100vh;
  background-image: url("assets/TaxBureau/layout/e.png");
  background-size: 100%;
}
.MySlider6{
  height: 100vh;
  background-image: url("assets/TaxBureau/layout/f.png");
  background-size: 100%;
}
.MySlider7{
  height: 100vh;
  background-image: url("assets/TaxBureau/layout/g.png");
  background-size: 100%;
}
.MySlider8{
  height: 100vh;
  background-image: url("assets/TaxBureau/layout/h.png");
  background-size: 100%;
}
.MySlider9{
  height: 100vh;
  background-image: url("assets/TaxBureau/layout/i.png");
  background-size: 100%;
}
.MySlider10{
  height: 100vh;
  background-image: url("assets/TaxBureau/layout/j.png");
  background-size: 100%;
}
.MySlider11{
  height: 100vh;
  background-image: url("assets/TaxBureau/layout/k.png");
  background-size: 100%;
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
