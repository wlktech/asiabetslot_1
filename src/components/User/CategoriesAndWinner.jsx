import React from 'react'
import Categories from './Categories'
import Winner from './Winner'
import HomeHeroGames from './HomeGames'

const CategoriesAndWinner = () => {
  return (
    <div className='categoriesAndWinner'>
      <Categories/>
     <div style={{overflowY:'scroll',overflowX:'hidden'}} >
     <Winner/>
      <HomeHeroGames/>
     </div>

    </div>
  )
}

export default CategoriesAndWinner
