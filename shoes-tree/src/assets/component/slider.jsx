import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "../css/slider.css"

import img1 from "../image/image.webp"
import img2 from "../image/image2.webp"
import img3 from "../image/image3.webp"
import img4 from "../image/image1.webp"
import img5 from "../image/image11.webp"
import img6 from "../image/image14.webp"
import img7 from "../image/image12.webp"
import img8 from "../image/image13.webp"



// import required modules
import {  Pagination,Navigation,Autoplay } from 'swiper/modules';

export default function slide() {
  return (
    <>
      <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination,Autoplay, Navigation]} 
        className="mySwiper">
        <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img5} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img6} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img7} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img8} alt="" /></SwiperSlide>
        {/* <SwiperSlide><img src={img1} alt="" /></SwiperSlide> */}
      </Swiper>
    </>
  );
}
