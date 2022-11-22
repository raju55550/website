import React from 'react'
import Sidebar from '../../sidebar/sidebar';
import { SideBarItems } from './Routes'

const Navbar = () => {
  return <Sidebar sideBarItems={SideBarItems} />
}

export default Navbar