import React, { useState } from 'react'
import '../../assets/css/user/home.css';

import HomeFooter from '../../components/User/HomeFooter';
import Hero from '../../components/User/hero';
import CategoriesAndWinner from '../../components/User/CategoriesAndWinner';
import Footer from '../../components/User/Footer';
import Platform from '../../components/User/Platform';
import SlotGames from '../../components/User/Categories/SlotGames';
import FishGames from '../../components/User/Categories/FishGames';
import CasinoGames from '../../components/User/Categories/CasinoGames';
import ArcadeGames from '../../components/User/Categories/ArcadeGames';
import SportGames from '../../components/User/Categories/SportGames';
import TableGames from '../../components/User/Categories/TableGames';
import HomePageGames from '../../components/User/Categories/HomePageGames';

export default function Home() {
  const [activeCategory,setActiveCategory]=useState('Home');
  return (
    <div className='text-black homeBody'>
      <Hero/>
      <HomeFooter/>
      {/* Remove the wrapper div if want to set sticky top 0 for categories and winner */}
      <div style={{position:'sticky'}}>
        <CategoriesAndWinner
         activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}  />
      </div>
      
      <Footer/>
      <Platform/>
    </div>
  )
}
