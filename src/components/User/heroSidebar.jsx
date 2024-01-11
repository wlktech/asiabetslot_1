import React from 'react'

const HeroSideBar = () => {
    const sidebar=[
        {icon:<i className="fa-regular fa-envelope"></i>,title:"Messages"},
        {icon:<i className="fa-solid fa-wallet"></i>,title:"Deposit"},
        {icon:<i className="fa-solid fa-bars"></i>,title:"Menu"}
    ]
  return (
    <div className='d-none d-lg-flex flex-column heroSidebar shadow'>
     {
        sidebar.map((item)=>{
            return <div key={item.title}>
                {item.icon}
                <p >{item.title}</p>
            </div>
        })
     }
    </div>
  )
}

export default HeroSideBar
