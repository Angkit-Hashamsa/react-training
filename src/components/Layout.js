import React from "react";
import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="w-[90vw] mx-auto ">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
