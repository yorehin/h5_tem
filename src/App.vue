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
          <div class="bounce">
            <img src="./assets/TaxBureau/cutChart/a/reform.png" width="95%" style="display: flex;margin: 16.11% auto 0;"/>
            <img src="./assets/TaxBureau/cutChart/a/bulb.png" width="33.33%" style="display: flex; margin: 9.67% auto 0"/>
            <img src="./assets/TaxBureau/cutChart/a/propaganda.png" width="40%" style="display: flex; margin: 14.47% auto 0"/>
            <img src="./assets/TaxBureau/cutChart/a/person.png" width="100vw" style="position: absolute; bottom: 0"/>
          </div>
        </section>
      </swiper-slide>
      <swiper-slide>
        <section  class="MySlider21">
          <div class="bounce" style="height:100vh; display: flex;flex-direction: column;">
            <img src="./assets/TaxBureau/cutChart/b/backUp.png" width="100%"/>
            <img src="./assets/TaxBureau/cutChart/b/ball.png" width="71.73%" style="margin: 24.28% 0 0 18%"/>
            <img src="./assets/TaxBureau/cutChart/b/person.png" width="100vw" style="position: absolute; bottom: 0"/>
            <div style="flex:1;" >&nbsp;</div>
            <img src="./assets/TaxBureau/cutChart/b/backDown.png" width="100%" style="margin-bottom: 0px"/>
          </div>
        </section>
      </swiper-slide>
      <swiper-slide>
        <section  class="MySlider2">
          <div class="bounce" style="height:100vh; display: flex;flex-direction: column;">
            <img src="./assets/TaxBureau/cutChart/b/backUp.png" width="100%"/>
            <img src="./assets/TaxBureau/cutChart/b/icon1.png" width="4%" style="margin-left: 130px; margin-top: 160px"/>
            <img src="./assets/TaxBureau/cutChart/b/icon2.png" width="4%" style="margin-left: 130px; margin-top: 55px"/>
            <img src="./assets/TaxBureau/cutChart/b/icon3.png" width="4%" style="margin-left: 130px; margin-top: 55px"/>
            <img src="./assets/TaxBureau/cutChart/b/person.png" width="100vw" style="position: absolute; bottom: 0"/>
            <div style="flex:1;" >&nbsp;</div>
            <img src="./assets/TaxBureau/cutChart/b/backDown.png" width="100%" style="margin-bottom: 0px"/>
          </div>
        </section>
      </swiper-slide>

      <swiper-slide>
        <section  class="MySlider3">
          <div style="display: flex;flex-direction: column;">
            <img src="./assets/TaxBureau/cutChart/c/backUp.png" width="100%"/>
            <img src="./assets/TaxBureau/cutChart/c/backBlue.png" width="40%" style="margin-left: 40px; margin-top: 74px"/>
            <div style="margin-top: -25px; margin-left: 91px; font-weight: bold; font-size: 15px; color: #2d69ba">降税率</div>
            <img src="./assets/TaxBureau/cutChart/c/arrow.png" width="14.8%" style="margin-top: 123px; margin-left: 199px;"/>
            <img src="./assets/TaxBureau/cutChart/c/arrow.png" width="14.8%" style="margin-top: 30px; margin-left: 199px;"/>
            <img src="./assets/TaxBureau/cutChart/c/backDown.png" width="75%" style="margin-top: 118px; margin-left: 94px;"/>
            <img src="./assets/TaxBureau/cutChart/c/person.png" width="21.07%" style="margin-top: -143px; margin-left: 257px;" />
          </div>
        </section>
      </swiper-slide>
      <swiper-slide>
        <section  class="MySlider4">
          <div style="display: flex;flex-direction: column;">

            <img src="./assets/TaxBureau/cutChart/d/backUp.png" width="100%"/>
            <img src="./assets/TaxBureau/cutChart/d/back_blue.png" width="40%" style="margin-left: 40px; margin-top: 74px"/>
            <div style="margin-top: -28px; margin-left: 85px; font-weight: bold; font-size: 15px; color: #2d69ba">降扣除税</div>
            <img src="./assets/TaxBureau/cutChart/d/arrow.png" width="14.8%" style="margin-left: 200px; margin-top: 153px"/>
            <img src="./assets/TaxBureau/cutChart/d/car.png" width="40.4%" style="margin-left: 124px; margin-top: 145px"/>
          </div>
        </section>
      </swiper-slide>
      <swiper-slide>
        <section  class="MySlider5">
          <div style="display: flex;flex-direction: column;">
            <img src="./assets/TaxBureau/cutChart/e/backUp.png" width="100%"/>
            <img src="./assets/TaxBureau/cutChart/e/backBlue.png" width="56.4%" style="margin-left: 40px; margin-top: 74px"/>
            <div style="margin-top: -28px; margin-left: 85px; font-weight: bold; font-size: 15px; color: #2d69ba">同步调整出口退税率</div>
            <img src="./assets/TaxBureau/cutChart/e/arrow.png"  width="14.8%" style="margin-left: 200px; margin-top: 170px"/>
            <img src="./assets/TaxBureau/cutChart/e/arrow.png"  width="14.8%" style="margin-left: 200px; margin-top: 30px"/>
          </div>
        </section>
      </swiper-slide>
      <swiper-slide>
        <section  class="MySlider6">
          <div style="display: flex;flex-direction: column; height: 100vh">
            <img src="./assets/TaxBureau/cutChart/f/backUp.png" width="100%"/>
            <img src="./assets/TaxBureau/cutChart/f/backBlue.png" width="56.4%" style="margin-left: 40px; margin-top: 74px"/>
            <div style="margin-top: -28px; margin-left: 85px; font-weight: bold; font-size: 15px; color: #2d69ba">同步调整出口退税率</div>
            <img src="./assets/TaxBureau/cutChart/f/red.png" width="28.8%" style="margin-left: 1.5%; margin-top: 79.9%"/>
            <img src="./assets/TaxBureau/cutChart/e/arrow.png"  width="14.8%" style="margin-left: 10%; margin-top: -30%"/>
            <img src="./assets/TaxBureau/cutChart/e/arrow.png"  width="14.8%" style="margin-left: 200px; margin-top: 30px"/>
            <div style="flex: 1;">&nbsp;</div>
            <img src="./assets/TaxBureau/cutChart/f/backDown.png" width="100%" style="margin-bottom: 0"/>
          </div>
        </section>
      </swiper-slide>
      <swiper-slide>
        <section  class="MySlider7">
          <div style="display: flex;flex-direction: column;">
            <img src="./assets/TaxBureau/cutChart/g/backUp.png" width="100%"/>
            <img src="./assets/TaxBureau/cutChart/f/backBlue.png" width="68.67%" style="margin-left: 40px; margin-top: 70px"/>
            <div style="margin-top: -31px; margin-left: 69px; font-weight: bold; font-size: 15px; color: #2d69ba">同步调整离境退税物品退税率</div>
            <img src="./assets/TaxBureau/cutChart/e/arrow.png" width="14.8%" style="margin-left: 197px; margin-top: 116px"/>
            <img src="./assets/TaxBureau/cutChart/e/arrow.png" width="14.8%" style="margin-left: 197px; margin-top: 30px"/>
          </div>
        </section>
      </swiper-slide>
      <swiper-slide>
        <section  class="MySlider8">
          <div style="display: flex;flex-direction: column;">
            <img src="./assets/TaxBureau/cutChart/h/backUp.png" width="100%"/>
            <img src="./assets/TaxBureau/cutChart/h/backBlue.png" width="50%" style="margin-left: 47px; margin-top: 74px"/>
            <div style="margin-top: -27px; margin-left: 75px; font-weight: bold; font-size: 15px; color: #2d69ba">扩大进项税抵扣范围</div>
            <img src="./assets/TaxBureau/cutChart/h/car.png" width="46.4%" style="margin: 280px auto 0"/>
          </div>
        </section>
      </swiper-slide>
      <swiper-slide>
        <section  class="MySlider9">
          <div style="display: flex;flex-direction: column;">
            <img src="./assets/TaxBureau/cutChart/i/backUp.png" width="100%"/>
            <img src="./assets/TaxBureau/cutChart/i/backBlue.png" width="56.4%" style="margin-left: 81px; margin-top: 74px"/>
            <div style="margin-top: -27px; margin-left: 104px; font-weight: bold; font-size: 15px; color: #2d69ba">允许不动产进项一次抵扣</div>
            <img src="./assets/TaxBureau/cutChart/i/disposable.png" width="44.8%" style="margin-left: 168px; margin-top: 148px"/>
          </div>
        </section>
      </swiper-slide>
      <swiper-slide>
        <section  class="MySlider10">
          <div style="display: flex;flex-direction: column;">
            <img src="./assets/TaxBureau/cutChart/j/backUp.png" width="100%"/>
            <img src="./assets/TaxBureau/cutChart/j/backBlue.png" width="38.93%" style="margin-top: 74px; margin-left: 77px"/>
            <div style="margin-top: -27px; margin-left: 105px; font-weight: bold; font-size: 15px; color: #2d69ba">实施加计抵减</div>
            <img src="./assets/TaxBureau/cutChart/j/ride.png" width="8.13%" style="margin-left: 60px; margin-top: 190px"/>
            <img src="./assets/TaxBureau/cutChart/j/provision.png" width="16.13%" style="margin-left: 130px; margin-top: -50px"/>
            <img src="./assets/TaxBureau/cutChart/j/offset.png" width="43.33%" style="margin-left: 195px; margin-top: -50px"/>
          </div>
        </section>
      </swiper-slide>
      <swiper-slide>
        <section  class="MySlider11">
          <div style="display: flex;flex-direction: column;">
            <img src="./assets/TaxBureau/cutChart/k/backUp.png" width="100%"/>
            <img src="./assets/TaxBureau/cutChart/k/button.png" width="44.53%" style="margin-left: 38px"/>
            <img src="./assets/TaxBureau/cutChart/k/cloud.png" width="82.13%" style="margin: 26px auto 0"/>
            <div style="margin: -27px auto; font-weight: bold; font-size: 15px; color: #2d69ba">所有行业试行增值税留抵退税制度</div>
            <img src="./assets/TaxBureau/cutChart/k/rectangle.png" width="6.67%" style="margin-left: 153px; margin-top: 55px"/>
            <div style="width: 20px; margin-top: -347px; margin-left: 158px; font-weight: bold; font-size: 15px; color: #fff">制度化</div>
            <div style="width: 20px; margin-top: 10px; margin-left: 158px; font-weight: bold; font-size: 15px; color: #fff">规范化</div>
            <img src="./assets/TaxBureau/cutChart/k/arrow_left.png" width="9.33%" style="margin-top: -24px; margin-left: 118px"/>
            <img src="./assets/TaxBureau/cutChart/k/arrow_right.png" width="12.53%" style="margin-top: -83px; margin-left: 178px"/>
            <img src="./assets/TaxBureau/cutChart/k/part.png" width="34.4%" style="margin-top: 15px; margin-left: 10px"/>
            <img src="./assets/TaxBureau/cutChart/k/all.png" width="43.06%" style="margin-top: -260px; margin-left: 185px"/>
            <img src="./assets/TaxBureau/cutChart/k/backDown.png" width="100%" />
          </div>
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
// import wx from 'index.html'
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
        speed: 0,  //停多久开始显示800
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

    // wx.config({
    //   debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    //   appId: '', // 必填，公众号的唯一标识
    //   timestamp: 'now', // 必填，生成签名的时间戳
    //   nonceStr: 'lli', // 必填，生成签名的随机串
    //   signature: 'yangg', // 必填，签名
    //   jsApiList: [] // 必填，需要使用的JS接口列表
    // })
    // wx.ready(function () {      //需在用户可能点击分享按钮前就先调用
    //   wx.updateTimelineShareData({
    //     title: '增值税改革亮点', // 分享标题
    //     link: 'http://busih5.dayu1.net', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    //     imgUrl: './assets/TaxBureau/cutChart/a/bulb.png', // 分享图标
    //     success: function () {
    //       // 设置成功
    //       console.log(this.link)
    //     }
    //   })
    // })

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
    display: flex;
    height: 100vh;
    background-image: url("assets/TaxBureau/cutChart/a/back.png");
    background-size: 100%;
  }
