import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/swiper-bundle.min.css'
import "swiper/swiper.min.css";
// Import Swiper styles
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import {Data} from "./data.jsx";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export default function App() {
  return (
    // <Box sx={{width:"1200px", justifyContent:"center"}}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
      {Data.map((data, idx) => (
        <SwiperSlide key={idx}>
        <img src={data.image}  alt="banner" />
        </SwiperSlide>
      ))}
      </Swiper>
    // </Box>
  );
}
