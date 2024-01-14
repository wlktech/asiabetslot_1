import React from 'react'
import t1 from '../../../assets/img/categories/t1.png'
import t2 from '../../../assets/img/categories/t2.png'
import t3 from '../../../assets/img/categories/t3.png'
import t4 from '../../../assets/img/categories/t4.png'
import t5 from '../../../assets/img/categories/t5.png'
import t6 from '../../../assets/img/categories/t6.png'
import t7 from '../../../assets/img/categories/t7.png'
import t8 from '../../../assets/img/categories/t8.png'
const TableGames = () => {
  const tables=[t1,t2,t3,t4,t5,t6,t7,t8];
  return (
    <div className='px-2 px-sm-4'>
      <div className='categoryGames'>
        {tables.map((table)=>{
          return <img className='categoryGame' src={table} />
        })}
      </div>
    </div>
  )
}

export default TableGames
