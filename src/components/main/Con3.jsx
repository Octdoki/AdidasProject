import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';  
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import {  Navigation } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import { Con1Wrap } from './ConStyle';
import { Outlet, Link } from "react-router-dom"; 
const Con3 = () => {
    return (
        <Con1Wrap>
            <div className="inner">
                <div className="introWrap">
                <h3>Adidas Community </h3> 
                <span className="read">
                    <Link to="/notice">
                        READ MORE
                        <img src="./images/arrow.svg" alt="화살표 icon" />
                    </Link>
                </span>  
                </div>
    
                <div className='cart-box '>
        
                    <Swiper     modules={[Autoplay,Navigation]}
                            spaceBetween={20}
                            slidesPerView={4}
                            autoplay={{ delay: 4000, disableOnInteraction: false }}
                            loop={true}
                            navigation={true} className="con3Swiper">
                        <SwiperSlide><img src="./images/con3-1.jpg" alt="visual1" /> </SwiperSlide>
                        <SwiperSlide><img src="./images/con3-2.jpg" alt="visual1" /> </SwiperSlide>
                        <SwiperSlide><img src="./images/con3-3.jpg" alt="visual1" /> </SwiperSlide>
                        <SwiperSlide><img src="./images/con3-4.jpg" alt="visual1" /> </SwiperSlide>
                        <SwiperSlide><img src="./images/con3-5.jpg" alt="visual1" /> </SwiperSlide>
                    </Swiper>
                </div>
             
            </div>
        </Con1Wrap>
    );
};

export default Con3;