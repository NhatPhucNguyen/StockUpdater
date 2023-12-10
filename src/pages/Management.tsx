import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const Management = () => {
    return (
        <div className="d-flex gap-4">
            <Sidebar />
            <Outlet />
        </div>
    );
};

export default Management;
