import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/swiper-bundle.min.css'
import "swiper/swiper.min.css";
// Import Swiper styles
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import Img from "../../assets/unsplash_CiUR8zISX60.png";
import logo from "../../logo.svg";
// import styles from "./styles.module.css";
import Box from '@mui/material/Box';

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
        <SwiperSlide>
        <img src={Img}  alt="banner" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={Img}  alt="banner" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={Img}  alt="banner" />
        </SwiperSlide>
      </Swiper>
    // </Box>
  );
}
