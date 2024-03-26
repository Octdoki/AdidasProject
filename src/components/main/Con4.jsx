

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';  
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import {  Navigation } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import { Con1Wrap, Con4Wrap } from './ConStyle';
import { Outlet, Link } from "react-router-dom"; 

const Con4 = () => {
    return (
        <Con1Wrap>
             <div className="inner">
                <div className="introWrap">
                <h3>아디다스 회원 전용 혜택</h3> 
                <span className="read">
                    <Link to="/customer">
                        READ MORE
                        <img src="./images/arrow.svg" alt="화살표 icon" />
                    </Link>
                </span>  
                </div>
    
                <Con4Wrap>
                    <ul>
                        <li>
                            <img src="./images/con4.avif" alt="화살표 icon" />
                            <p>
                                <h4>혜택 1. 아디다스 앱 전용 제품 </h4>
                                <span>아디다스 앱 멤버들을 위해 준비된 새로운 제품과 스타일을 가장 먼저 만나 보세요.</span>
                            </p>
                        </li>
                        <li>
                            <img src="./images/con4-1.avif" alt="화살표 icon" />
                            <p>
                                <h4>혜택 2. 아디다스 회원 첫 구매 15% 할인 </h4>
                                <span>아디다스 회원 멤버들에게만 제공되는 첫 구매 15% 할인 혜택을 만나 보세요..</span>
                            </p>
                        </li>
                    </ul>
                  
                </Con4Wrap>
             
            </div>
        </Con1Wrap>
    );
};

export default Con4;