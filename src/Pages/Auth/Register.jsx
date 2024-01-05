import React from 'react'
import logo from '../../assets/img/logo/logo.png';
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <>
        <div
        className="page-header align-items-start min-vh-100"
        style={{
            backgroundImage:
            'url("https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80")'
        }}
        >
        <span className="mask bg-gradient-dark opacity-6" />
        <div className="container my-auto">
            <div className="row">
            <div className="col-lg-4 col-md-8 mx-auto">
                <div className="card z-index-0">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                    <div className="bg-gradient-success shadow-success border-radius-lg py-1 pe-1">
                    <Link to={'/'}>
                    <h4 className="text-white font-weight-bolder text-center mt-2 mb-0">
                        <img src={logo} width={100} height={100} alt="" />
                    </h4>
                    </Link>
                    <h4 className="text-white font-weight-bolder text-center mb-2">
                        Register
                    </h4>
                    {/* <div className="row mt-3">
                        <div className="col-2 text-center ms-auto">
                        <a className="btn btn-link px-3" href="javascript:;">
                            <i className="fa fa-facebook text-white text-lg" />
                        </a>
                        </div>
                        <div className="col-2 text-center px-1">
                        <a className="btn btn-link px-3" href="javascript:;">
                            <i className="fa fa-github text-white text-lg" />
                        </a>
                        </div>
                        <div className="col-2 text-center me-auto">
                        <a className="btn btn-link px-3" href="javascript:;">
                            <i className="fa fa-google text-white text-lg" />
                        </a>
                        </div>
                    </div> */}
                    </div>
                </div>
                <div className="row px-xl-5 px-sm-4 px-3">
                    <div className="mt-2 position-relative text-center">
                    <p className="text-sm font-weight-bold mb-2 text-secondary text-border d-inline z-index-2 bg-white px-3">
                        or
                    </p>
                    </div>
                </div>
                <div className="card-body">
                    <form role="form">
                    <div className="input-group input-group-dynamic mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" aria-label="Name" />
                    </div>
                    <div className="input-group input-group-dynamic mb-3">
                        <label className="form-label">Email</label>
                        <input
                        type="email"
                        className="form-control"
                        aria-label="Email"
                        />
                    </div>
                    <div className="input-group input-group-dynamic mb-3">
                        <label className="form-label">Password</label>
                        <input
                        type="password"
                        className="form-control"
                        aria-label="Password"
                        />
                    </div>
                    <div className="form-check text-start ps-0">
                        <input
                        className="form-check-input bg-dark border-dark"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault"
                        defaultChecked=""
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                        I agree the{" "}
                        <a
                            href="javascript:;"
                            className="text-dark font-weight-bolder"
                        >
                            Terms and Conditions
                        </a>
                        </label>
                    </div>
                    <div className="text-center">
                        <button
                        type="button"
                        className="btn bg-gradient-dark w-100 my-4 mb-2"
                        >
                        Sign up
                        </button>
                    </div>
                    <p className="text-sm mt-3 mb-0">
                        Already have an account?{" "}
                        <Link to={'/login'} className="text-dark font-weight-bolder">
                        Sign in
                        </Link>
                    </p>
                    </form>
                </div>
                </div>
            </div>
            </div>
        </div>
        <footer className="footer position-absolute bottom-2 py-2 w-100">
            <div className="container">
            <div className="row align-items-center justify-content-lg-between">
                <div className="col-12 col-md-6 my-auto">
                <div className="copyright text-center text-sm text-white text-lg-start">
                    © , made with <i className="fa fa-heart" aria-hidden="true" /> by
                    <a
                    href="https://www.creative-tim.com"
                    className="font-weight-bold text-white"
                    target="_blank"
                    >
                    Creative Tim
                    </a>
                    for a better web.
                </div>
                </div>
                <div className="col-12 col-md-6">
                <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                    <li className="nav-item">
                    <a
                        href="https://www.creative-tim.com"
                        className="nav-link text-white"
                        target="_blank"
                    >
                        Creative Tim
                    </a>
                    </li>
                    <li className="nav-item">
                    <a
                        href="https://www.creative-tim.com/presentation"
                        className="nav-link text-white"
                        target="_blank"
                    >
                        About Us
                    </a>
                    </li>
                    <li className="nav-item">
                    <a
                        href="https://www.creative-tim.com/blog"
                        className="nav-link text-white"
                        target="_blank"
                    >
                        Blog
                    </a>
                    </li>
                    <li className="nav-item">
                    <a
                        href="https://www.creative-tim.com/license"
                        className="nav-link pe-0 text-white"
                        target="_blank"
                    >
                        License
                    </a>
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </footer>
        </div>
 
    </>
  )
}
