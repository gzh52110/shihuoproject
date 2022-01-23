<template>
  <div class="swiper-size">
      <swiper :options="swiperOption">
          <swiper-slide v-for="(slide,index) in bannerImg" :key="index">
              <img :src="slide.url" alt="" srcset="" class="swiperimg">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <!-- <div class="swiper-button-prev" slot="button-prev">
          </div>
          <div class="swiper-button-next" slot="button-next">
          </div> -->
      </swiper>
  </div>
</template>

<script>
export default {
data(){
    return {
        swiperOption:{
        pagination:{
            el:".swiper-pagination"
        },
        autoplay:true,
        navigation:{
            nextEl:".swiper-button-next",
            prevEl:".swiper-button-prev",
        },
        loop:true
        },
        bannerImg:[
        {url:"http://static.shihuocdn.cn/admin/files/20210301/f545ff33a4c2fc639a11a22388e0201d.png"},
        {url:"http://static.shihuocdn.cn/admin/files/20210309/7c0bcb692fa20a487a14203c02f0b126.png"},
        {url:"http://static.shihuocdn.cn/youhuiIndex/202009/2411/dd038968156905b233879018d8415934.png"},
        ]
    }
}
}
</script>

<style scoped>
.swiperimg{
    width: 100%;
    height: 350px;
}
.swiper-size{
    margin-top: 15px;
}

.swiper-commer{
 width: 40px;
    height: 60px;
    cursor: pointer;  
    opacity:0.6 
}
</style>