import React from 'react'

const HomeFooter = () => {
    const footer=[
        {icon:<i class="fa-regular fa-envelope"></i>,title:"Messages"},
        {icon:<i class="fa-solid fa-wallet"></i>,title:"Deposit"},
        {icon:<i class="fa-solid fa-bars"></i>,title:"Menu"}
    ]
  return (
    <footer className='homeFooter d-flex d-lg-none justify-content-between align-items-center'>
      {footer.map((item)=>{
        return <div className='footerItem'>
            {item.icon}
            <p>{item.title}</p>
        </div>
      })}
    </footer>
  )
}

export default HomeFooter
