import React from 'react'

const HomeFooter = () => {
    const footer=[
        {icon:<i className="fa-regular fa-envelope"></i>,title:"Messages"},
        {icon:<i className="fa-solid fa-wallet"></i>,title:"Deposit"},
        {icon:<i className="fa-solid fa-bars"></i>,title:"Menu"}
    ]
  return (
    <footer className='homeFooter d-flex d-lg-none justify-content-between align-items-center'>
      {footer.map((item)=>{
        return <div  key={item.title} className='footerItem'>
            {item.icon}
            <p>{item.title}</p>
        </div>
      })}
    </footer>
  )
}

export default HomeFooter
