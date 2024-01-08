import React from 'react'
import Navbar from './navbar'
import Banner from './banner'
import HeroSideBar from './heroSidebar'
// Default theme for splidejs
import '@splidejs/react-splide/css';
import Categories from './Categories';

const Hero = () => {
  return (
    <div className='hero'>
      <Navbar/>
      <Banner/>
      <HeroSideBar/>
      <Categories/>
    </div>
  )
}

export default Hero
