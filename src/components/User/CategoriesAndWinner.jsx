import React from 'react'
import Categories from './Categories'
import Winner from './Winner'
import HomeGames from './HomeGames'

const CategoriesAndWinner = () => {
  return (
    <div className='categoriesAndWinner'>
      <Categories/>
     <div style={{overflowY:'scroll',overflowX:'hidden'}} className='mb-20 mb-sm-10'>
     <Winner/>
      <HomeGames/>
     </div>

    </div>
  )
}

export default CategoriesAndWinner
