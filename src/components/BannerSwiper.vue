<template>
  <swiper
    :slidesPerView="3"
    :spaceBetween="30"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="item in items.slice(0, 5)" :key="item.id">
      <img :src="item.imgUrl" alt="" @click="bannerChange(item.id)">
    </swiper-slide>
  </swiper>
</template>


<script setup>
// import Swiper core and required modules 核心和所需模块(向左向右的箭头)
import {  Navigation } from 'swiper/modules'
// Import Swiper Vue.js components 滑动容器和单个滑块
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles 默认样式和导航样式
import 'swiper/css'
import 'swiper/css/navigation'

const components = {
  Swiper,
  SwiperSlide
}

const modules = [Navigation]

// 从Banner组件中获取的
const props = defineProps({
  items: {
    type: Array,
    required: true
  },
  bannerChange: {
    type: Function,
    required: true
  }
})
</script>

<style>
.swiper {
  position: absolute;
  bottom: 50px;
  left: 10%;
  width: 30%;
  padding-top: 10px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 30% !important;
  height: 100px;
  cursor: pointer;
}

.swiper .swiper-button-prev {
  position: absolute;
  left: 0;
  top: 50%;
  width: 54px;
  height: 54px;
}

.swiper .swiper-button-next {
  position: absolute;
  right: 0;
  top: 50%;
  width: 54px;
  height: 54px;
}

.swiper .swiper-button-next::after,
.swiper .swiper-button-prev::after {
  font-size: 30px;
  line-height: 0;
  width: 54px;
  height: 54px;
  background: transparent;
  border-radius: 50%;
  transition: 0.3s;
  color: rgba(255, 255, 255, 1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(20px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper .swiper-button-next:hover,
.swiper .swiper-button-prev:hover {
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3) !important;
  color: rgba(255, 255, 255, 0.8) !important;
}

.swiper-slide img {
  display: block;
  width: 100%;
}

@media (max-width: 1440px) {
  .swiper {
    position: absolute;
    bottom: 80px;
    left: 13%;
    width: 30%;
    padding-top: 10px;
    padding-bottom: 30px;
  }
}
</style>