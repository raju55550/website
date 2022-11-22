import React from 'react'
import Sidebar from '../../sidebar/sidebar';
import { AdminSideBarItems } from './admin.routes'

const AdminNavbar = () => {
  return <Sidebar sideBarItems={AdminSideBarItems} />
}

export default AdminNavbar