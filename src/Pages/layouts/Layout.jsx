import React, { useState } from 'react';
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import Footer from './Footer';
import '../../index.css'
function Layout() {
  const [isSidebarOpen,setIsSidebarOpen]=useState(false);
  return (
    <>
      <main  className=" main-content border-radius-lg">
        <div>
        <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} /> 
        </div>
        <div style={{width:'100%'}}>
        <TopBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        <Outlet />
        <Footer />
        </div>
      </main>
    </>
  );
}

export default Layout;