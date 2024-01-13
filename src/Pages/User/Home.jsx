import React from 'react'
import '../../assets/css/user/home.css';

import HomeFooter from '../../components/User/HomeFooter';
import Hero from '../../components/User/hero';
import CategoriesAndWinner from '../../components/User/CategoriesAndWinner';
import HomeGames from '../../components/User/HomeGames';
import HomePageGames from '../../components/User/HomePageGames';
import Footer from '../../components/User/Footer';
import Platform from '../../components/User/Platform';

export default function Home() {
  return (
    <div className='text-black homeBody'>
      <Hero/>
      <HomeFooter/>
      {/* Remove the wrapper div if want to set sticky top 0 for categories and winner */}
      <div style={{position:'sticky'}}>
        <CategoriesAndWinner/>
      </div>
      <HomePageGames/>
      <Footer/>
      <Platform/>
    </div>
  )
}
