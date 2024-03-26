
// import { Swiper } from "../../styled/swiperStyle";
import { MainWrap, VisualWrap } from "./MainStyle";
import { Swiper, SwiperSlide } from 'swiper/react';  
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import CartList from "../../components/cart/CartList";
import ProductItem from "../../components/product/ProductItem";
import Product from "../product/Product";
import Customer from "../customer/Customer";
import CustomerLIst from "../../components/customer/CustomerLIst";
import Content1 from "../../components/main2/Content1";
import Con1 from "../../components/main/Con1";
import Con2 from "../../components/main/Con2";
import Con3 from "../../components/main/Con3";
import Con4 from "../../components/main/con4";

const Main = () => {
    return (
        <>
    
            <VisualWrap>
          
            <Swiper
                modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                >
                <SwiperSlide><img src="./images/visual1.jpg" alt="visual1" /> </SwiperSlide>
                <SwiperSlide><img src="./images/visual2.avif" alt="visual2" /></SwiperSlide>
                <SwiperSlide><img src="./images/visual3.gif" alt="visual3" /></SwiperSlide>
                <SwiperSlide><img src="./images/visual4.gif" alt="visual4" /></SwiperSlide>
            </Swiper>
            </VisualWrap>
            <MainWrap className="main">
            
                {/* <Content1 /> */}
          <Con1 />
          <Con2 />
          <Con3 />
          <Con4 />
                {/* <CustomerLIst/> */}
            </MainWrap>
         
        </>
    );
};

export default Main;