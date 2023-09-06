import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import image1 from "../image/images__1.jpeg"
import image2 from "../image/images__2.jpg"
import image3 from "../image/images__3.jpg"
import image4 from "../image/images__4.jpeg"
import './slaider.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Slider = () => {
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                spaceBetween={50}
                slidesPerView={2}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide><img  className="slider__image" src={image1} alt=""/></SwiperSlide>
                <SwiperSlide><img  className="slider__image" src={image2} alt=""/></SwiperSlide>
                <SwiperSlide><img className="slider__image"  src={image3} alt=""/></SwiperSlide>
                <SwiperSlide><img  className="slider__image" src={image4} alt=""/></SwiperSlide>
            </Swiper>
            <h1>Чем умнее человек, тем легче он признает себя дураком</h1>

        </div>
    );
};

export default Slider;