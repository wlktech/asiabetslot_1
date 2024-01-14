import React from 'react'
import f1 from '../../../assets/img/categories/f1.png'
import f2 from '../../../assets/img/categories/f2.png'
import f3 from '../../../assets/img/categories/f3.png'
import f4 from '../../../assets/img/categories/f4.png'
import f5 from '../../../assets/img/categories/f5.png'
import f6 from '../../../assets/img/categories/f6.png'
import f7 from '../../../assets/img/categories/f7.png'
import f8 from '../../../assets/img/categories/f8.png'
const FishGames = () => {
  const fishes=[f1,f2,f3,f4,f5,f6,f7,f8]
  return (
    <div className='px-2 px-sm-4'>
      <div className='categoryGames'>
        {fishes.map((fish)=>{
          return <img className='categoryGame' src={fish} />
        })}
      </div>
    </div>
  )
}

export default FishGames
