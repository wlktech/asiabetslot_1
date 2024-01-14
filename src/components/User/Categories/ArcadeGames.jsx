import React from 'react'
import a1 from '../../../assets/img/categories/a1.png'
import a2 from '../../../assets/img/categories/a2.png'
import a3 from '../../../assets/img/categories/a3.png'
import a4 from '../../../assets/img/categories/a4.png'
import a5 from '../../../assets/img/categories/a5.png'
import a6 from '../../../assets/img/categories/a6.png'
import a7 from '../../../assets/img/categories/a7.png'
import a8 from '../../../assets/img/categories/a8.png'
const ArcadeGames = () => {
  const arcades=[a1,a2,a3,a4,a5,a6,a7,a8]
  return (
    <div className='px-2 px-sm-4'>
      <div className='categoryGames'>
        {arcades.map((arcade)=>{
          return <img className='categoryGame' src={arcade} />
        })}
      </div>
    </div>
  )
}

export default ArcadeGames
