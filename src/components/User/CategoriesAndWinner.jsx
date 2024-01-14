import React from 'react'
import Categories from './Categories'
import Winner from './Winner'
import HomeHeroGames from './Categories/HomeHeroGames'
import HomePageGames from './Categories/HomePageGames'
import SlotGames from './Categories/SlotGames'
import FishGames from './Categories/FishGames'
import CasinoGames from './Categories/CasinoGames'
import ArcadeGames from './Categories/ArcadeGames'
import SportGames from './Categories/SportGames'
import TableGames from './Categories/TableGames'
const CategoriesAndWinner = ({activeCategory,setActiveCategory}) => {
  
  return (
    <div className='categoriesAndWinner'>
      <Categories 
      activeCategory={activeCategory}
      setActiveCategory={setActiveCategory} 
      />
     <div style={{overflowY:'scroll',overflowX:'hidden'}} >
     <Winner/>
     {/* This is only visible when active categories is Home */}
      {activeCategory==='Home' && <HomeHeroGames/> }
      {activeCategory==='Home' && <HomePageGames/> }
      {activeCategory==='Slots' && <SlotGames/> }
      {activeCategory==='Fishing' && <FishGames/> }
      {activeCategory==='Casino' && <CasinoGames/> }
      {activeCategory==='Arcade' && <ArcadeGames/> }
      {activeCategory==='Sports' && <SportGames/> }
      {activeCategory==='Table' && <TableGames/> }
     </div>

    </div>
  )
}

export default CategoriesAndWinner
