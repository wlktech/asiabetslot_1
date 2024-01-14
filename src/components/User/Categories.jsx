import React from 'react'
import home from '../../assets/img/home.png'
import slot from '../../assets/img/slot.png'
import fish from '../../assets/img/fish.png'
import casino from '../../assets/img/casino.png'
import arcade from '../../assets/img/arcade.png'
import sport from '../../assets/img/sport.png'
import table from '../../assets/img/table.png'

const Categories = ({activeCategory,setActiveCategory}) => {
    const categories=[
        {title:'Home',img:home},
        {title:'Slots',img:slot},
        {title:'Fishing',img:fish},
        {title:'Casino',img:casino},
        {title:'Arcade',img:arcade},
        {title:'Sports',img:sport},
        {title:'Table',img:table}
    ]
  return (
    <div className='categories gap-3 d-flex align-items-center justify-content-center'>
      {categories.map((item)=>{
        return <div onClick={()=>setActiveCategory(item.title)} className='category '>
            <img className='categoryImg' src={item.img} />
            <p className='font-weight-bold'>{item.title}</p>
        </div>
      })}
    </div>
  )
}

export default Categories
