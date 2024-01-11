// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

import banner1 from '../../assets/img/banner1.png'
import banner2 from '../../assets/img/banner2.png'
import banner3 from '../../assets/img/banner3.png'
import banner4 from '../../assets/img/banner4.png'
import banner5 from '../../assets/img/banner5.png'
import banner6 from '../../assets/img/banner6.png'

const Banner = () => {
    const banners=[banner1,banner2,banner3,banner4,banner5,banner6]
  return (
    <Swiper
    spaceBetween={50}
    slidesPerView={1}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    pagination={true}
    modules={[Autoplay,Pagination]}
  >
    {banners.map((banner)=>{
      return <SwiperSlide className=''>
        <img  className='bannerImg  rounded-4' src={banner} alt={banner} />
      </SwiperSlide>
    })}
    
    
  </Swiper>
  )
}

export default Banner
