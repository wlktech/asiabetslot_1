import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import banner1 from '../../assets/img/banner1.png'
import banner2 from '../../assets/img/banner2.png'
import banner3 from '../../assets/img/banner3.png'
import banner4 from '../../assets/img/banner4.png'
import banner5 from '../../assets/img/banner5.png'
import banner6 from '../../assets/img/banner6.png'

const Banner = () => {
    const banners=[banner1,banner2,banner3,banner4,banner5,banner6]
  return (
    <div>
      <Splide  aria-label="My Favorite Images">
    {banners.map((banner)=>{
        return  <SplideSlide>
        <img className='bannerImg' src={banner} alt={banner}/>
      </SplideSlide>
    })}
  
</Splide>
    </div>
  )
}

export default Banner
