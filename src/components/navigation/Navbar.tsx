import React from 'react'
import { useLocation } from 'react-router-dom'

import { useScrollPosition } from '@/hooks/useScrollPosition'

import { Logo } from '@/components/navigation/Logo'
import { Menu } from '@/components/navigation/Menu'
import { Drawer } from '@/components/navigation/Drawer'

import { CONTAINER_STYLE } from '@/libs/constants'
import { cn } from '@/libs/utils'

export const Navbar: React.FC = () => {
  const { pathname } = useLocation()

  const { y } = useScrollPosition()

  return (
    <nav
      className={cn(
        'fixed w-full z-50 bg-neutral-900 bg-opacity-35 backdrop-blur-md',
        y > 30 && 'bg-opacity-80',
      )}
    >
      <div className={cn('py-3 px-4', CONTAINER_STYLE)}>
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
