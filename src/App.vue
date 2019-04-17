<template>
  <!--<div id="app">-->
    <!--<img src="./assets/logo.png">-->
    <!--<router-view/>-->
  <!--</div>-->
  <div class="h5Page">
    <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
      <!-- slides -->
      <swiper-slide>
        <section class="MySlider1">
          <div>
            <template v-if="c_index==0" >
              <img class="fadeIn" src="./assets/TaxBureau/cutChart/a/backUp.png" width="100%"/>
              <img class="zoomIn" src="./assets/TaxBureau/cutChart/a/reform.png" width="95%" style="display: flex;margin: -60.89% auto 0;"/>
              <img class="flash" src="./assets/TaxBureau/cutChart/a/bulb.png" width="33.33%" style="display: flex; margin: 9.67% auto 0"/>
              <img src="./assets/TaxBureau/cutChart/a/propaganda.png" width="40%" style="display: flex; margin: 14.47% auto 0"/>
              <img class="bounceInLeft" src="./assets/TaxBureau/cutChart/a/person.png" width="100vw" style="position: absolute; bottom: 0"/>
            </template>
          </div>
        </section>
      </swiper-slide>
      <swiper-slide>
        <section  class="MySlider21">
          <div style="height:100vh; display: flex;flex-direction: column;">
            <template v-if="c_index==1" >
              <img class="slideInDown" src="./assets/TaxBureau/cutChart/b/backUp.png" width="100%"/>
              <img class="fadeIn" src="./assets/TaxBureau/cutChart/b/ball.png" width="71.73%" style="margin: 24.28% 0 0 18%"/>
              <img src="./assets/TaxBureau/cutChart/b/person.png" width="100vw" style="z-index:1; position: absolute; bottom: 0"/>
              <div style="flex:1;" >&nbsp;</div>
              <img class="slideInUp" src="./assets/TaxBureau/cutChart/b/backDown.png" width="100%" style="margin-bottom: 0px"/>
            </template>
          </div>
        </section>
      </swiper-slide>
      <swiper-slide>
        <section  class="MySlider2">
          <div  style="height:100vh; display: flex;flex-direction: column;">
            <template v-if="c_index==2">
              <img class="slideInDown" src="./assets/TaxBureau/cutChart/b/backUp.png" width="100%"/>
              <img src="./assets/TaxBureau/cutChart/b/icon1.png" width="4%" style="margin-left: 33%; margin-top: 44%"/>
              <img class="pulse" src="./assets/TaxBureau/cutChart/b/icon2.png" width="4%" style="margin-left: 33%; margin-top: 13%"/>
              <img src="./assets/TaxBureau/cutChart/b/icon3.png" width="4%" style="margin-left: 33%; margin-top: 15%"/>
              <img src="./assets/TaxBureau/cutChart/b/person.png" width="100vw" style="z-index:1; position: absolute; bottom: 0"/>
              <div style="flex:1;" >&nbsp;</div>
              <img class="slideInUp" src="./assets/TaxBureau/cutChart/b/backDown.png" width="100%" style="margin-bottom: 0px"/>
            </template>
          </div>
        </section>
      </swiper-slide>
      <swiper-slide>
        <section  class="MySlider3">
          <div style="display: flex;flex-direction: column;">
            <template v-if="c_index==3">
              <img class="slideInDown" src="./assets/TaxBureau/cutChart/c/backUp.png" width="100%"/>
              <img class="shake" src="./assets/TaxBureau/cutChart/c/backBlue.png" width="40%" style="margin-left: 40px; margin-top: 74px"/>
              <div class="shake" style="margin-top: -25px; margin-left: 91px; font-weight: bold; font-size: 15px; color: #2d69ba">降税率</div>
              <img class="xiaoXue" src="./assets/TaxBureau/cutChart/c/arrow.png" width="14.8%" style="margin-top: 32%; margin-left: 53%;"/>
              <img class="xiaoXue" src="./assets/TaxBureau/cutChart/c/arrow.png" width="14.8%" style="margin-top: 8%; margin-left: 53%;"/>
              <img class="slideInUp" src="./assets/TaxBureau/cutChart/c/backDown.png" width="75%" style="margin-top: 118px; margin-left: 94px;"/>
              <img src="./assets/TaxBureau/cutChart/c/person.png" width="21.07%" style="z-index:1; margin-top: -143px; margin-left: 257px;" />
            </template>
          </div>
        </section>
      </swiper-slide>
      <swiper-slide>
        <section  class="MySlider4">
          <div style="display: flex;flex-direction: column;">
            <template v-if="c_index==4">
              <img class="slideInDown" src="./assets/TaxBureau/cutChart/d/backUp.png" width="100%"/>
              <img class="shake" src="./assets/TaxBureau/cutChart/d/back_blue.png" width="40%" style="margin-left: 40px; margin-top: 74px"/>
              <div class="shake" style="margin-top: -28px; margin-left: 85px; font-weight: bold; font-size: 15px; color: #2d69ba">降扣除税</div>
              <img class="xiaoXue" src="./assets/TaxBureau/cutChart/d/arrow.png" width="14.8%" style="margin-left: 53%; margin-top: 40%"/>
              <img class="slideInRight" src="./assets/TaxBureau/cutChart/d/car.png" width="40.4%" style="margin-left: 33%; margin-top: 39%"/>
            </template>
          </div>
        </section>
      </swiper-slide>
      <swiper-slide>
        <section  class="MySlider5">
          <div style="display: flex;flex-direction: column;">
            <template v-if="c_index==5">
              <img class="slideInDown" src="./assets/TaxBureau/cutChart/e/backUp.png" width="100%"/>
              <img class="shake" src="./assets/TaxBureau/cutChart/e/backBlue.png" width="56.4%" style="margin-left: 40px; margin-top: 74px"/>
              <div class="shake" style="margin-top: -28px; margin-left: 85px; font-weight: bold; font-size: 15px; color: #2d69ba">同步调整出口退税率</div>
              <img class="xiaoXue" src="./assets/TaxBureau/cutChart/e/arrow.png"  width="14.8%" style="margin-left: 53%; margin-top: 45%"/>
              <img class="xiaoXue" src="./assets/TaxBureau/cutChart/e/arrow.png"  width="14.8%" style="margin-left: 53%; margin-top: 8%"/>
            </template>
          </div>
        </section>
      </swiper-slide>
      <swiper-slide>
        <section  class="MySlider6">
          <div style="display: flex;flex-direction: column; height: 100vh">
            <template v-if="c_index==6">
              <img class="slideInDown" src="./assets/TaxBureau/cutChart/f/backUp.png" width="100%"/>
              <img class="shake" src="./assets/TaxBureau/cutChart/f/backBlue.png" width="56.4%" style="margin-left: 40px; margin-top: 74px"/>
              <div class="shake" style="margin-top: -28px; margin-left: 85px; font-weight: bold; font-size: 15px; color: #2d69ba">同步调整出口退税率</div>
              <img src="./assets/TaxBureau/cutChart/f/red.png" width="28.8%" style="margin-left: 1.5%; margin-top: 79.9%"/>
              <img class="xiaoXue" src="./assets/TaxBureau/cutChart/e/arrow.png"  width="14.8%" style="margin-left: 52%; margin-top: -83%"/>
              <img class="xiaoXue" src="./assets/TaxBureau/cutChart/e/arrow.png"  width="14.8%" style="margin-left: 52%; margin-top: 21%"/>
              <div style="flex: 1;">&nbsp;</div>
              <img class="slideInUp" src="./assets/TaxBureau/cutChart/f/backDown.png" width="100%" style="margin-bottom: 0"/>
            </template>
          </div>
        </section>
      </swiper-slide>
      <swiper-slide>
        <section  class="MySlider7">
          <div style="display: flex;flex-direction: column;">
            <template v-if="c_index==7">
              <img class="slideInDown" src="./assets/TaxBureau/cutChart/g/backUp.png" width="100%"/>
              <img class="shake" src="./assets/TaxBureau/cutChart/f/backBlue.png" width="68.67%" style="margin-left: 40px; margin-top: 70px"/>
              <div class="shake" style="margin-top: -31px; margin-left: 69px; font-weight: bold; font-size: 15px; color: #2d69ba">同步调整离境退税物品退税率</div>
              <img class="xiaoXue" src="./assets/TaxBureau/cutChart/e/arrow.png" width="14.8%" style="margin-left: 53%; margin-top: 31%"/>
              <img class="xiaoXue" src="./assets/TaxBureau/cutChart/e/arrow.png" width="14.8%" style="margin-left: 53%; margin-top: 8%"/>
            </template>
          </div>
        </section>
      </swiper-slide>
      <swiper-slide>
        <section  class="MySlider8">
          <div style="display: flex;flex-direction: column;">
            <template v-if="c_index==8">
              <img class="slideInDown" src="./assets/TaxBureau/cutChart/h/backUp.png" width="100%"/>
              <img class="shake" src="./assets/TaxBureau/cutChart/h/backBlue.png" width="50%" style="margin-left: 47px; margin-top: 74px"/>
              <div class="shake" style="margin-top: -27px; margin-left: 75px; font-weight: bold; font-size: 15px; color: #2d69ba">扩大进项税抵扣范围</div>
              <img class="slideInLeft" src="./assets/TaxBureau/cutChart/h/car.png" width="46.4%" style="margin: 76% auto 0"/>
              <img class="slideInDown" src="./assets/TaxBureau/cutChart/h/backOne.png" width="29.73%" style="margin-top: -150%; margin-left: 30%"/>
              <img class="slideInDown" src="./assets/TaxBureau/cutChart/h/backTwo.png" width="18.27%" style="margin-top: -9%; margin-left: 75%"/>
              <img class="slideInDown" src="./assets/TaxBureau/cutChart/h/backTwo.png" width="18.27%" style="margin-top: -9%; margin-left: 75%"/>
              <img class="slideInDown" src="./assets/TaxBureau/cutChart/h/backTwo.png" width="18.27%" style="margin-top: -9%; margin-left: 75%"/>
              <img class="zoomIn" src="./assets/TaxBureau/cutChart/h/service.png" width="32.4%" style="margin-top: 46.7%; margin-left: 23.7%"/>
              <img class="jello" src="./assets/TaxBureau/cutChart/h/line.png" width="32.3%" style="margin-top: 3%; margin-left: 23.5%"/>
            </template>
          </div>
        </section>
      </swiper-slide>
      <swiper-slide>
        <section  class="MySlider9">
          <div style="display: flex;flex-direction: column;">
            <template v-if="c_index==9">
              <img class="slideInDown" src="./assets/TaxBureau/cutChart/i/backUp.png" width="100%"/>
              <img class="shake" src="./assets/TaxBureau/cutChart/i/backBlue.png" width="56.4%" style="margin-left: 8%; margin-top: 20%"/>
              <div class="shake" style="margin-top: -7%; margin-left: 14%; font-weight: bold; font-size: 15px; color: #2d69ba">允许不动产进项一次抵扣</div>
              <img class="xiaoXue" src="./assets/TaxBureau/cutChart/i/change.png"  width="14.8%" style="margin-left: 45%; margin-top: 43%"/>
              <img class="zoomIn" src="./assets/TaxBureau/cutChart/i/one.png" width="29.73%" style="margin-left: 63%; margin-top: -17%"/>
              <div style="flex:1;" >&nbsp;</div>
              <img class="slideInUp" src="./assets/TaxBureau/cutChart/i/backDown.png" width="100%" style="margin-bottom: 0px"/>
            </template>
          </div>
        </section>
      </swiper-slide>
      <swiper-slide>
        <section  class="MySlider10">
          <div style="display: flex;flex-direction: column;">
            <template v-if="c_index==10">
              <img class="slideInDown" src="./assets/TaxBureau/cutChart/j/backUp.png" width="100%"/>
              <img class="shake" src="./assets/TaxBureau/cutChart/j/backBlue.png" width="38.93%" style="margin-top: 74px; margin-left: 77px"/>
              <div class="shake" style="margin-top: -27px; margin-left: 105px; font-weight: bold; font-size: 15px; color: #2d69ba">实施加计抵减</div>
              <img class="rotateIn" src="./assets/TaxBureau/cutChart/j/ride.png" width="8.13%" style="margin-left: 16%; margin-top: 50%"/>
              <img class="xiaoXue" src="./assets/TaxBureau/cutChart/j/provision.png" width="16.13%" style="margin-left: 35%; margin-top: -15%"/>
              <img src="./assets/TaxBureau/cutChart/j/offset.png" width="43.33%" style="margin-left: 53%; margin-top: -14%"/>
            </template>
          </div>
        </section>
      </swiper-slide>
      <swiper-slide>
        <section  class="MySlider11">
          <div style="display: flex;flex-direction: column;">
            <template v-if="c_index==11">
              <img class="slideInDown" src="./assets/TaxBureau/cutChart/k/backUp.png" width="100%"/>
              <img src="./assets/TaxBureau/cutChart/k/button.png" width="44.53%" style="margin-left: 38px"/>
              <img class="shake" src="./assets/TaxBureau/cutChart/k/cloud.png" width="82.13%" style="margin: 26px auto 0"/>
              <div class="shake" style="margin: -27px auto; font-weight: bold; font-size: 15px; color: #2d69ba">所有行业试行增值税留抵退税制度</div>
              <img src="./assets/TaxBureau/cutChart/k/rectangle.png" width="6.67%" style="margin-left: 40%; margin-top: 14%"/>
              <div style="width: 20px; margin-top: -90%; margin-left: 41.5%; font-weight: bold; font-size: 15px; color: #fff">制度化</div>
              <div style="width: 20px; margin-top: 10px; margin-left: 41.5%; font-weight: bold; font-size: 15px; color: #fff">规范化</div>
              <img src="./assets/TaxBureau/cutChart/k/arrow_left.png" width="9.47%" style="margin-top: -6%; margin-left: 30.7%"/>
              <img src="./assets/TaxBureau/cutChart/k/arrow_right.png" width="12.53%" style="margin-top: -22%; margin-left: 45.8%"/>
              <img src="./assets/TaxBureau/cutChart/k/part.png" width="34.4%" style="margin-top: 4%; margin-left: 1.5%"/>
              <img src="./assets/TaxBureau/cutChart/k/all.png" width="43.06%" style="margin-top: -70%; margin-left: 48%"/>
              <img class="slideInUp" src="./assets/TaxBureau/cutChart/k/backDown.png" width="100%" style="margin-top: -8%"/>
            </template>
          </div>
        </section>
      </swiper-slide>
      <!--<swiper-slide>I'm Slide 3</swiper-slide>-->
      <!--<swiper-slide>I'm Slide 4</swiper-slide>-->
      <!--<swiper-slide>I'm Slide 5</swiper-slide>-->
      <!--<swiper-slide>I'm Slide 6</swiper-slide>-->
      <!--<swiper-slide>I'm Slide 7</swiper-slide>-->
      <!-- Optional controls -->
      <!--<div class="swiper-pagination"  slot="pagination"></div>-->
      <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
      <!--<div class="swiper-button-next" slot="button-next"></div>-->
      <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import bolosev from './service/bllosev'
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
    let slide;
    let _this = this;
    return {
      c_index: 0,
      msg: 'Welcome to Your Vue.js App',
      showCss: false,
      swiperOption: {
        // loop: true,
        // animationType: linear,
        watchSlidesProgress: true,
        direction: 'vertical',
        followFinger: false,
        speed: 800, // 停多久开始显示800
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar',
          progressbarOpposite: true

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
          },
          slideChange(){
            // _this.c_index = parseInt(Math.ceil(_this.swiper.progress*10))
            _this.c_index = _this.swiper.activeIndex
            console.log(_this.c_index,_this)
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

    /**
     * 动态加载JS
     * @param {string} url 脚本地址
     * @param {function} callback  回调函数
     */
    function dynamicLoadJs(url, callback) {
      var head = document.getElementsByTagName('head')[0];
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = url;
      if(typeof(callback)=='function'){
        script.onload = script.onreadystatechange = function () {
          if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete"){
            callback();
            script.onload = script.onreadystatechange = null;
          }
        };
      }
      head.appendChild(script);
    }

    dynamicLoadJs("http://res.wx.qq.com/open/js/jweixin-1.4.0.js",()=>{
      bolosev.getSign({url:location.href}).then(res=>{
        if (res.code==0)
        {
          wx.config(res.data);
          wx.ready(()=>{
            //需在用户可能点击分享按钮前就先调用
            wx.updateAppMessageShareData({
              title: '', // 分享标题
              desc: '', // 分享描述
              link: '', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
              imgUrl: '', // 分享图标
              success: function () {
                // 设置成功
                console.log("-----设置分享给朋友成功")
              }
            })
            wx.updateTimelineShareData({
              title: '', // 分享标题
              link: '', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
              imgUrl: '', // 分享图标
              success: function () {
                // 设置成功
                console.log("-----设置分享到朋友圈成功")
              }
            })
          });
        }
        else
        {
          console.log('----->>获取微信签名失败')
          alert('获取签名失败')
        }
      })
    })

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
    background-size: 100% 100%;
  }
