import React from 'react'
import '../../assets/css/user/home.css';

import HomeFooter from '../../components/User/HomeFooter';
import Hero from '../../components/User/hero';
import CategoriesAndWinner from '../../components/User/CategoriesAndWinner';

export default function Home() {
  return (
    <div className='text-black homeBody'>
      <Hero/>
      <HomeFooter/>
      <CategoriesAndWinner/>
    </div>
  )
}
