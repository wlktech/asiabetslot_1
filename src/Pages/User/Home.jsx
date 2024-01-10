import React from 'react'
import '../../assets/css/user/home.css';

import Hero from '../../components/User/hero';
import BottomHeroSidebar from '../../components/User/bottomHeroSidebar';
export default function Home() {
  return (
    <div className='text-black homeBody'>
      <Hero/>
      <BottomHeroSidebar/>
    </div>
  )
}
