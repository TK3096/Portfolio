import React from 'react'
import { useLocation } from 'react-router-dom'

import { Logo } from '@/components/navigation/Logo'
import { Menu } from '@/components/navigation/Menu'
import { Drawer } from '@/components/navigation/Drawer'

export const Navbar: React.FC = () => {
  const { pathname } = useLocation()

  return (
    <nav className='fixed w-full z-50 bg-neutral-900 bg-opacity-35'>
      <div className='max-w-[1200px] mx-auto py-3 px-4'>
        <div className='flex justify-between items-center'>
          <Logo />
          <div className='hidden md:block'>
            <Menu axis='horizontal' pathname={pathname} />
          </div>
          <div className='block md:hidden'>
            <Drawer pathname={pathname} />
          </div>
        </div>
      </div>
    </nav>
  )
}
