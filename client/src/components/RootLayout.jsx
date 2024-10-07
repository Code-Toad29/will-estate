import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function RootLayout() {
  return (
    <div>
        <Navbar />
        {/* All other pages will replace outlet */}
        <Outlet />
        {/* Add footer */}
    </div>
  )
}

export default RootLayout