import React from 'react'
import { Outlet } from 'react-router-dom'

import { Navbar } from '@/components/navigation/Navbar'

const RootLayout: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default RootLayout
