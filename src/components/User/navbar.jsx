import React from 'react'
import '../../assets/css/navbar.css'
import logo from  '../../assets/img/logo.png'

const Navbar = () => {
  return (
    <div className='navbar d-flex justify-content-between justify-content-lg-center'>
      <img  className='logo ' src={logo} />
      <button className="loginBtn">
        Login
      </button>
    </div>
  )
}

export default Navbar
