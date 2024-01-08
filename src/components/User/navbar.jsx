import React from 'react'
import '../../assets/css/navbar.css'
import m9Logo from  '../../assets/img/m9.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img  className='logo' src={m9Logo} />
      <button className="loginBtn">
        Login
      </button>
    </div>
  )
}

export default Navbar
