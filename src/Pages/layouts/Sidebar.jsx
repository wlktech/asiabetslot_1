import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/img/logo/logo.png'
import profile from '../../assets/img/team-3.jpg'

export default function Sidebar() {
  return (
    <>
        <aside
            className=" sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 bg-gradient-dark"
            id="sidenav-main"
        >
            <div className="sidenav-header">
            <i
                className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
                aria-hidden="true"
                id="iconSidenav"
            />
            <NavLink to={'/'}
                className="navbar-brand m-0"
            >
                <img
                src={logo}
                className="navbar-brand-img h-100"
                alt="main_logo"
                />
                <span className="ms-1 font-weight-bold text-white">
                77 Sports - Dashboard
                </span>
            </NavLink>
            </div>
            <hr className="horizontal light mt-0 mb-2" />
            <div
            className="collapse navbar-collapse  w-auto h-auto"
            id="sidenav-collapse-main"
            >
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink
                    className="nav-link text-white "
                    to={'/'}
                    >
                        <i className="material-icons-round opacity-10">dashboard</i>
                        <span className="sidenav-normal  ms-2  ps-1"> Dashboards </span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className="nav-link text-white"
                        to={'/profile'}
                        >
                        <img src={profile} className="avatar" />
                        <span className="nav-link-text ms-2 ps-1">Brooklyn Alice</span>
                    </NavLink>
                </li>
                <hr className="horizontal light mt-0" />
                
                <li className="nav-item mt-1">
                <h6 className="ps-4  ms-2 text-uppercase text-xs font-weight-bolder text-white">
                    User Management
                </h6>
                </li>
                <li className="nav-item">
                <a
                    data-bs-toggle="collapse"
                    href="#pagesExamples"
                    className="nav-link text-white "
                    aria-controls="pagesExamples"
                    role="button"
                    aria-expanded="false"
                >
                    <i className="material-icons-round">
                        <i className="fas fa-users"></i>
                    </i>
                    <span className="nav-link-text ms-2 ps-1">Users</span>
                </a>
                <div className="collapse" id="pagesExamples">
                    <ul className="nav ">
                        <li className="nav-item ">
                            <NavLink className="nav-link text-white " to={'/admin/admins'}>
                            <span className="sidenav-mini-icon"> <i className="fas fa-user-secret"></i> </span>
                            <span className="sidenav-normal  ms-2  ps-1"> Admins </span>
                            </NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink className="nav-link text-white " to={'/admin/masters'}>
                            <span className="sidenav-mini-icon"> <i className="fas fa-user-secret"></i> </span>
                            <span className="sidenav-normal  ms-2  ps-1"> Masters </span>
                            </NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink className="nav-link text-white " to={'/admin/agents'}>
                            <span className="sidenav-mini-icon"> <i className="fas fa-users"></i> </span>
                            <span className="sidenav-normal  ms-2  ps-1"> Agents </span>
                            </NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink className="nav-link text-white " to={'/admin/users'}>
                            <span className="sidenav-mini-icon"> <i className="fas fa-users"></i> </span>
                            <span className="sidenav-normal  ms-2  ps-1"> Users </span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                </li>
                <li className="nav-item">
                <a
                    data-bs-toggle="collapse"
                    href="#applicationsExamples"
                    className="nav-link text-white "
                    aria-controls="applicationsExamples"
                    role="button"
                    aria-expanded="false"
                >
                    <i className="fas fa-users-gear"></i>
                    <span className="nav-link-text ms-2 ps-1">Authorization</span>
                </a>
                <div className="collapse " id="applicationsExamples">
                    <ul className="nav ">
                    <li className="nav-item ">
                        <a
                        className="nav-link text-white "
                        href="./applications/crm.html"
                        >
                        <span className="sidenav-mini-icon"> C </span>
                        <span className="sidenav-normal  ms-2  ps-1"> Roles </span>
                        </a>
                    </li>
                    <li className="nav-item ">
                        <a
                        className="nav-link text-white "
                        href="./applications/kanban.html"
                        >
                        <span className="sidenav-mini-icon"> P </span>
                        <span className="sidenav-normal  ms-2  ps-1"> Permissions </span>
                        </a>
                    </li>
                    </ul>
                </div>
                </li>

                <li className="nav-item">
                    <hr className="horizontal light" />
                    <h6 className="ps-4  ms-2 text-uppercase text-xs font-weight-bolder text-white">
                        Authentication
                    </h6>
                </li>
                <li className="nav-item">
                    <a
                        className="nav-link"
                    >
                        <i className="fas fa-right-from-bracket"></i>
                        <span className="nav-link-text ms-2 ps-1">Logout</span>
                    </a>
                </li>
            </ul>
            </div>
        </aside>
    </>
  )
}
