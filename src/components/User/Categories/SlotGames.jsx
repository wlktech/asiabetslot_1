import React from 'react'
import s1 from '../../../assets/img/categories/s1.png'
import s2 from '../../../assets/img/categories/s2.png'
import s3 from '../../../assets/img/categories/s3.png'
import s4 from '../../../assets/img/categories/s4.png'
import s5 from '../../../assets/img/categories/s5.png'
import s6 from '../../../assets/img/categories/s6.png'
import s7 from '../../../assets/img/categories/s7.png'
import s8 from '../../../assets/img/categories/s8.png'
import s9 from '../../../assets/img/categories/s9.png'

const SlotGames = () => {
  const slots=[s1,s2,s3,s4,s5,s6,s7,s8,s9];
  return (
    <div className='px-2 px-sm-4'>
      <div className='categoryGames'>
        {slots.map((slot)=>{
          return <img className='categoryGame' src={slot} />
        })}
      </div>
    </div>
  )
}

export default SlotGames
