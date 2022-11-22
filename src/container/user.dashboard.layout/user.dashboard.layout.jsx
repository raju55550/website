import React from "react";
import UserDashboardNav from "../user.dashboard/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Nav from "../nav/nav";

const UserDashboardLayout = () => {

    return (
        <div className="w-100 d-flex">
            <div>
                <UserDashboardNav />
            </div>
            <div className="w-100">
                <div className="w-100">
                    <Nav />
                </div>
                <Outlet />
            </div>

        </div>
    )
}
export default UserDashboardLayout