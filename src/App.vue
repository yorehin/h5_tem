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
            <template v-if="c_index==0">
              <img class="fadeIn" src="./assets/TaxBureau/cutChart/a/backUp.png" width="100%" height="17.77%"/>
              <img class="zoomIn2" src="./assets/TaxBureau/cutChart/a/reform.png" width="95%" height="25.26%" style="display: flex;margin: -14.89% auto 0;"/>
              <img class="flash" src="./assets/TaxBureau/cutChart/a/bulb.png" width="33.33%" height="20.99%" style="display: flex; margin: 9.67% auto 0"/>
              <img src="./assets/TaxBureau/cutChart/a/propaganda.png" width="38.13%" height="7.42%" style="display: flex; margin: 14.47% auto 0"/>
              <img class="bounceInLeft" src="./assets/TaxBureau/cutChart/a/person.png" width="27.87%" height="34.18%" style="position: absolute; bottom: 0"/>
            </template>
          </div>
        </section>
      </swiper-slide>
      <swiper-slide>
        <section  class="MySlider21">
          <div style="height:100vh; display: flex;flex-direction: column;">
            <template v-if="c_index==1" >
              <img class="slideInDown" src="./assets/TaxBureau/cutChart/b/backUp.png" width="100%" height="17.77%"/>
              <img class="fadeIn" src="./assets/TaxBureau/cutChart/b/ball.png" style="height: 40.18%; width: 71.87%; margin: 24.28% 0 0 18%"/>
              <img class="bounceInLeft" src="./assets/TaxBureau/cutChart/b/person.png" width="27.87%" height="34.18%"  style="z-index:1; position: absolute; bottom: 0"/>
              <div style="flex:1;" >&nbsp;</div>
              <img class="slideInUp" src="./assets/TaxBureau/cutChart/b/backDown.png" width="100%" height="8.62%" style="margin-bottom: 0px"/>
            </template>
          </div>
        </section>
      </swiper-slide>

      <!--<swiper-slide>-->
        <!--<section  class="MySlider21">-->
          <!--<div style="height:100vh; display: flex;flex-direction: column;">-->
            <!--<template v-if="c_index==1" >-->
              <!--<img class="slideInDown" src="./assets/TaxBureau/cutChart/b/backUp.png" width="100%"/>-->
              <!--<img class="fadeIn" src="./assets/TaxBureau/cutChart/b/ball.png" width="71.73%" style="margin: 24.28% 0 0 18%"/>-->
              <!--<img class="bounceInLeft" src="./assets/TaxBureau/cutChart/b/person.png" width="27.87%" height="34.18%"  style="z-index:1; position: absolute; bottom: 0"/>-->
              <!--<div style="flex:1;" >&nbsp;</div>-->
              <!--<img class="slideInUp" src="./assets/TaxBureau/cutChart/b/backDown.png" width="100%" height="8.62%" style="margin-bottom: 0px"/>-->
            <!--</template>-->
          <!--</div>-->
        <!--</section>-->
      <!--</swiper-slide>-->

      <swiper-slide>
        <section  class="MySlider2">
          <div  style="height:100vh; display: flex;flex-direction: column;">
            <template v-if="c_index==2">
              <img class="slideInDown" src="./assets/TaxBureau/cutChart/b/backUp.png" width="100%" height="17.77%"/>
              <img src="./assets/TaxBureau/cutChart/b/icon1.png" width="5.6%" height="4.5%" style="position: absolute; left: 33%; top: 42%"/>
              <img class="pulse" src="./assets/TaxBureau/cutChart/b/icon2.png" width="6.66%" height="3.75%" style="position: absolute; left: 33%; top: 53%"/>
              <img src="./assets/TaxBureau/cutChart/b/icon3.png" width="8%" height="4.1%" style="position: absolute; left: 33%; top: 63%"/>
              <img class="bounceInLeft" src="./assets/TaxBureau/cutChart/b/person.png" width="27.87%" height="34.18%"  style="z-index:1; position: absolute; bottom: 0"/>
              <div style="flex:1;" >&nbsp;</div>
              <img class="slideInUp" src="./assets/TaxBureau/cutChart/b/backDown.png" width="100%" height="8.62%" style="margin-bottom: 0px"/>
            </template>
          </div>
        </section>
      </swiper-slide>
      <!--<swiper-slide>-->
        <!--<section  class="MySlider3">-->
          <!--<div style="height:100vh; display: flex;flex-direction: column;">-->
            <!--<template v-if="c_index==3">-->
              <!--<img class="slideInDown" src="./assets/TaxBureau/cutChart/c/backUp.png" width="100%" height="17.77%"/>-->
              <!--<img class="shake" src="./assets/TaxBureau/cutChart/c/backBlue.png" width="40%" height="5.92%" style="position: absolute; left: 10%; top: 29%"/>-->
              <!--<div class="shake" style="position: absolute; top: 30.5%; left: 24%; font-weight: bold; font-size: 15px; color: #2d69ba">降税率</div>-->
              <!--<img class="xiaoXue" src="./assets/TaxBureau/cutChart/c/arrow.png" width="14.8%" height="5.17%" style="position: absolute; top: 52%; left: 53%;"/>-->
              <!--<img class="xiaoXue" src="./assets/TaxBureau/cutChart/c/arrow.png" width="14.8%" height="5.17%" style="position: absolute; top: 62%; left: 53%;"/>-->
              <!--<div style="flex:1;" >&nbsp;</div>-->
              <!--<img src="./assets/TaxBureau/cutChart/c/person.png" width="20.93%" height="17.92%" style="position: absolute; z-index:1; bottom: 6%; left: 65%" />-->
              <!--<img class="slideInUp" src="./assets/TaxBureau/cutChart/c/backDown.png" width="100%" height="17.39%" style="position: absolute; right: 0; bottom: 0"/>-->
            <!--</template>-->
          <!--</div>-->
        <!--</section>-->
      <!--</swiper-slide>-->
      <swiper-slide>
        <section  class="MySlider4">
          <div style="height:100vh; display: flex;flex-direction: column;">
            <template v-if="c_index==3">
              <img class="slideInDown" src="./assets/TaxBureau/cutChart/d/backUp.png" width="100%" height="17.77%"/>
              <img class="shake" src="./assets/TaxBureau/cutChart/d/back_blue.png" width="40%" height="5.92%" style="position: absolute; left: 10%; top: 29%"/>
              <div class="shake" style="position: absolute; top: 31%; left: 22%; font-weight: bold; font-size: 15px; color: #2d69ba">降扣除税</div>
              <img class="xiaoXue" src="./assets/TaxBureau/cutChart/d/arrow.png" width="14.8%" height="5.17%" style="position: absolute; left: 53%; top: 56%"/>
              <img class="slideInRight" src="./assets/TaxBureau/cutChart/d/car.png" width="40.4%" height="14.99%" style="position: absolute; left: 33%; top: 83%"/>
            </template>
          </div>
        </section>
      </swiper-slide>
      <swiper-slide>
        <section  class="MySlider5">
          <div style="height:100vh; display: flex;flex-direction: column;">
            <template v-if="c_index==4">
              <img class="slideInDown" src="./assets/TaxBureau/cutChart/e/backUp.png" width="100%" height="17.77%"/>
              <img class="shake" src="./assets/TaxBureau/cutChart/e/backBlue.png" width="56.4%" height="5.92%" style="position: absolute; left: 10%; top: 29%"/>
              <div class="shake" style="position: absolute; top: 31%; left: 20%; font-weight: bold; font-size: 15px; color: #2d69ba">同步调整出口退税率</div>
              <img class="xiaoXue" src="./assets/TaxBureau/cutChart/e/arrow.png" width="14.8%" height="5.17%" style="position: absolute; left: 53%; top: 58%"/>
              <img class="xiaoXue" src="./assets/TaxBureau/cutChart/e/arrow.png" width="14.8%" height="5.17%" style="position: absolute; left: 53%; top: 68%"/>
            </template>
          </div>
        </section>
      </swiper-slide>
      <swiper-slide>
        <section  class="MySlider6">
          <div style="display: flex;flex-direction: column; height: 100vh">
            <template v-if="c_index==5">
              <img class="slideInDown" src="./assets/TaxBureau/cutChart/f/backUp.png" width="100%" height="9.67%"/>
              <img class="shake" src="./assets/TaxBureau/cutChart/f/backBlue.png" width="56.4%" height="5.92%" style="position: absolute; left: 10%; top: 19.5%"/>
              <div class="shake" style="position: absolute; top: 21.5%; left: 22%; font-weight: bold; font-size: 15px; color: #2d69ba">同步调整出口退税率</div>
              <img src="./assets/TaxBureau/cutChart/f/red.png" width="28.8%" height="10.87%" style="position: absolute; left: 1.5%; top: 70%"/>
              <img class="xiaoXue" src="./assets/TaxBureau/cutChart/e/arrow.png" width="14.8%" height="5.17%" style="position: absolute; left: 52%; top: 33.5%"/>
              <img class="xiaoXue" src="./assets/TaxBureau/cutChart/e/arrow.png" width="14.8%" height="5.17%" style="position: absolute; left: 52%; top: 50.5%"/>
              <div style="flex: 1;">&nbsp;</div>
              <img class="slideInUp" src="./assets/TaxBureau/cutChart/f/backDown.png" width="100%" height="5.69%" style="margin-bottom: 0"/>
            </template>
          </div>
        </section>
      </swiper-slide>
      <swiper-slide>
        <section  class="MySlider7">
          <div style="height:100vh; display: flex;flex-direction: column;">
            <template v-if="c_index==6">
              <img class="slideInDown" src="./assets/TaxBureau/cutChart/g/backUp.png" width="100%" height="17.77%"/>
              <img class="shake" src="./assets/TaxBureau/cutChart/f/backBlue.png" width="68.53%" height="5.92%" style="position: absolute; left: 10.5%; top: 29%"/>
              <div class="shake" style="position: absolute; top: 31%; left: 18%; font-weight: bold; font-size: 15px; color: #2d69ba">同步调整离境退税物品退税率</div>
              <img class="xiaoXue" src="./assets/TaxBureau/cutChart/e/arrow.png" width="14.8%" height="5.17%" style="position: absolute; left: 53%; top: 51%"/>
              <img class="xiaoXue" src="./assets/TaxBureau/cutChart/e/arrow.png" width="14.8%" height="5.17%" style="position: absolute; left: 53%; top: 61%"/>
            </template>
          </div>
        </section>
      </swiper-slide>
      <swiper-slide>
        <section  class="MySlider8">
          <div style="height:100vh; display: flex;flex-direction: column;">
            <template v-if="c_index==7">
              <img class="slideInDown" src="./assets/TaxBureau/cutChart/h/backUp.png" width="100%" height="17.77%"/>
              <img class="shake" src="./assets/TaxBureau/cutChart/h/backBlue.png" width="50%" height="5.92%" style="position: absolute; left: 12.5%; top:29.5%"/>
              <div class="shake" style="position: absolute; top: 31%; left: 19%; font-weight: bold; font-size: 15px; color: #2d69ba">扩大进项税抵扣范围</div>
              <img class="slideInLeft" src="./assets/TaxBureau/cutChart/h/car.png" width="48.53%" height="15.37%" style="position: absolute; top: 75%; left: 26%"/>
              <img class="slideInDown" src="./assets/TaxBureau/cutChart/h/backOne.png" width="29.73%" style="position: absolute; top: 6%; left: 30%"/>
              <img class="slideInDown" src="./assets/TaxBureau/cutChart/h/backTwo.png" width="18.27%" style="position: absolute; top: 6%; left: 75%"/>
              <img class="zoomIn" src="./assets/TaxBureau/cutChart/h/service.png" width="32%" height="2.18%" style="position: absolute; top: 38.5%; margin-left: 23.7%"/>
              <img class="jello" src="./assets/TaxBureau/cutChart/h/line.png" width="31.73%" height="1.05%" style="position: absolute; top: 42%; margin-left: 23.5%"/>
            </template>
          </div>
        </section>
      </swiper-slide>
      <swiper-slide>
        <section  class="MySlider9">
          <div style="height:100vh; display: flex;flex-direction: column;">
            <template v-if="c_index==8">
              <img class="slideInDown" src="./assets/TaxBureau/cutChart/i/backUp.png" width="100%" height="17.77%"/>
              <img class="shake" src="./assets/TaxBureau/cutChart/i/backBlue.png" width="58.66%" height="5.92%" style="position: absolute; left: 8%; top: 29%"/>
              <div class="shake" style="position: absolute; top: 31%; left: 16%; font-weight: bold; font-size: 15px; color: #2d69ba">允许不动产进项一次抵扣</div>
              <img class="xiaoXue1" src="./assets/TaxBureau/cutChart/i/change.png" width="14.8%" height="5.17%" style="position: absolute; left: 45%; top: 57%"/>
              <img class="zoomIn1" src="./assets/TaxBureau/cutChart/i/one.png" width="29.73%" height="13.94%" style="position: absolute; left: 63%; top: 52.5%"/>
              <div style="flex:1;" >&nbsp;</div>
              <img class="slideInUp" src="./assets/TaxBureau/cutChart/i/backDown.png" width="100%" height="8.62%" style="margin-bottom: 0px"/>
            </template>
          </div>
        </section>
      </swiper-slide>
      <swiper-slide>
        <section  class="MySlider10">
          <div style="height:100vh; display: flex;flex-direction: column;">
            <template v-if="c_index==9">
              <img class="slideInDown" src="./assets/TaxBureau/cutChart/j/backUp.png" width="100%" height="17.77%"/>
              <img class="shake" src="./assets/TaxBureau/cutChart/j/backBlue.png" width="38.93%" height="5.92%" style="position: absolute; top: 29%; left: 20%"/>
              <div class="shake" style="position: absolute; top: 31%; left: 28%; font-weight: bold; font-size: 15px; color: #2d69ba">实施加计抵减</div>
              <img class="rotateIn" src="./assets/TaxBureau/cutChart/j/ride.png" width="6.93%" height="3.9%" style="position: absolute; left: 16%; top: 62%"/>
              <img class="xiaoXue" src="./assets/TaxBureau/cutChart/j/provision.png" width="16.13%" height="5.84%" style="position: absolute; left: 35%; top: 58%"/>
              <img src="./assets/TaxBureau/cutChart/j/offset.png" width="43.33%" height="8.25%" style="position: absolute; left: 53%; top: 56%"/>
            </template>
          </div>
        </section>
      </swiper-slide>
      <swiper-slide>
        <section  class="MySlider11">
          <div style="height:100vh; display: flex;flex-direction: column;">
            <template v-if="c_index==10">
              <img class="slideInDown" src="./assets/TaxBureau/cutChart/k/backUp.png" width="100%" height="17.77%"/>
              <img src="./assets/TaxBureau/cutChart/k/button.png" width="44.44%" height="6.3%" style="margin-left: 10%"/>
              <img class="shake" src="./assets/TaxBureau/cutChart/k/cloud.png" width="82.13%" height="6.37%" style="position: absolute; left: 10%; top: 28.5%"/>
              <div class="shake" style="position: absolute; top: 30.5%; left: 20%; font-weight: bold; font-size: 15px; color: #2d69ba">所有行业试行增值税留抵退税制度</div>
              <img src="./assets/TaxBureau/cutChart/k/rectangle.png" width="6.67%" height="53.9%" style="position: absolute; left: 42%; top: 37%"/>
              <div style="position: absolute; width: 20px; top: 39%; left: 43.5%; font-weight: bold; font-size: 15px; color: #fff">制度化</div>
              <div style="position: absolute; width: 20px; top: 49%; left: 43.5%; font-weight: bold; font-size: 15px; color: #fff">规范化</div>
              <img src="./assets/TaxBureau/cutChart/k/arrow_left.png" width="11.33%" height="3.97%" style="position: absolute; top: 52%; left: 30.7%"/>
              <img src="./assets/TaxBureau/cutChart/k/arrow_right.png" width="17.33%" height="4.57%" style="position: absolute; top: 40%; left: 48.5%"/>
              <img src="./assets/TaxBureau/cutChart/k/part.png" width="34.4%" height="30.28%" style="position: absolute; top: 48.5%; left: 1.5%"/>
              <img src="./assets/TaxBureau/cutChart/k/all.png" width="43.06%" height="48.95%" style="position: absolute; top: 38%; left: 54%"/>
              <div style="flex:1;" >&nbsp;</div>
              <img class="slideInUp" src="./assets/TaxBureau/cutChart/k/backDown.png" width="100%" height="18.36%" style="margin-bottom: 0px"/>
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

    dynamicLoadJs("https://res.wx.qq.com/open/js/jweixin-1.4.0.js",()=>{
      bolosev.getSign({url: encodeURIComponent(location.href.split('#')[0])}).then(res=>{
          console.log('----->>',res,wx)
          wx.config(res);
          wx.error(function(res){
            alert(JSON.stringify(res))
          });
          wx.ready(()=>{
//            alert('ready')
            //需在用户可能点击分享按钮前就先调用
            wx.onMenuShareAppMessage({
              title: '增值税改革亮点', // 分享标题
              desc: '2019年深化增值税改革亮点有哪些？一张动图让你看明白', // 分享描述
              link: 'https://busihh.dayu1.net', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
              imgUrl: 'https://busihh.dayu1.net/logo.jpg', // 分享图标
              success: function () {
                // 设置成功
//                alert("-----设置分享给朋友成功")
              }
            })
            wx.onMenuShareTimeline({
              title: '增值税改革亮点', // 分享标题
              link: 'https://busihh.dayu1.net', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
              imgUrl: 'https://busihh.dayu1.net/logo.jpg', // 分享图标
              success: function () {
                // 设置成功
//                alert("-----设置分享到朋友圈成功")
              },
              error(e) {
                alert(JSON.stringify(e))
              }
            })
          });
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
