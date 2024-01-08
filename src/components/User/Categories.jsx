import React from 'react'
import football from '../../assets/img/football.png'
import slots from '../../assets/img/slots.png'
import table from '../../assets/img/table.png'

const Categories = () => {
    const categories=[
        {icon:football,title:"Home"},
        {icon:slots,title:"Slots"},
        {icon:table,title:'Fishing'},
        {icon:table,title:"Casino"},
        {icon:slots,title:"Arcade"},
        {icon:football,title:'Sports'},
        {icon:table,title:'Table'},
    ]
  return (
    <div className='categories   d-lg-flex'>
      {categories.map((category)=>{
        return <div className='category'>
            <img src={category.icon} />
            <p>{category.title}</p>
        </div>

      })}
    </div>
  )
}

export default Categories