.MySlider21{
  height: 100vh;
  /*background-image: url("assets/TaxBureau/cutChart/b/ball.png");*/
  background-size: 100% 100%;
}
.MySlider2{
  height: 100vh;
  background-image: url("assets/TaxBureau/cutChart/b/backCenterText.png");
  background-size: 100% 100%;
}
.MySlider3{
  height: 100vh;
  background-image: url("assets/TaxBureau/cutChart/c/words.png");
  background-size: 100% 100%;
}
.MySlider4{
  height: 100vh;
  background-image: url("assets/TaxBureau/cutChart/d/back_words.png");
  background-size: 100% 100%;
}
.MySlider5{
  height: 100vh;
  background-image: url("assets/TaxBureau/cutChart/e/back_words.png");
  background-size: 100% 100%;
}
.MySlider6{
  height: 100vh;
  background-image: url("assets/TaxBureau/cutChart/f/back_words.png");
  background-size: 100% 100%;
}
.MySlider7{
  height: 100vh;
  background-image: url("assets/TaxBureau/cutChart/g/back_words.png");
  background-size: 100% 100%;
}
.MySlider8{
  height: 100vh;
  background-image: url("assets/TaxBureau/cutChart/h/back_words.png");
  background-size: 100% 100%;
}
.MySlider9{
  display: flex;
  height: 100vh;
  background-image: url("assets/TaxBureau/cutChart/i/back_words.png");
  background-size: 100% 100%;
}
.MySlider10{
  height: 100vh;
  background-image: url("assets/TaxBureau/cutChart/j/back_words.png");
  background-size: 100% 100%;
}
.MySlider11{
  height: 100vh;
  /*background-image: url("assets/TaxBureau/cutChart/k/back_words.png");*/
  background-size: 100% 100%;
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
