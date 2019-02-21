<template>
    <div>
       <div class="swiper-container" ref="swiperWrapper">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in bannerImgs">
              <img :src="item.PicUrl">
            </div>
          </div>
          
          <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
import Swiper from "swiper";
import "../../../node_modules/swiper/dist/css/swiper.min.css";
export default {
    props:{
        bannerImgs:Array
    },
    mounted() {
	    new Swiper(this.$refs.swiperWrapper,{
	      autoplay:true,
	      loop:true
	    })
   		console.log(this.$refs.swiperWrapper);
  },
}
</script>


<style>
    .swiper-container{
        width: 100%;
    }
    img{
    	width: 100%;
    }
</style>