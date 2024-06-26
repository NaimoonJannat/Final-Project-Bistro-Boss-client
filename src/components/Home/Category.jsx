
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from "../../assets/home/slide1.jpg"
import slide2 from "../../assets/home/slide2.jpg"
import slide3 from "../../assets/home/slide3.jpg"
import slide4 from "../../assets/home/slide4.jpg"
import slide5 from "../../assets/home/slide5.jpg"
import Title from '../Shared/Title';

const Category = () => {
    return (
        <div>
          <Title subtitle="Order from 9 to 11"
          title="Order Now"></Title>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={slide1} alt="" />
            <h2 className='uppercase text-center text-4xl text-white -mt-12'>Salad</h2>
            </SwiperSlide>
        <SwiperSlide><img src={slide2} alt="" />
        <h2 className='uppercase text-center text-4xl text-white -mt-12'>Pizza</h2></SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" />
        <h2 className='uppercase text-center text-4xl text-white -mt-12'>Soup</h2></SwiperSlide>
        <SwiperSlide><img src={slide4} alt="" />
        <h2 className='uppercase text-center text-4xl text-white -mt-12'>Pastry</h2></SwiperSlide>
        <SwiperSlide><img src={slide5} alt="" /></SwiperSlide>
       
      </Swiper>
    </div>
    );
};

export default Category;