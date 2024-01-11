import React from 'react'

const HeroSideBar = () => {
    const sidebar=[
        {icon:<i class="fa-regular fa-envelope"></i>,title:"Messages"},
        {icon:<i class="fa-solid fa-wallet"></i>,title:"Deposit"},
        {icon:<i class="fa-solid fa-bars"></i>,title:"Menu"}
    ]
  return (
    <div className='d-none d-lg-flex flex-column heroSidebar shadow'>
     {
        sidebar.map((item)=>{
            return <>
                {item.icon}
                <p >{item.title}</p>
            </>
        })
     }
    </div>
  )
}

export default HeroSideBar
