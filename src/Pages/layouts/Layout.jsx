import React from 'react';
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import Footer from './Footer';

function Layout() {
  return (
    <>
    <Sidebar />
      <main className="main-content border-radius-lg">
        <TopBar />
        <Outlet />
        <Footer />
      </main>
    </>
  );
}

export default Layout;