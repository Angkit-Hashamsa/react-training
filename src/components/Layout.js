import React from "react";
import Navbar from "./navbar";
import { Outlet, Navigate } from "react-router-dom";
const Layout = () => {
    const isUSer = localStorage.getItem("user");

    if (!isUSer) {
        return <Navigate to="/login" />;
    }

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
