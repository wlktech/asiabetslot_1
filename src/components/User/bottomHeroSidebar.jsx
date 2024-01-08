import React from 'react'

const BottomHeroSidebar = () => {
    const sidebar=[
        {icon:<i class="fa-regular fa-envelope"></i>,title:"Messages"},
        {icon:<i class="fa-solid fa-wallet"></i>,title:"Deposit"},
        {icon:<i class="fa-solid fa-bars"></i>,title:"Menu"}
    ]
  return (
    <div className='d-flex d-lg-none bottomHeroSidebar'>
      {
        sidebar.map((item)=>{
            return <div className='bottomItem'>
                {item.icon}
                <p className='text-xs'>{item.title}</p>
            </div>
        })
     }
    </div>
  )
}

export default BottomHeroSidebar
