<template>
  <div>
    <div class="swiper-wrapper">
      <div class="swiper-slide swiper-slide-active ani-slide" style="height: 300px">
        <p>这里放一张图片1！</p>
      </div>
      <div class="swiper-slide swiper-slide-next" style="height: 300px">
        <p>这里放一张图片2！</p>
      </div>
      <div class="swiper-slide" style="height: 300px">
        <p>这里放一张图片3！</p>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'test'
  }
</script>
<style scoped>



  body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color:#000;
    margin: 0;
    padding: 0;
  }
  .swiper-wrapper{
    transition-delay:.3s;
  }
  .swiper-container {
    width: 500px;
    height: 300px;
    margin: 20px auto;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .swiper-slide:nth-child(2){
    background:#3183ff;
    color:#fff;}
  .swiper-slide p{
    transform:translateX(-200px);
    opacity:0;
    transition:all .4s;}
  .ani-slide p{
    transform:translateX(0);
    opacity:1;
  }



</style>