.MySlider21{
  height: 100vh;
  /*background-image: url("assets/TaxBureau/cutChart/b/ball.png");*/
  background-size: 100%;
}
.MySlider2{
  height: 100vh;
  background-image: url("assets/TaxBureau/cutChart/b/backCenterText.png");
  background-size: 100%;
}
.MySlider3{
  height: 100vh;
  background-image: url("assets/TaxBureau/cutChart/c/words.png");
  background-size: 100%;
}
.MySlider4{
  height: 100vh;
  background-image: url("assets/TaxBureau/cutChart/d/back_words.png");
  background-size: 100%;
}
.MySlider5{
  height: 100vh;
  background-image: url("assets/TaxBureau/cutChart/e/back_words.png");
  background-size: 100%;
}
.MySlider6{
  height: 100vh;
  background-image: url("assets/TaxBureau/cutChart/f/back_words.png");
  background-size: 100%;
}
.MySlider7{
  height: 100vh;
  background-image: url("assets/TaxBureau/cutChart/g/back_words.png");
  background-size: 100%;
}
.MySlider8{
  height: 100vh;
  background-image: url("assets/TaxBureau/cutChart/h/back_words.png");
  background-size: 100%;
}
.MySlider9{
  height: 100vh;
  background-image: url("assets/TaxBureau/cutChart/i/back_words.png");
  background-size: 100%;
}
.MySlider10{
  height: 100vh;
  background-image: url("assets/TaxBureau/cutChart/j/back_words.png");
  background-size: 100%;
}
.MySlider11{
  height: 100vh;
  /*background-image: url("assets/TaxBureau/cutChart/k/back_words.png");*/
  background-size: 100%;
}
  .bounce{
    /*height: 100vh;*/
    /*line-height: 100%;*/
    /*background-color: red;*/
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
