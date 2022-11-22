import React from 'react';
import AdminDashboardNav from '../admin.dashboard/admin.navbar.and.routes/admin.navbar';
import { Outlet } from 'react-router-dom';
import Nav from '../nav/nav';

const AdminDashboardLayout = () => {
  return (
    <div className='w-100 d-flex'>
      <div>
        <AdminDashboardNav />
      </div>
      <div className='w-100'>
        <div className='w-100'>
          <Nav />
        </div>
        <Outlet />
      </div>
    </div>
  );
};
export default AdminDashboardLayout;
