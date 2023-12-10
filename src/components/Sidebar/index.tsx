import React, { MouseEvent } from "react";

const Sidebar = () => {
    const absolutePath = window.location.pathname.split("/").slice(-1).join();
    return (
        <div
            className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
            style={{ width: "288px", minHeight: "100vh" }}
        >
            <a className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <svg className="bi me-2" width="40" height="32"></svg>
                <span className="fs-4">StockUpdater</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li>
                    <a href="/dashboard" className={`nav-link text-white ${absolutePath.includes("dashboard") && "active"}`}>
                        <svg className="bi me-2" width="16" height="16"></svg>
                        Dashboard
                    </a>
                </li>
                <li>
                    <a href="/dashboard/products" className={`nav-link text-white ${absolutePath.includes("products") && "active"}`}>
                        <svg className="bi me-2" width="16" height="16"></svg>
                        Products
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link text-white">
                        <svg className="bi me-2" width="16" height="16"></svg>
                        Orders
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link text-white">
                        <svg className="bi me-2" width="16" height="16"></svg>
                        Customers
                    </a>
                </li>
            </ul>
            <hr />
            <div className="dropdown">
                <a
                    href="#"
                    className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                    id="dropdownUser1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <img
                        src="https://github.com/mdo.png"
                        alt=""
                        width="32"
                        height="32"
                        className="rounded-circle me-2"
                    />
                    <strong>storemanager</strong>
                </a>
                <ul
                    className="dropdown-menu dropdown-menu-dark text-small shadow"
                    aria-labelledby="dropdownUser1"
                >
                    <li>
                        <a className="dropdown-item" href="#">
                            New project...
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            Settings
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            Profile
                        </a>
                    </li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            Sign out
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
