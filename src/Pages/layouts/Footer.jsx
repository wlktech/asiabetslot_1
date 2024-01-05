import React from 'react'

export default function Footer() {
  return (
    <>
        <footer className="footer py-4">
            <div className="container-fluid">
                <div className="row align-items-center justify-content-lg-between">
                    <div className="col-lg-6 mb-lg-0 mb-4">
                        <div className="copyright text-center text-sm text-muted text-lg-start">
                            ©Copyright 2024 by 
                            <a
                                href="https://delightmyanmar.pro/"
                                className="font-weight-bold ms-2"
                                target="_blank"
                            >
                                Delight Myanmar
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>  
    </>
  )
}
