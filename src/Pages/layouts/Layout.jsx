import React, { useState } from 'react';
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import Footer from './Footer';

function Layout() {
  const [isSidebarOpen,setIsSidebarOpen]=useState(true);
  return (
    <>
     <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} /> 
      <main style={{marginLeft:'80px'}} className=" main-content border-radius-lg">
        <TopBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        <Outlet />
        <Footer />
      </main>
    </>
  );
}

export default Layout;