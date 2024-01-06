import React from 'react'
import {  NavLink } from 'react-router-dom'
import logo from '../../assets/img/logo/logo.png'
import profile from '../../assets/img/team-3.jpg'
import './sidebar.css'
export default function Sidebar({isSidebarOpen,setIsSidebarOpen}) {
  return (
    <>
   <div className="wrapper">
   <aside className={isSidebarOpen ? 'expand' : ''} id="sidebar">
           <NavLink to={'/'}>
            <div className='nav-header' >
                <img src={logo} className='logo' />
                    <div className={isSidebarOpen ? '' : 'd-none'} style={{fontWeight:'600',fontSize:'16px'}}>
                        77 Sports - Dashboards 
                        </div>

                </div>
           </NavLink>
            <ul class="sidebar-nav">
                <li class="sidebar-item">
                    <a href="#" class="sidebar-link">
                    <NavLink
                    className="nav-link text-white "
                    to={'/'}
                    >
                        <i className="material-icons-round opacity-10">dashboard</i>
                        <span className="sidenav-normal  ms-2  ps-1"> Dashboards </span>
                    </NavLink>
                   
                    </a>
                </li>
                <li class="sidebar-item">
                    <a href="#" class="sidebar-link">
                    <NavLink
                    className="nav-link text-white "
                    to={'/profile'}
                    >
                        <img className='profile' src={profile} />
                        <span className="sidenav-normal  ms-2  ps-1"> Profile </span>
                    </NavLink>
                   
                    </a>
                </li>
                <hr className="horizontal  mt-0 mb-2" />

                <li class="sidebar-item text-white">
                    <a href="#" class="sidebar-link collapsed has-dropdown" data-bs-toggle="collapse"
                        data-bs-target="#users" aria-expanded="false" aria-controls="auth">
                        <i className="fas fa-users"></i>
                        <span>Users</span>
                    </a>
                    <ul id="users" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                        <li class="sidebar-item">
                                <a href="#" class="sidebar-link">
                            <NavLink
                            className="nav-link text-white "
                            to={'/admin/admins'}
                            >
                                <i className="fas fa-user-secret"></i>
                                <span className="sidenav-normal  ms-2  ps-1"> Admin </span>
                            </NavLink>
                        
                            </a>
                        </li>
                        <li class="sidebar-item">
                                <a href="#" class="sidebar-link">
                            <NavLink
                            className="nav-link text-white "
                            to={'/admin/masters'}
                            >
                               <i className="fas fa-user-secret"></i>
                                <span className="sidenav-normal  ms-2  ps-1"> Master </span>
                            </NavLink>
                        
                            </a>
                        </li>
                        <li class="sidebar-item">
                                <a href="#" class="sidebar-link">
                            <NavLink
                            className="nav-link text-white "
                            to={'/admin/agents'}
                            >
                                <i className="fas fa-users"></i>
                                <span className="sidenav-normal  ms-2  ps-1"> Agent </span>
                            </NavLink>
                        
                            </a>
                        </li>
                        <li class="sidebar-item">
                                <a href="#" class="sidebar-link">
                            <NavLink
                            className="nav-link text-white "
                            to={'/admin/users'}
                            >
                               <i className="fas fa-users"></i>
                                <span className="sidenav-normal  ms-2  ps-1"> Users </span>
                            </NavLink>
                        
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="sidebar-item">
                    <a href="#" class="sidebar-link collapsed has-dropdown" data-bs-toggle="collapse"
                        data-bs-target="#auth" aria-expanded="false" aria-controls="auth">
                         <i className="fas fa-users-gear"></i>
                        <span>Autorization</span>
                    </a>
                    <ul id="auth" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                    <li class="sidebar-item">
                                <a href="#" class="sidebar-link">
                            <NavLink
                            className="nav-link text-white "
                            to={'/'}
                            >
                              <span className="sidenav-mini-icon"> C </span>
                                <span className="sidenav-normal  ms-2  ps-1"> Roles </span>
                            </NavLink>
                        
                            </a>
                        </li>
                        <li class="sidebar-item">
                                <a href="#" class="sidebar-link">
                            <NavLink
                            className="nav-link text-white "
                            to={'/'}
                            >
                              <span className="sidenav-mini-icon"> P </span>
                                <span className="sidenav-normal  ms-2  ps-1"> Permissions </span>
                            </NavLink>
                        
                            </a>
                        </li>
                    </ul>
                </li>
               
            </ul>
            <div class="sidebar-footer">
            <p  className={`${isSidebarOpen ? '' : 'd-none'}  ps-4 text-uppercase text-lg ms-2 font-weight-bolder text-white `} >
                Authentication
            </p>
                <a href="#" class="sidebar-link">
               
                <i className="fas fa-right-from-bracket"></i>
                    <span>Logout</span>
                </a>
            </div>
        </aside>
   </div>
    
    </>
  )
}
